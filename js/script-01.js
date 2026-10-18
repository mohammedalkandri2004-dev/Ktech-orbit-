
    const knownInstructorsV2 = [
        "Alaa Zayed", "Adnan Oudah", "Prof. Issam Moghrabi", "Dr Reem M. Al Qenai",
        "Riham Hakkani", "Abdelrahman Enayah", "Ebtehal Al Ayoub", "Batoul Salman",
        "Dr. Remie Nasr", "Ali El Khatib", "Annet Noel", "Fatma Rezk",
        "Mary Nelson", "Ahlam Mousa", "Tina Daniel", "Yousef Saeam",
        "Dhai Aljeeran", "Mohammad Alqallaf", "Nada Farah"
    ];

    const badWordsV2 = ["badword", "stupid", "idiot", "dumb", "hate", "scam", "fool", "crap", "trash", "worst", "suck"];
    const ADMIN_PASSWORD_V2 = "ktech2004";

    const translations = {
        en: {
            pageTitle: "KTECH Orbit | Instructor Feedback Hub",
            subtitle: "Course & Instructor Feedback Hub",
            anonymous: "🔒 100% Anonymous",
            navHome: "Home", navReview: "Instructor Review", navReviews: "Student Reviews", navReviewBio: "Open the review app and submit instructor feedback.", navReviewsBio: "Browse feedback and experiences shared by KTECH students.", navChat: "Chat", navContact: "Contact",
            homeTitle: "Everything around one student platform.", homeText: "Choose a section below. Each KTECH Orbit service has its own space, while Orbit Chat stays available wherever you are.",
            cardReviewTitle: "Instructor Review", cardReviewText: "Open the review app and submit instructor feedback.", cardReviewsTitle: "Student Reviews", cardReviewsText: "Browse feedback shared by students.", cardChatTitle: "Orbit Chat", cardChatText: "Ask KTECH questions without leaving your current page.", cardContactTitle: "Contact", cardContactText: "Send feedback or get help with KTECH Orbit.", openChat: "Open Orbit Chat", closeChat: "Close chat",
            privacyHtml: "🛡️ <strong>Student Shield:</strong> Submit your honest review! Spam, gibberish, and profanity filters are enabled.",
            instructorLabel: "Instructor Name",
            instructorPlaceholder: "Type Instructor Name...",
            courseLabel: "Course Name / Code",
            coursePlaceholder: "e.g. CS101 / Java Programming",
            dateLabel: "Date",
            datePlaceholder: "DD/MM/YYYY",
            quizHeader: "Quiz Difficulty",
            teachingHeader: "Teaching Quality",
            understandingHeader: "Understanding",
            bonusHeader: "Bonus Marks / Pushes",
            opinionHeader: "Short Opinion & Suggestions",
            opinionPlaceholder: "Does he/she give pushes, bonuses? Are quizzes hard? Write suggestions...",
            easy: "Easy",
            medium: "Medium",
            hard: "Hard",
            needsWork: "Needs work",
            good: "Good",
            excellent: "Excellent",
            hardToFollow: "Hard to follow",
            mostlyClear: "Mostly clear",
            veryClear: "Very clear",
            never: "Never",
            sometimes: "Sometimes",
            often: "Often",
            clear: "Clear All",
            submit: "Submit Feedback 🚀",
            contactTitle: "Feedback & Contact",
            contactText: "Have feedback or need help with KTECH Orbit? Email us directly.",
            headerContactText: "Have feedback or a suggestion?",
            adminTitle: "🔑 KTECH Orbit Admin Panel",
            adminPrompt: "Enter master password to view feedback:",
            passwordPlaceholder: "Master Password",
            authenticate: "Authenticate",
            searchPlaceholder: "🔍 Type instructor name to view stacked reviews...",
            instructorFiles: "Instructor Files",
            deleteAll: "Delete All Data",
            close: "Close",
            openAdmin: "Open Admin Panel",
            antiSpam: "🚨 Anti-Spam Alert: Please wait 20 seconds before submitting again.",
            gibberish: "❌ Submission rejected: Detected meaningless/gibberish text.",
            success: "🚀 Review for {name} added to their file!",
            confirmReset: "Are you sure you want to clear this form?",
            wrongPassword: "Incorrect Admin Password",
            noReviews: "No reviews stored yet.",
            noMatches: "No instructor files found matching your search.",
            file: "File",
            review: "Review",
            reviews: "Reviews Stacked",
            course: "Course",
            date: "Date",
            notAvailable: "N/A",
            quiz: "Quiz",
            teaching: "Teaching",
            understanding: "Understanding",
            bonus: "Bonus/Pushes",
            edit: "Edit Review",
            delete: "Delete",
            confirmDelete: "Delete this specific review from the instructor file?",
            editPrompt: "Edit review text:",
            confirmDeleteAll: "Are you sure you want to delete ALL stored reviews permanently?",
            publicTitle: "Student Reviews", publicText: "Everyone can view reviews  You can permanently delete reviews submitted from this browser, but regular users cannot edit reviews", publicSearch: "Search instructor reviews...", yourReview: "Your review", deleted: "Review permanently deleted",
            aiTitle: "🪐 Ask KTECH Orbit", aiBadge: "KTECH-only assistant", aiDisclaimer: "KTECH Orbit is an independent student project. Tap a question for a direct answer and useful KTECH links.", aiWelcome: "Welcome! Tap an option below to ask a question — no typing needed.", aiPlaceholder: "Ask about KTECH...", aiSend: "Send 🚀", aiReady: "Ready", aiThinking: "Orbit is checking the verified KTECH information...", aiError: "Could not connect to the KTECH Orbit service."
        },
        ar: {
            pageTitle: "KTECH Orbit | مركز تقييم الدكاترة",
            subtitle: "مركز تقييم المقررات والدكاترة",
            anonymous: "🔒 مجهول الهوية 100%",
            navHome: "الرئيسية", navReview: "تقييم الدكاترة", navReviews: "تقييمات الطلبة", navReviewBio: "افتح تطبيق التقييم وشارك تقييمك وتجربتك مع الدكتور.", navReviewsBio: "تصفح آراء وتجارب طلبة KTECH.", navChat: "المحادثة", navContact: "تواصل",
            homeTitle: "كل شي يحتاجه الطالب حول منصة وحدة.", homeText: "اختار القسم اللي تبيه. كل خدمة في KTECH Orbit لها مساحتها الخاصة، ومحادثة Orbit تظل متاحة لك من أي مكان.",
            cardReviewTitle: "تقييم الدكاترة", cardReviewText: "افتح تطبيق التقييم وشارك تجربتك مع الدكتور.", cardReviewsTitle: "تقييمات الطلبة", cardReviewsText: "شوف التقييمات والتجارب اللي شاركها الطلبة.", cardChatTitle: "محادثة Orbit", cardChatText: "اسأل عن KTECH بدون ما تطلع من القسم اللي انت فيه.", cardContactTitle: "تواصل معنا", cardContactText: "ارسل اقتراحك أو اطلب مساعدة بخصوص KTECH Orbit.", openChat: "فتح محادثة Orbit", closeChat: "إغلاق المحادثة",
            privacyHtml: "🛡️ <strong>حماية الطالب:</strong> شارك تقييمك بكل صراحة! تم تفعيل الحماية من السبام والكلام العشوائي والألفاظ غير المناسبة.",
            instructorLabel: "اسم الدكتور",
            instructorPlaceholder: "اكتب اسم الدكتور...",
            courseLabel: "اسم المقرر / الرمز",
            coursePlaceholder: "مثال: CS101 / Java Programming",
            dateLabel: "التاريخ",
            datePlaceholder: "يوم/شهر/سنة",
            quizHeader: "صعوبة الكويز",
            teachingHeader: "جودة التدريس",
            understandingHeader: "وضوح الشرح",
            bonusHeader: "البونس / البوش",
            opinionHeader: "رأي مختصر واقتراحات",
            opinionPlaceholder: "هل يعطي بوش أو بونس؟ هل الكويزات صعبة؟ اكتب رأيك واقتراحاتك...",
            easy: "سهل",
            medium: "متوسط",
            hard: "صعب",
            needsWork: "يحتاج تحسين",
            good: "جيد",
            excellent: "ممتاز",
            hardToFollow: "صعب المتابعة",
            mostlyClear: "واضح غالبا",
            veryClear: "واضح جدا",
            never: "أبدا",
            sometimes: "أحيانا",
            often: "غالبا",
            clear: "مسح الكل",
            submit: "إرسال التقييم 🚀",
            contactTitle: "الملاحظات والتواصل",
            contactText: "عندك ملاحظة أو تحتاج مساعدة بخصوص KTECH Orbit؟ تواصل معنا مباشرة عبر الإيميل.",
            headerContactText: "عندك ملاحظة أو اقتراح؟",
            adminTitle: "🔑 لوحة تحكم KTECH Orbit",
            adminPrompt: "اكتب كلمة المرور لعرض التقييمات:",
            passwordPlaceholder: "كلمة المرور",
            authenticate: "دخول",
            searchPlaceholder: "🔍 اكتب اسم الدكتور لعرض كل تقييماته...",
            instructorFiles: "ملفات الدكاترة",
            deleteAll: "حذف جميع البيانات",
            close: "إغلاق",
            openAdmin: "فتح لوحة التحكم",
            antiSpam: "🚨 يرجى الانتظار 20 ثانية قبل إرسال تقييم آخر.",
            gibberish: "❌ تم رفض الإرسال بسبب وجود كلام عشوائي أو غير مفهوم.",
            success: "🚀 تمت إضافة تقييم {name} إلى ملفه!",
            confirmReset: "هل أنت متأكد أنك تريد مسح جميع البيانات من النموذج؟",
            wrongPassword: "كلمة المرور غير صحيحة",
            noReviews: "لا توجد تقييمات محفوظة حاليا.",
            noMatches: "لا توجد ملفات دكاترة مطابقة للبحث.",
            file: "ملف",
            review: "تقييم واحد",
            reviews: "تقييمات",
            course: "المقرر",
            date: "التاريخ",
            notAvailable: "غير متوفر",
            quiz: "الكويز",
            teaching: "التدريس",
            understanding: "الوضوح",
            bonus: "البونس/البوش",
            edit: "تعديل التقييم",
            delete: "حذف",
            confirmDelete: "هل تريد حذف هذا التقييم من ملف الدكتور؟",
            editPrompt: "عدل نص التقييم:",
            confirmDeleteAll: "هل أنت متأكد أنك تريد حذف جميع التقييمات نهائيا؟",
            publicTitle: "تقييمات الطلبة", publicText: "الجميع يقدر يشوف التقييمات  وتقدر تحذف نهائيا التقييمات اللي أرسلتها من هذا المتصفح، والمستخدم العادي ما يقدر يعدل التقييم", publicSearch: "ابحث عن تقييمات دكتور...", yourReview: "تقييمك", deleted: "تم حذف التقييم نهائيا",
            aiTitle: "🪐 اسأل KTECH Orbit", aiBadge: "مساعد خاص بـ KTECH", aiDisclaimer: "KTECH Orbit مشروع طلابي مستقل. اضغط على أي سؤال عشان تحصل على جواب واضح وروابط مفيدة من KTECH.", aiWelcome: "هلا فيك! اضغط على الخيارات اللي تحت عشان تسأل — بدون كتابة.", aiPlaceholder: "اسأل عن KTECH...", aiSend: "إرسال 🚀", aiReady: "جاهز", aiThinking: "Orbit قاعد يراجع معلومات KTECH الموثقة...", aiError: "تعذر الاتصال بخدمة KTECH Orbit."
        }
    };

    let currentLanguage = localStorage.getItem("orbit_language") === "ar" ? "ar" : "en";

    function tr(key) {
        return translations[currentLanguage][key] || translations.en[key] || key;
    }

    function setText(id, value) {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    }

    function setPlaceholder(id, value) {
        const element = document.getElementById(id);
        if (element) element.placeholder = value;
    }

    function escapeHtml(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function cleanProfanityV2(text) {
        if (!text) return "";
        let cleaned = String(text);
        badWordsV2.forEach(function(word) {
            const regex = new RegExp("\\b" + word + "\\b", "gi");
            cleaned = cleaned.replace(regex, "***");
        });
        return cleaned;
    }

    function isGibberishV2(text) {
        if (!text || String(text).trim().length === 0) return false;
        const cleanText = String(text).trim();
        if (cleanText.length > 15 && !cleanText.includes(" ")) return true;
        if (/(.)\1{3,}/i.test(cleanText)) return true;
        const lettersOnly = cleanText.replace(/[^a-zA-Z]/g, "");
        if (lettersOnly.length > 8) {
            const vowels = lettersOnly.match(/[aeiouy]/gi);
            const ratio = (vowels ? vowels.length : 0) / lettersOnly.length;
            if (ratio < 0.10) return true;
        }
        return false;
    }

    function getOwnerId() {
        let ownerId = localStorage.getItem("orbit_owner_id");
        if (!ownerId) {
            ownerId = "owner_" + Date.now() + "_" + Math.random().toString(36).slice(2);
            localStorage.setItem("orbit_owner_id", ownerId);
        }
        return ownerId;
    }

    function readReviews() {
        try {
            const reviews = JSON.parse(localStorage.getItem("orbit_reviews") || "[]");
            return Array.isArray(reviews) ? reviews : [];
        } catch (error) {
            return [];
        }
    }

    function writeReviews(reviews) {
        localStorage.setItem("orbit_reviews", JSON.stringify(reviews));
    }

    function translateRating(value) {
        const ratingKeys = {
            "Easy": "easy",
            "Medium": "medium",
            "Hard": "hard",
            "Needs work": "needsWork",
            "Good": "good",
            "Excellent": "excellent",
            "Hard to follow": "hardToFollow",
            "Mostly clear": "mostlyClear",
            "Very clear": "veryClear",
            "Never": "never",
            "Sometimes": "sometimes",
            "Often": "often"
        };
        return ratingKeys[value] ? tr(ratingKeys[value]) : (value || tr("notAvailable"));
    }

    function setLanguage(language) {
        currentLanguage = language === "ar" ? "ar" : "en";
        localStorage.setItem("orbit_language", currentLanguage);
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
        document.title = tr("pageTitle");

        setText("subtitleText", tr("subtitle"));
        setText("navHome", tr("navHome"));
        setText("navReview", tr("navReview"));
        setText("navReviews", tr("navReviews"));
        setText("navReviewBio", tr("navReviewBio"));
        setText("navReviewsBio", tr("navReviewsBio"));
        setText("navChat", tr("navChat"));
        setText("navContact", tr("navContact"));
        setText("homeTitle", tr("homeTitle"));
        setText("homeText", tr("homeText"));
        setText("cardReviewTitle", tr("cardReviewTitle"));
        setText("cardReviewText", tr("cardReviewText"));
        setText("cardReviewsTitle", tr("cardReviewsTitle"));
        setText("cardReviewsText", tr("cardReviewsText"));
        setText("cardChatTitle", tr("cardChatTitle"));
        setText("cardChatText", tr("cardChatText"));
        setText("cardContactTitle", tr("cardContactTitle"));
        setText("cardContactText", tr("cardContactText"));
        setText("anonBadge", tr("anonymous"));
        document.getElementById("privacyText").innerHTML = tr("privacyHtml");
        setText("instructorLabel", tr("instructorLabel"));
        setPlaceholder("instructorNameInput", tr("instructorPlaceholder"));
        setText("courseLabel", tr("courseLabel"));
        setPlaceholder("courseCode", tr("coursePlaceholder"));
        setText("dateLabel", tr("dateLabel"));
        setPlaceholder("date", tr("datePlaceholder"));
        setText("quizHeader", tr("quizHeader"));
        setText("teachingHeader", tr("teachingHeader"));
        setText("understandingHeader", tr("understandingHeader"));
        setText("bonusHeader", tr("bonusHeader"));
        setText("opinionHeader", tr("opinionHeader"));
        setPlaceholder("opinionInput", tr("opinionPlaceholder"));
        setText("clearButton", tr("clear"));
        setText("submitButton", tr("submit"));
        setText("contactTitle", tr("contactTitle"));
        setText("publicReviewsTitle", tr("publicTitle"));
        setText("publicReviewsText", tr("publicText"));
        setText("orbitAiTitle", tr("aiTitle"));
        setText("orbitAiBadge", tr("aiBadge"));
        setText("orbitAiDisclaimer", tr("aiDisclaimer"));
        setText("orbitAiWelcome", tr("aiWelcome"));
        setPlaceholder("orbitUserInput", tr("aiPlaceholder"));
        setText("orbitSendButton", tr("aiSend"));
        setPlaceholder("publicSearchInput", tr("publicSearch"));
        setText("contactText", tr("contactText"));
        setText("headerContactText", tr("headerContactText"));
        setText("adminTitle", tr("adminTitle"));
        setText("adminPrompt", tr("adminPrompt"));
        setPlaceholder("adminPassword", tr("passwordPlaceholder"));
        setText("authenticateButton", tr("authenticate"));
        setPlaceholder("adminSearchInput", tr("searchPlaceholder"));
        setText("instructorFilesLabel", tr("instructorFiles"));
        setText("deleteAllButton", tr("deleteAll"));

        document.getElementById("duckAvatarBtn").title = tr("openAdmin");
        document.getElementById("duckAvatarBtn").setAttribute("aria-label", tr("openAdmin"));
        document.getElementById("closeAdminButton").setAttribute("aria-label", tr("close"));
        document.getElementById("orbitChatFab").setAttribute("aria-label", tr("openChat"));
        document.getElementById("orbitChatFab").title = tr("openChat");
        document.getElementById("orbitChatClose").setAttribute("aria-label", tr("closeChat"));

        document.querySelectorAll("[data-option-key]").forEach(function(element) {
            element.textContent = tr(element.dataset.optionKey);
        });

        document.getElementById("langEn").classList.toggle("active", currentLanguage === "en");
        document.getElementById("langAr").classList.toggle("active", currentLanguage === "ar");
        document.getElementById("langEn").setAttribute("aria-pressed", String(currentLanguage === "en"));
        document.getElementById("langAr").setAttribute("aria-pressed", String(currentLanguage === "ar"));

        if (document.getElementById("adminDashboard").style.display !== "none") {
            filterAdminData();
        }
    }

    function populateSuggestionsV2() {
        const datalist = document.getElementById("instructorSuggestions");
        datalist.innerHTML = "";
        knownInstructorsV2.forEach(function(instructor) {
            const option = document.createElement("option");
            option.value = instructor;
            datalist.appendChild(option);
        });
    }

    function showStatusV2(message, type) {
        const element = document.getElementById("statusMsg");
        element.textContent = message;
        element.className = "status-msg status-" + type;
        element.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.setTimeout(function() {
            element.style.display = "none";
        }, 6000);
    }

    function resetForm(confirmRequired) {
        const shouldConfirm = confirmRequired !== false;
        if (!shouldConfirm || confirm(tr("confirmReset"))) {
            document.getElementById("feedbackForm").reset();
            document.getElementById("date").value = new Date().toLocaleDateString("en-GB");
        }
    }

    function openAdminModal() {
        document.getElementById("adminModal").style.display = "flex";
        window.setTimeout(function() {
            document.getElementById("adminPassword").focus();
        }, 0);
    }

    function closeAdminModal() {
        document.getElementById("adminModal").style.display = "none";
    }

    function loginAdmin() {
        const input = document.getElementById("adminPassword").value.trim();
        if (input === ADMIN_PASSWORD_V2) {
            document.getElementById("adminAuthSection").style.display = "none";
            document.getElementById("adminDashboard").style.display = "block";
            loadAdminData();
        } else {
            alert(tr("wrongPassword"));
        }
    }

    function loadAdminData(searchFilter) {
        const filter = String(searchFilter || "").trim().toLowerCase();
        const list = document.getElementById("adminDataList");
        const rawReviews = readReviews();

        if (rawReviews.length === 0) {
            list.innerHTML = '<p style="color: var(--olive-medium);">' + escapeHtml(tr("noReviews")) + "</p>";
            document.getElementById("submissionCount").textContent = "0";
            return;
        }

        const stackedFiles = {};
        rawReviews.forEach(function(review) {
            const displayName = String(review.instructor || "").trim() || tr("notAvailable");
            const key = displayName.toLowerCase();
            if (!stackedFiles[key]) {
                stackedFiles[key] = { displayName: displayName, reviews: [] };
            }
            stackedFiles[key].reviews.push(review);
        });

        const filteredKeys = Object.keys(stackedFiles).filter(function(key) {
            return key.includes(filter);
        });

        document.getElementById("submissionCount").textContent = String(filteredKeys.length);

        if (filteredKeys.length === 0) {
            list.innerHTML = '<p style="color: var(--olive-medium);">' + escapeHtml(tr("noMatches")) + "</p>";
            return;
        }

        list.innerHTML = filteredKeys.map(function(key) {
            const file = stackedFiles[key];
            const countLabel = file.reviews.length === 1 ? tr("review") : tr("reviews");
            const reviewMarkup = file.reviews.map(function(review) {
                const opinionMarkup = review.shortOpinion
                    ? '<div style="font-size: 0.88rem; background: #faf4db; padding: 6px 10px; border-radius: 6px; border-left: 3px solid var(--olive-dark);"><em>"' + escapeHtml(review.shortOpinion) + '"</em></div>'
                    : "";

                return '<div class="review-stacked-item">' +
                    '<div style="font-weight: 800; color: var(--olive-dark); margin-bottom: 6px;">📚 ' +
                    escapeHtml(tr("course")) + ": " + escapeHtml(review.course || tr("notAvailable")) +
                    " | 🗓️ " + escapeHtml(tr("date")) + ": " + escapeHtml(review.date || tr("notAvailable")) + "</div>" +
                    '<div style="font-size: 0.9rem; margin-bottom: 6px;">' +
                    "<strong>" + escapeHtml(tr("quiz")) + ":</strong> " + escapeHtml(translateRating(review.quizDifficulty)) + " | " +
                    "<strong>" + escapeHtml(tr("teaching")) + ":</strong> " + escapeHtml(translateRating(review.teaching)) + " | " +
                    "<strong>" + escapeHtml(tr("understanding")) + ":</strong> " + escapeHtml(translateRating(review.understanding)) + " | " +
                    "<strong>" + escapeHtml(tr("bonus")) + ":</strong> " + escapeHtml(translateRating(review.bonusMarks)) +
                    "</div>" + opinionMarkup +
                    '<div style="margin-top: 8px; display: flex; gap: 6px; flex-wrap: wrap;">' +
                    '<button type="button" class="btn-edit" data-action="edit" data-review-id="' + escapeHtml(review.id) + '">' + escapeHtml(tr("edit")) + "</button>" +
                    '<button type="button" class="btn-danger" data-action="delete" data-review-id="' + escapeHtml(review.id) + '">' + escapeHtml(tr("delete")) + "</button>" +
                    "</div></div>";
            }).join("");

            return '<div class="instructor-file-card">' +
                '<div class="instructor-file-title"><span>👨‍🏫 ' + escapeHtml(tr("file")) + ": " + escapeHtml(file.displayName) + "</span>" +
                '<span style="font-size: 0.85rem; background: var(--olive-dark); color: var(--yellow-main); padding: 4px 10px; border-radius: 20px;">' +
                String(file.reviews.length) + " " + escapeHtml(countLabel) + "</span></div>" +
                reviewMarkup + "</div>";
        }).join("");
    }

    function filterAdminData() {
        loadAdminData(document.getElementById("adminSearchInput").value);
    }

    function deleteReviewItem(reviewId) {
        if (!confirm(tr("confirmDelete"))) return;
        const reviews = readReviews().filter(function(review) {
            return String(review.id) !== String(reviewId);
        });
        writeReviews(reviews);
        filterAdminData();
    }

    function editReviewText(reviewId) {
        const reviews = readReviews();
        const targetIndex = reviews.findIndex(function(review) {
            return String(review.id) === String(reviewId);
        });
        if (targetIndex === -1) return;

        const newText = prompt(tr("editPrompt"), reviews[targetIndex].shortOpinion || "");
        if (newText === null) return;

        reviews[targetIndex].shortOpinion = cleanProfanityV2(newText.trim());
        writeReviews(reviews);
        filterAdminData();
    }

    function loadPublicReviews() {
        const list = document.getElementById("publicReviewsList");
        const search = String(document.getElementById("publicSearchInput").value || "").trim().toLowerCase();
        const ownerId = getOwnerId();
        const reviews = readReviews().filter(function(review) {
            return !search || String(review.instructor || "").toLowerCase().includes(search) || String(review.course || "").toLowerCase().includes(search);
        }).slice().reverse();
        if (!reviews.length) { list.innerHTML = '<p style="color:var(--olive-medium);">' + escapeHtml(tr("noReviews")) + '</p>'; return; }
        list.innerHTML = reviews.map(function(review) {
            const mine = review.ownerId && review.ownerId === ownerId;
            return '<div class="review-stacked-item">' +
                '<div style="font-weight:900;color:var(--olive-dark);">👨‍🏫 ' + escapeHtml(review.instructor || tr("notAvailable")) + (mine ? ' <span style="font-size:.72rem;">(' + escapeHtml(tr("yourReview")) + ')</span>' : '') + '</div>' +
                '<div style="font-size:.88rem;margin:6px 0;">📚 ' + escapeHtml(review.course || tr("notAvailable")) + ' | 🗓️ ' + escapeHtml(review.date || tr("notAvailable")) + '</div>' +
                '<div style="font-size:.88rem;">' + escapeHtml(tr("quiz")) + ': ' + escapeHtml(translateRating(review.quizDifficulty)) + ' | ' + escapeHtml(tr("teaching")) + ': ' + escapeHtml(translateRating(review.teaching)) + ' | ' + escapeHtml(tr("understanding")) + ': ' + escapeHtml(translateRating(review.understanding)) + '</div>' +
                (review.shortOpinion ? '<div style="margin-top:7px;"><em>“' + escapeHtml(review.shortOpinion) + '”</em></div>' : '') +
                (mine ? '<button type="button" class="btn-danger public-delete" data-review-id="' + escapeHtml(review.id) + '" style="margin-top:8px;">' + escapeHtml(tr("delete")) + '</button>' : '') +
                '</div>';
        }).join("");
    }

    function deleteOwnReview(reviewId) {
        const ownerId = getOwnerId();
        const reviews = readReviews();
        const target = reviews.find(function(r) { return String(r.id) === String(reviewId); });
        if (!target || target.ownerId !== ownerId) return;
        if (!confirm(tr("confirmDelete"))) return;
        writeReviews(reviews.filter(function(r) { return String(r.id) !== String(reviewId); }));
        loadPublicReviews();
        if (document.getElementById("adminDashboard").style.display !== "none") filterAdminData();
    }

    function clearAllData() {
        if (!confirm(tr("confirmDeleteAll"))) return;
        localStorage.removeItem("orbit_reviews");
        filterAdminData();
    }

    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const lastSubmit = Number(localStorage.getItem("last_submit_time") || 0);
        const now = Date.now();
        if (lastSubmit && now - lastSubmit < 20000) {
            showStatusV2(tr("antiSpam"), "error");
            return;
        }

        const formData = new FormData(this);
        const instructorRaw = String(formData.get("instructorNameInput") || "");
        const courseCode = String(formData.get("courseCode") || "");
        const opinion = String(formData.get("opinion") || "");

        if (isGibberishV2(instructorRaw) || isGibberishV2(courseCode) || isGibberishV2(opinion)) {
            showStatusV2(tr("gibberish"), "error");
            return;
        }

        const reviewData = {
            id: String(Date.now()) + "_" + Math.random().toString(36).slice(2),
            ownerId: getOwnerId(),
            instructor: cleanProfanityV2(instructorRaw.trim()),
            course: cleanProfanityV2(courseCode.trim()),
            date: String(formData.get("date") || ""),
            quizDifficulty: String(formData.get("quiz") || ""),
            teaching: String(formData.get("teaching") || ""),
            understanding: String(formData.get("understanding") || ""),
            bonusMarks: String(formData.get("bonus") || ""),
            shortOpinion: cleanProfanityV2(opinion.trim())
        };

        const reviews = readReviews();
        reviews.push(reviewData);
        writeReviews(reviews);
        localStorage.setItem("last_submit_time", String(now));

        showStatusV2(tr("success").replace("{name}", reviewData.instructor), "success");
        resetForm(false);
        loadPublicReviews();
    });

    document.getElementById("publicSearchInput").addEventListener("input", loadPublicReviews);
    document.getElementById("publicReviewsList").addEventListener("click", function(event) {
        const button = event.target.closest("button.public-delete");
        if (button) deleteOwnReview(button.dataset.reviewId);
    });

    document.getElementById("adminDataList").addEventListener("click", function(event) {
        const button = event.target.closest("button[data-action]");
        if (!button) return;
        const reviewId = button.dataset.reviewId;
        if (button.dataset.action === "edit") editReviewText(reviewId);
        if (button.dataset.action === "delete") deleteReviewItem(reviewId);
    });

    document.getElementById("duckAvatarBtn").addEventListener("click", openAdminModal);
    document.getElementById("duckAvatarBtn").addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openAdminModal();
        }
    });

    document.getElementById("langEn").addEventListener("click", function() {
        setLanguage("en");
    });

    document.getElementById("langAr").addEventListener("click", function() {
        setLanguage("ar");
    });

    document.getElementById("adminPassword").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            loginAdmin();
        }
    });

    document.getElementById("adminModal").addEventListener("click", function(event) {
        if (event.target === this) closeAdminModal();
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && document.getElementById("adminModal").style.display === "flex") {
            closeAdminModal();
        }
    });



    populateSuggestionsV2();
    document.getElementById("date").value = new Date().toLocaleDateString("en-GB");
    setLanguage(currentLanguage);
    loadPublicReviews();


    function openOrbitView(viewId) {
        document.querySelectorAll('.orbit-view').forEach(function(view) {
            view.classList.toggle('active', view.id === viewId);
        });
        document.querySelectorAll('.orbit-tab-btn[data-view]').forEach(function(button) {
            button.classList.toggle('active', button.dataset.view === viewId);
        });
        if (viewId === 'reviewsView') loadPublicReviews();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleOrbitChat(forceOpen) {
        var drawer = document.getElementById('orbitChatDrawer');
        if (!drawer) return;

        var shouldOpen = typeof forceOpen === 'boolean'
            ? forceOpen
            : !drawer.classList.contains('open');

        drawer.classList.toggle('open', shouldOpen);
        drawer.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
    }

    function initOrbitDashboard() {
        document.querySelectorAll('.orbit-tab-btn[data-view]').forEach(function(button) {
            button.addEventListener('click', function() {
                openOrbitView(button.getAttribute('data-view'));
            });
        });

        var chatFab = document.getElementById('orbitChatFab');
        var chatClose = document.getElementById('orbitChatClose');

        if (chatFab) {
            chatFab.addEventListener('click', function(event) {
                event.preventDefault();
                toggleOrbitChat();
            });
        }

        if (chatClose) {
            chatClose.addEventListener('click', function(event) {
                event.preventDefault();
                toggleOrbitChat(false);
            });
        }

        openOrbitView('reviewView');
        toggleOrbitChat(false);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initOrbitDashboard);
    } else {
        initOrbitDashboard();
    }
