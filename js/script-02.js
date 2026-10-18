
(function(){
  "use strict";

  const O108_REVIEW_KEY = "orbit_reviews";
  const O108_LAST_SUBMIT_KEY = "last_submit_time";

  const O108_PROFANITY_EN = [
    "fuck","fucker","fucking","bitch","bastard","asshole","motherfucker","shithead","cunt"
  ];
  const O108_PROFANITY_AR = [
    "كلب","حمار","غبي","تافه","زباله","زق","خرا","قحبه","شرموط","شرموطة","كس","طيز","منيوك"
  ];

  function o108Lang(){
    try { return (localStorage.getItem("orbit_language") === "ar" || document.documentElement.lang === "ar") ? "ar" : "en"; }
    catch(e){ return "en"; }
  }

  function o108Text(en, ar){ return o108Lang() === "ar" ? ar : en; }

  function o108Normalize(text){
    return String(text || "")
      .toLowerCase()
      .replace(/[إأآ]/g,"ا")
      .replace(/ة/g,"ه")
      .replace(/ى/g,"ي")
      .replace(/[0]/g,"o")
      .replace(/[1!]/g,"i")
      .replace(/[3]/g,"e")
      .replace(/[4@]/g,"a")
      .replace(/[5$]/g,"s")
      .replace(/[7]/g,"t")
      .replace(/[8]/g,"b");
  }

  function o108Compact(text){
    return o108Normalize(text).replace(/[\s._\-–—*~`'"،,;:!?؟/\\|()[\]{}<>]+/g,"");
  }

  function o108HasProfanity(text){
    const normalized = o108Normalize(text);
    const compact = o108Compact(text);
    const words = normalized.split(/[^a-z\u0600-\u06ff]+/).filter(Boolean);
    for (const bad of O108_PROFANITY_EN) {
      const b = o108Compact(bad);
      if (words.includes(bad) || (b.length >= 4 && compact.includes(b))) return bad;
    }
    for (const bad of O108_PROFANITY_AR) {
      const b = o108Compact(bad);
      if (normalized.includes(bad) || (b.length >= 3 && compact.includes(b))) return bad;
    }
    return "";
  }

  function o108RepeatedChars(text){
    return /(.)\1{4,}/iu.test(String(text || ""));
  }

  function o108TokenStats(text){
    const tokens = o108Normalize(text).match(/[a-z\u0600-\u06ff]+/g) || [];
    const counts = {};
    tokens.forEach(t => counts[t] = (counts[t] || 0) + 1);
    let max = 0;
    Object.keys(counts).forEach(k => { if (counts[k] > max) max = counts[k]; });
    return {tokens, counts, max};
  }

  function o108RepeatedWords(text){
    const s = o108TokenStats(text);
    if (s.tokens.length >= 5 && s.max >= 4) return true;
    if (s.tokens.length >= 8 && s.max / s.tokens.length >= .55) return true;
    return false;
  }

  function o108AlternatingPattern(text){
    const tokens = o108TokenStats(text).tokens;
    if (tokens.length < 6) return false;
    // A H A H A H / yes no yes no yes no
    if (tokens[0] !== tokens[1]) {
      let alt = true;
      for (let i=2;i<tokens.length;i++) if (tokens[i] !== tokens[i%2]) { alt=false; break; }
      if (alt) return true;
    }
    // many one-letter tokens are almost always random input in an opinion
    const oneLetter = tokens.filter(t => t.length === 1).length;
    return tokens.length >= 6 && oneLetter / tokens.length >= .7;
  }

  function o108KeyboardMash(text){
    const compact = o108Compact(text);
    if (!compact) return false;
    const mash = ["asdf","qwer","zxcv","hjkl","poiuy","lkjh","mnbv","12345","09876"];
    if (mash.some(x => compact.includes(x))) return true;
    if (/^(?:[a-z]{1,3})\1{3,}$/i.test(compact)) return true;
    const letters = compact.replace(/[^a-z]/g,"");
    if (letters.length >= 10) {
      const vowels = (letters.match(/[aeiouy]/g) || []).length;
      if (vowels / letters.length < .08) return true;
    }
    return false;
  }

  function o108SymbolSpam(text){
    const s = String(text || "");
    if (s.length < 6) return false;
    const useful = (s.match(/[a-zA-Z\u0600-\u06ff0-9]/g) || []).length;
    return useful / s.length < .35;
  }

  function o108LinkSpam(text){
    const s = String(text || "");
    const links = s.match(/(?:https?:\/\/|www\.|\.com\b|\.net\b|\.org\b)/gi) || [];
    return links.length >= 1;
  }

  function o108LooksUncertain(text){
    const raw = String(text || "").trim();
    if (!raw) return false; // short opinion is optional
    const stats = o108TokenStats(raw);
    const compact = o108Compact(raw);
    if (stats.tokens.length === 1 && compact.length <= 4) return true;
    // Two very short/random-looking tokens such as "Sam A" should be reviewed, not auto-rejected.
    if (stats.tokens.length === 2 && stats.tokens.some(t => t.length === 1)) return true;
    if (stats.tokens.length <= 2 && /^[a-z\s]+$/i.test(raw)) {
      const safeShort = ["good","very good","not bad","excellent","helpful","clear","great","okay","ok","زين","وايد زين","ممتاز","واضح","خوش دكتور","خوش دكتوره"];
      if (!safeShort.includes(o108Normalize(raw).replace(/\s+/g," ").trim())) return true;
    }
    return false;
  }

  function o108Moderate(instructor, course, opinion){
    const combined = [instructor, course, opinion].join(" ");
    const bad = o108HasProfanity(combined);
    if (bad) return {decision:"reject", code:"profanity"};

    if (o108RepeatedChars(opinion) || o108RepeatedWords(opinion) || o108AlternatingPattern(opinion)) {
      return {decision:"reject", code:"repetition"};
    }
    if (o108KeyboardMash(opinion) || o108SymbolSpam(opinion)) {
      return {decision:"reject", code:"random"};
    }
    if (o108LinkSpam(opinion)) return {decision:"reject", code:"spam"};

    if (o108LooksUncertain(opinion)) return {decision:"pending", code:"uncertain"};
    return {decision:"publish", code:"clean"};
  }

  function o108RejectMessage(code){
    const map = {
      profanity: ["Your review contains inappropriate or insulting language. Please edit it and try again.", "تقييمك يحتوي على كلام غير لائق أو إهانة. عدل الكلام وجرب مرة ثانية."],
      repetition: ["Your review contains too much repeated text. Please edit it and try again.", "تقييمك فيه تكرار وايد. عدل الكلام وجرب مرة ثانية."],
      random: ["Your review looks like random or meaningless text. Please write a clear review and try again.", "التقييم يبين فيه كلام أو حروف راندم وما له معنى واضح. اكتب تقييم واضح وجرب مرة ثانية."],
      spam: ["Links or promotional spam are not allowed in reviews. Please edit it and try again.", "الروابط أو السبام الإعلاني مو مسموح داخل التقييم. عدل الكلام وجرب مرة ثانية."]
    };
    const pair = map[code] || map.random;
    return o108Text(pair[0], pair[1]);
  }

  function o108ReasonLabel(code){
    const map = {
      uncertain:["Filter was not confident about this review.","الفلتر مو متأكد من التقييم."],
      repetition:["Repeated text detected.","تم اكتشاف تكرار بالكلام."],
      random:["Random or unclear text detected.","تم اكتشاف كلام راندم أو غير واضح."],
      profanity:["Possible inappropriate language.","احتمال وجود كلام غير لائق."],
      spam:["Possible spam.","احتمال سبام."]
    };
    const p = map[code] || map.uncertain;
    return o108Text(p[0],p[1]);
  }

  function o108Read(){
    try {
      const arr = JSON.parse(localStorage.getItem(O108_REVIEW_KEY) || "[]");
      if (!Array.isArray(arr)) return [];
      return arr.map(r => {
        if (!r.status) r.status = "published"; // migrate older reviews
        return r;
      });
    } catch(e){ return []; }
  }
  function o108Write(arr){ localStorage.setItem(O108_REVIEW_KEY, JSON.stringify(arr)); }

  function o108Esc(value){
    if (typeof escapeHtml === "function") return escapeHtml(value);
    return String(value == null ? "" : value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  }

  function o108Show(msg,type){
    if (typeof showStatusV2 === "function") showStatusV2(msg,type);
    else if (typeof showStatus === "function") showStatus(msg,type);
  }

  function o108Submit(event){
    event.preventDefault();
    const form = event.currentTarget;
    const lastSubmit = Number(localStorage.getItem(O108_LAST_SUBMIT_KEY) || 0);
    const now = Date.now();
    if (lastSubmit && now-lastSubmit < 20000) {
      o108Show(o108Text("Anti-Spam: Please wait 20 seconds before submitting again.","مكافحة السبام: نطر 20 ثانية قبل لا تدز تقييم ثاني."),"error");
      return;
    }

    const fd = new FormData(form);
    const instructor = String(fd.get("instructorNameInput") || "").trim();
    const course = String(fd.get("courseCode") || "").trim();
    const opinion = String(fd.get("opinion") || "").trim();
    const result = o108Moderate(instructor, course, opinion);

    if (result.decision === "reject") {
      o108Show("❌ " + o108RejectMessage(result.code), "error");
      return;
    }

    const review = {
      id: String(Date.now()) + "_" + Math.random().toString(36).slice(2),
      ownerId: (typeof getOwnerId === "function" ? getOwnerId() : "owner_local"),
      instructor: instructor,
      course: course,
      date: String(fd.get("date") || ""),
      quizDifficulty: String(fd.get("quiz") || ""),
      teaching: String(fd.get("teaching") || ""),
      understanding: String(fd.get("understanding") || ""),
      bonusMarks: String(fd.get("bonus") || ""),
      shortOpinion: opinion,
      status: result.decision === "pending" ? "pending" : "published",
      moderationCode: result.code,
      createdAt: now
    };

    const arr = o108Read();
    arr.push(review);
    o108Write(arr);
    localStorage.setItem(O108_LAST_SUBMIT_KEY,String(now));

    if (review.status === "pending") {
      o108Show("⏳ " + o108Text(
        "Your review has been forwarded to the admin for approval. It has not been published yet. You can delete it while it is pending.",
        "تم إرسال تقييمك للأدمن للمراجعة. التقييم للحين ما اننشر، وتقدر تمسحه وهو Pending."
      ), "success");
    } else {
      o108Show("🚀 " + o108Text("Your review was published successfully.","تم نشر تقييمك بنجاح."), "success");
    }

    if (typeof resetForm === "function") resetForm(false); else form.reset();
    o108LoadPublic();
  }

  function o108DeleteOwn(id){
    const owner = (typeof getOwnerId === "function" ? getOwnerId() : "owner_local");
    const arr = o108Read();
    const target = arr.find(r => String(r.id) === String(id));
    if (!target || target.ownerId !== owner) return;
    if (!confirm(o108Text("Delete this review permanently?","متأكد تبي تمسح هالتقييم نهائيا؟"))) return;
    o108Write(arr.filter(r => String(r.id) !== String(id)));
    o108LoadPublic();
    o108LoadAdmin(document.getElementById("adminSearchInput")?.value || "");
  }

  function o108LoadPublic(){
    const list = document.getElementById("publicReviewsList");
    if (!list) return;
    const search = String(document.getElementById("publicSearchInput")?.value || "").trim().toLowerCase();
    const owner = (typeof getOwnerId === "function" ? getOwnerId() : "owner_local");
    const all = o108Read().filter(r => {
      const searchable = String(r.instructor||"").toLowerCase().includes(search) || String(r.course||"").toLowerCase().includes(search);
      if (search && !searchable) return false;
      return r.status === "published" || (r.status === "pending" && r.ownerId === owner);
    }).slice().reverse();

    if (!all.length) {
      list.innerHTML = '<p style="color:var(--olive-medium);">' + o108Esc(o108Text("No reviews stored yet.","ماكو تقييمات للحين.")) + '</p>';
      return;
    }

    list.innerHTML = all.map(r => {
      const mine = r.ownerId === owner;
      const pending = r.status === "pending";
      const badge = pending
        ? '<span class="orbit-status-badge orbit-status-pending">⏳ ' + o108Esc(o108Text("Pending","قيد المراجعة")) + '</span>'
        : '';
      const note = pending
        ? '<div class="orbit-pending-note">' + o108Esc(o108Text("Not published yet — waiting for admin approval. You can delete it anytime while pending.","للحين ما اننشر — ناطر موافقة الأدمن. تقدر تمسحه بأي وقت وهو قيد المراجعة.")) + '</div>'
        : '';
      return '<div class="review-stacked-item">' +
        '<div style="font-weight:900;color:var(--olive-dark);">👨‍🏫 ' + o108Esc(r.instructor || "N/A") + badge + (mine ? ' <span style="font-size:.72rem;">(' + o108Esc(o108Text("Your review","تقييمك")) + ')</span>' : '') + '</div>' +
        '<div style="font-size:.88rem;margin:6px 0;">📚 ' + o108Esc(r.course || "N/A") + ' | 🗓️ ' + o108Esc(r.date || "N/A") + '</div>' +
        '<div style="font-size:.88rem;">' + o108Esc(o108Text("Quiz","الكويز")) + ': ' + o108Esc(r.quizDifficulty || "N/A") + ' | ' + o108Esc(o108Text("Teaching","الشرح")) + ': ' + o108Esc(r.teaching || "N/A") + ' | ' + o108Esc(o108Text("Understanding","الفهم")) + ': ' + o108Esc(r.understanding || "N/A") + '</div>' +
        (r.shortOpinion ? '<div style="margin-top:7px;"><em>“' + o108Esc(r.shortOpinion) + '”</em></div>' : '') + note +
        (mine ? '<button type="button" class="btn-danger o108-own-delete" data-review-id="' + o108Esc(r.id) + '" style="margin-top:8px;">' + o108Esc(o108Text("Delete Review","مسح التقييم")) + '</button>' : '') +
        '</div>';
    }).join("");
  }

  function o108Approve(id){
    const arr = o108Read();
    const idx = arr.findIndex(r => String(r.id) === String(id));
    if (idx < 0) return;
    arr[idx].status = "published";
    arr[idx].moderationCode = "approved_by_admin";
    arr[idx].approvedAt = Date.now();
    o108Write(arr);
    o108LoadAdmin(document.getElementById("adminSearchInput")?.value || "");
    o108LoadPublic();
  }

  function o108AdminDelete(id){
    if (!confirm(o108Text("Delete this review permanently?","متأكد تبي تمسح هالتقييم نهائيا؟"))) return;
    o108Write(o108Read().filter(r => String(r.id) !== String(id)));
    o108LoadAdmin(document.getElementById("adminSearchInput")?.value || "");
    o108LoadPublic();
  }

  function o108ReviewCard(r, pending){
    return '<div class="review-stacked-item">' +
      '<div style="font-weight:900;color:var(--olive-dark);margin-bottom:6px;">👨‍🏫 ' + o108Esc(r.instructor || "N/A") +
      (pending ? '<span class="orbit-status-badge orbit-status-pending">⏳ ' + o108Esc(o108Text("Pending","قيد المراجعة")) + '</span>' : '<span class="orbit-status-badge orbit-status-published">✓ ' + o108Esc(o108Text("Published","منشور")) + '</span>') + '</div>' +
      '<div style="font-size:.88rem;margin-bottom:6px;">📚 ' + o108Esc(r.course || "N/A") + ' | 🗓️ ' + o108Esc(r.date || "N/A") + '</div>' +
      '<div style="font-size:.88rem;">' + o108Esc(o108Text("Quiz","الكويز")) + ': ' + o108Esc(r.quizDifficulty || "N/A") + ' | ' + o108Esc(o108Text("Teaching","الشرح")) + ': ' + o108Esc(r.teaching || "N/A") + ' | ' + o108Esc(o108Text("Understanding","الفهم")) + ': ' + o108Esc(r.understanding || "N/A") + '</div>' +
      (r.shortOpinion ? '<div style="margin-top:7px;background:#faf4db;padding:7px 9px;border-radius:7px;"><em>“' + o108Esc(r.shortOpinion) + '”</em></div>' : '') +
      (pending ? '<div class="orbit-review-reason">⚠️ ' + o108Esc(o108Text("Reason: ","السبب: ") + o108ReasonLabel(r.moderationCode)) + '</div>' : '') +
      '<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;">' +
      (pending ? '<button type="button" class="btn-approve" data-o108-action="approve" data-review-id="' + o108Esc(r.id) + '">✓ ' + o108Esc(o108Text("Approve","موافقة")) + '</button>' : '') +
      '<button type="button" class="btn-danger" data-o108-action="delete" data-review-id="' + o108Esc(r.id) + '">' + o108Esc(o108Text("Delete","مسح")) + '</button>' +
      '</div></div>';
  }

  function o108LoadAdmin(searchFilter){
    const list = document.getElementById("adminDataList");
    if (!list) return;
    const filter = String(searchFilter || "").trim().toLowerCase();
    const all = o108Read().filter(r => !filter || String(r.instructor||"").toLowerCase().includes(filter) || String(r.course||"").toLowerCase().includes(filter));
    const pending = all.filter(r => r.status === "pending").slice().reverse();
    const published = all.filter(r => r.status === "published").slice().reverse();
    const count = document.getElementById("submissionCount");
    if (count) count.textContent = String(all.length);

    if (!all.length) {
      list.innerHTML = '<p style="color:var(--olive-medium);">' + o108Esc(o108Text("No reviews stored yet.","ماكو تقييمات للحين.")) + '</p>';
      return;
    }

    let html = '<div class="orbit-admin-queue"><h3>⏳ ' + o108Esc(o108Text("Pending Review Queue","التقييمات الناطرة موافقة")) + ' (' + pending.length + ')</h3>';
    html += pending.length ? pending.map(r => o108ReviewCard(r,true)).join("") : '<p style="margin:0;color:var(--olive-medium);">' + o108Esc(o108Text("No pending reviews.","ماكو تقييمات ناطرة موافقة.")) + '</p>';
    html += '</div>';
    html += '<h3 style="color:var(--olive-dark);margin:8px 0 10px;">✓ ' + o108Esc(o108Text("Published Reviews","التقييمات المنشورة")) + ' (' + published.length + ')</h3>';
    html += published.length ? published.map(r => o108ReviewCard(r,false)).join("") : '<p style="color:var(--olive-medium);">' + o108Esc(o108Text("No published reviews.","ماكو تقييمات منشورة.")) + '</p>';
    list.innerHTML = html;
  }

  // Remove the two older submit listeners by cloning the form, then attach the 1.08 workflow once.
  const oldForm = document.getElementById("feedbackForm");
  if (oldForm) {
    const newForm = oldForm.cloneNode(true);
    oldForm.replaceWith(newForm);
    newForm.addEventListener("submit", o108Submit);
  }

  // Replace admin list to remove old edit/delete delegated listener; 1.08 uses Approve/Delete for pending.
  const oldAdminList = document.getElementById("adminDataList");
  if (oldAdminList) {
    const newAdminList = oldAdminList.cloneNode(false);
    oldAdminList.replaceWith(newAdminList);
    newAdminList.addEventListener("click", function(e){
      const btn = e.target.closest("button[data-o108-action]");
      if (!btn) return;
      if (btn.dataset.o108Action === "approve") o108Approve(btn.dataset.reviewId);
      if (btn.dataset.o108Action === "delete") o108AdminDelete(btn.dataset.reviewId);
    });
  }

  const publicList = document.getElementById("publicReviewsList");
  if (publicList) publicList.addEventListener("click", function(e){
    const btn = e.target.closest("button.o108-own-delete");
    if (btn) o108DeleteOwn(btn.dataset.reviewId);
  });

  const adminSearch = document.getElementById("adminSearchInput");
  if (adminSearch) adminSearch.addEventListener("input", function(){ o108LoadAdmin(this.value); });
  const publicSearch = document.getElementById("publicSearchInput");
  if (publicSearch) publicSearch.addEventListener("input", o108LoadPublic);

  // Override global render/filter functions used elsewhere by the existing UI.
  window.loadPublicReviews = o108LoadPublic;
  window.loadAdminData = o108LoadAdmin;
  window.filterAdminData = function(){ o108LoadAdmin(document.getElementById("adminSearchInput")?.value || ""); };
  window.deleteOwnReview = o108DeleteOwn;

  o108Write(o108Read()); // migrate older reviews to published status
  o108LoadPublic();

  // Small test hook for this prototype: available from browser console only.
  window.KTECH_ORBIT_108_TEST = function(text){ return o108Moderate("Dr. Test","IST100",text); };
})();
