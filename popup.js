// ====== WEB STUDY - VU STUDY LGWT MULTI-LINK POPUP ENGINE ======
document.addEventListener("DOMContentLoaded", function () {
    // Tab closed memory check taake baar baar popup tang na kare
    if (sessionStorage.getItem("lgwt_multi_popup_closed") === "true") {
        return; 
    }

    // 1. Premium Glowing and Pulsing Animations Injector
    if (!document.getElementById('lgwt-popup-styles')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'lgwt-popup-styles';
        styleTag.innerHTML = `
            @keyframes lgwtPulseGlow {
                0%, 100% { box-shadow: 0 0 15px rgba(30, 58, 138, 0.2); }
                50% { box-shadow: 0 0 25px rgba(30, 58, 138, 0.4); }
            }
            @keyframes mainPulse {
                0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
                50% { transform: scale(1.02); box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
            }
            .lgwt-premium-glow {
                animation: lgwtPulseGlow 3s infinite;
            }
            .main-btn-pulse {
                animation: mainPulse 2s infinite ease-in-out;
            }
        `;
        document.head.appendChild(styleTag);
    }

    // ==========================================
    // 💡 CONFIGURATION LINKS
    // ==========================================
    const WHATSAPP_GROUP_LINK   = "https://chat.whatsapp.com/HLR6U0I7RqDJYCUa6c3Nr4";
    const PAPERS_REVIEW_LINK      = "https://adnan8868.github.io/lgwt-review/";
    const PREMIUM_FILES_LINK      = "important.html"; // Local page reference

    const popupHtml = `
    <div id="lgwtPopupOverlay" style="backdrop-filter: blur(4px); z-index: 99999;" class="fixed inset-0 bg-slate-900/60 flex items-center justify-center p-4 transition-all duration-300 opacity-0 pointer-events-none">
        <div class="bg-white text-slate-800 w-full max-w-sm rounded-[2rem] border border-slate-100 shadow-2xl p-6 transform scale-95 transition-all duration-300 relative overflow-hidden lgwt-premium-glow">
            
            <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-500"></div>

            <button id="lgwtCloseBtn" class="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-red-600 hover:text-white hover:bg-red-500 border border-red-100 font-black transition-all active:scale-90 text-base shadow-sm" aria-label="Close">
                ✕
            </button>

            <div class="text-center mt-2">
                <span class="inline-block bg-blue-50 text-[#1e3a8a] text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1">
                    🚀 Smart Study
                </span>
                <h3 class="text-xl font-black text-slate-900 tracking-tight leading-tight">
                    VU LGWT Resources
                </h3>
            </div>

            <div class="mt-5 flex flex-col gap-3">
                
                <a href="${WHATSAPP_GROUP_LINK}" target="_blank" class="w-full bg-green-500 hover:bg-green-600 text-white font-black py-3 px-4 rounded-xl text-center text-xs md:text-sm transition-all shadow-md shadow-green-100 flex items-center justify-center gap-2 main-btn-pulse">
                    <i class="fab fa-whatsapp text-base"></i>
                    <span>JOIN WHATSAPP GROUP</span>
                </a>

                <a href="${PAPERS_REVIEW_LINK}" target="_blank" class="w-full bg-slate-900 hover:bg-slate-950 text-amber-400 border border-slate-800 font-black py-3 px-4 rounded-xl text-center text-xs md:text-sm transition-all shadow-md flex items-center justify-center gap-2 tracking-wide">
                    <i class="fas fa-file-alt text-sm text-amber-400"></i>
                    <span>🔥 CURRENT PAPER REVIEWS</span>
                </a>

                <hr class="border-slate-100 my-1">

                <div class="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-justify">
                    <p class="text-[11px] font-semibold text-slate-600 leading-normal">
                        ⭐ <span class="text-amber-600 font-black">100% Passing Golden Material</span> designed by <span class="text-blue-600 font-bold">Sir Zaib</span> & <span class="text-blue-600 font-bold">Sir Mubashir</span>. Guzashta semesters ka maximum paper isi verified data se aaya hai!
                    </p>
                </div>

                <a href="${PREMIUM_FILES_LINK}" class="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black py-3 px-4 rounded-xl text-center text-xs md:text-sm transition-all shadow-md flex items-center justify-center gap-2 tracking-wide uppercase">
                    <i class="fas fa-file-shield text-sm"></i>
                    <span>Get Premium Preparation Files</span>
                </a>

            </div>

            <p class="text-center text-[10px] text-slate-400 mt-4 italic">
                ✨ Accurate shortcuts aur authentic exam updates!
            </p>

        </div>
    </div>
    `;

    // Inject to body
    document.body.insertAdjacentHTML('beforeend', popupHtml);

    // Smooth Show Transition
    setTimeout(() => {
        const overlay = document.getElementById('lgwtPopupOverlay');
        if (overlay) {
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.querySelector('div').classList.remove('scale-95');
        }
    }, 400);

    // Close Button Event Listener
    document.getElementById('lgwtCloseBtn').addEventListener('click', function() {
        closeLgwtPopup(true);
    });
});

// Smooth close function
function closeLgwtPopup(dontShowAgain) {
    const overlay = document.getElementById('lgwtPopupOverlay');
    if (overlay) {
        overlay.classList.add('opacity-0', 'pointer-events-none');
        overlay.querySelector('div').classList.add('scale-95');
        
        if (dontShowAgain) {
            sessionStorage.setItem("lgwt_multi_popup_closed", "true");
        }
    }
}
