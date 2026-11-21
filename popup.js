// ============================================================
// VU STUDY LGWT — COMPACT & STYLISH COMMUNITY NOTICE POPUP
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // Ek session mein close karne ke baad dobara show nahi hoga
    if (sessionStorage.getItem("lgwt_notice_popup_closed") === "true") {
        return;
    }

    // ==========================================================
    // CONFIG (Apne New Links Yahan Lagayein)
    // ==========================================================
    const NEW_WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KR0mtlb4a9d2DLF65Be2KM";
    const CURRENT_PAPERS_LINK = "https://adnan8868.github.io/lgwt-review/";
    const WHATSAPP_CHANNEL_LINK = "https://whatsapp.com/channel/0029VbAfKscEVccSHYySNP3I";

    // ==========================================================
    // POPUP STYLES
    // ==========================================================
    if (!document.getElementById("lgwt-compact-popup-styles")) {
        const styleTag = document.createElement("style");
        styleTag.id = "lgwt-compact-popup-styles";
        styleTag.innerHTML = `
            #lgwtPopupOverlay {
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
            }
            #lgwtPopupOverlay.lgwt-visible {
                opacity: 1;
                pointer-events: auto;
            }
            #lgwtPopupCard {
                opacity: 0;
                transform: scale(0.92) translateY(14px);
                transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                font-family: 'Plus Jakarta Sans', 'Poppins', system-ui, sans-serif;
            }
            #lgwtPopupOverlay.lgwt-visible #lgwtPopupCard {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            @keyframes lgwtPulseDot {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.4; transform: scale(0.85); }
            }
            .lgwt-pulse-dot {
                animation: lgwtPulseDot 1.6s infinite;
            }
            .lgwt-btn-shine {
                position: relative;
                overflow: hidden;
            }
            .lgwt-btn-shine::after {
                content: "";
                position: absolute;
                top: 0;
                left: -120%;
                width: 55%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
                transform: skewX(-20deg);
                animation: lgwtBtnShine 3.5s infinite;
            }
            @keyframes lgwtBtnShine {
                0% { left: -120%; }
                55%, 100% { left: 150%; }
            }
        `;
        document.head.appendChild(styleTag);
    }

    // ==========================================================
    // COMPACT & STYLISH POPUP HTML
    // ==========================================================
    const popupHtml = `
        <div id="lgwtPopupOverlay"
            class="fixed inset-0 flex items-center justify-center p-4"
            style="z-index: 99999; background: rgba(2, 6, 23, 0.72); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);">

            <div id="lgwtPopupCard"
                class="relative w-full max-w-[350px] rounded-3xl overflow-hidden bg-slate-950 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.65)] text-center">

                <!-- Top Gradient Accent Bar -->
                <div class="h-1 w-full bg-gradient-to-r from-emerald-400 via-blue-500 to-amber-400"></div>

                <!-- Close Button -->
                <button id="lgwtPopupCloseBtn" aria-label="Close"
                    class="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white/5 hover:bg-red-500/90 border border-white/10 text-slate-400 hover:text-white transition-all flex items-center justify-center cursor-pointer">
                    <i class="fas fa-times text-xs"></i>
                </button>

                <div class="px-5 pt-5 pb-6 space-y-4">

                    <!-- Alert Badge -->
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-[10px] font-semibold uppercase tracking-wider">
                        <span class="lgwt-pulse-dot w-1.5 h-1.5 rounded-full bg-red-400"></span>
                        Important Update
                    </div>

                    <!-- Brand Icon & Heading -->
                    <div class="space-y-1.5">
                        <div class="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-xl shadow-lg shadow-emerald-500/20">
                            <i class="fab fa-whatsapp"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white tracking-tight pt-1">
                            New LGWT Official <span class="text-amber-400">Group</span>
                        </h3>
                        <p class="text-[11px] text-slate-400 leading-relaxed">
                            Hamara purana WhatsApp group <span class="text-red-400 font-semibold">permanently suspend</span> ho gaya hai. Kindly purana group <strong class="text-slate-200">leave</strong> kar dein aur updates & current papers ke liye neeche diye gaye links join karein!
                        </p>
                    </div>

                    <!-- Action Buttons -->
                    <div class="space-y-2.5 pt-1">
                        <!-- Primary: New WhatsApp Group -->
                        <a href="${NEW_WHATSAPP_GROUP_LINK}" target="_blank" rel="noopener noreferrer"
                            class="lgwt-btn-shine w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-semibold text-xs shadow-lg shadow-emerald-500/20 transition-all">
                            <i class="fab fa-whatsapp text-base"></i>
                            Join New WhatsApp Group
                        </a>

                        <!-- Secondary: Current Papers Bank -->
                        <a href="${CURRENT_PAPERS_LINK}" target="_blank" rel="noopener noreferrer"
                            class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-blue-600/20 transition-all">
                            <i class="fas fa-file-lines text-amber-300"></i>
                            Current & Past Paper Bank
                        </a>

                        <!-- Subtle: WhatsApp Channel -->
                        <a href="${WHATSAPP_CHANNEL_LINK}" target="_blank" rel="noopener noreferrer"
                            class="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-[11px] font-medium transition-all">
                            <i class="fas fa-bullhorn text-emerald-400 text-[10px]"></i>
                            Follow Official WhatsApp Channel
                        </a>
                    </div>

                    <!-- Footer Note -->
                    <p class="text-[10px] text-slate-500">
                        VU Study LGWT • Learning & Growing With Team
                    </p>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", popupHtml);

    const overlay = document.getElementById("lgwtPopupOverlay");
    const closeBtn = document.getElementById("lgwtPopupCloseBtn");

    setTimeout(() => {
        if (overlay) overlay.classList.add("lgwt-visible");
    }, 350);

    function closePopup() {
        if (!overlay) return;
        overlay.classList.remove("lgwt-visible");
        sessionStorage.setItem("lgwt_notice_popup_closed", "true");
        setTimeout(() => overlay.remove(), 300);
    }

    if (closeBtn) closeBtn.addEventListener("click", closePopup);

    if (overlay) {
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closePopup();
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && document.getElementById("lgwtPopupOverlay")) {
            closePopup();
        }
    });
});
