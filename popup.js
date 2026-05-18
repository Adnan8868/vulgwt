// ====== WEB STUDY - VU STUDY LGWT LIVE POPUP ENGINE ======
document.addEventListener("DOMContentLoaded", function () {
    // Check if student already closed the notification
    if (localStorage.getItem("lgwt_meeting_popup_closed") === "true") {
        return; // Agar closed hai toh popup nahi dikhega [cite: 72]
    }

    // 1. Inject Dynamic Tailwind Custom Keyframes Animation for Premium Glow Effect
    if (!document.getElementById('lgwt-popup-styles')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'lgwt-popup-styles';
        styleTag.innerHTML = `
            @keyframes lgwtPulseGlow {
                0%, 100% { box-shadow: 0 0 15px rgba(30, 58, 138, 0.4); }
                50% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.6); }
            }
            .lgwt-premium-glow {
                animation: lgwtPulseGlow 3s infinite;
            }
        `;
        document.head.appendChild(styleTag);
    }

    // --- AAPKA FINAL GOOGLE MEET LINK (Integrated) ---
    const GOOGLE_MEET_LINK = "https://meet.google.com/yrd-kgan-hbv";

    // --- WHATSAPP MEIN SHARE HONE WALA POORA AUTOMATIC TEXT CONTENT ---
    const shareMessage = `📢 *Urgent Mid-Term Alert & Live Session!*
    
Dear Students, Aapke Mid-Term Exams *1st June* se start ho rahe hain aur ab sirf *10 din* baki hain! 😱

Aapki behtareen tayari aur achi CGPA ke liye humne kal raat (*19 May 2026, Tuesday*) thik *9:15 PM* par ek special Live Google Meet Session arrange kiya hai. Ye session *1st aur 2nd Semester* wale new students ke liye bohot zyada important hai!

🔥 *Special Math Segment:* Live screen par seekhein ke Math ka exam software par jaldi aur bina time waste kiye kaise solve karte hain!

Apne dosto ke sath bhi lazmi share karein aur unhe bhi invite karein.

🔗 *Join Live Meeting Link:* ${GOOGLE_MEET_LINK}`;

    // Encode text safely for URL transmission
    const encodedShareText = encodeURIComponent(shareMessage);
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedShareText}`;

    // 2. Setup Popup HTML Layout Structure
    const popupHtml = `
    <div id="lgwtPopupOverlay" style="backdrop-filter: blur(4px); z-index: 99999;" class="fixed inset-0 bg-slate-900/60 flex items-center justify-center p-4 transition-all duration-300 opacity-0 pointer-events-none">
        <div class="bg-white text-slate-800 w-full max-w-xl rounded-[2rem] border border-slate-100 shadow-2xl p-6 md:p-8 transform scale-95 transition-all duration-300 relative overflow-hidden lgwt-premium-glow">
            
            <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#1e3a8a] via-[#facc15] to-[#1e3a8a]"></div>

            <div class="flex items-start gap-4 mt-2">
                <div class="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 animate-bounce">
                    <span class="text-2xl">📢</span>
                </div>
                <div class="flex-1">
                    <span class="inline-block bg-red-100 text-red-700 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1 animate-pulse">
                        ⚠️ 1st & 2nd Semester Special
                    </span>
                    <h3 class="text-lg md:text-xl font-black text-[#1e3a8a] tracking-tight leading-tight">
                        Urgent Mid-Term Alert & Live Prep Session!
                    </h3>
                    <p class="text-xs text-amber-600 font-bold mt-0.5">
                        🗓️ 19 May 2026, Tuesday (Raat 9:15 PM Live)
                    </p>
                </div>
            </div>

            <div class="mt-5 space-y-4 text-slate-600 text-xs md:text-sm leading-relaxed max-h-[50vh] overflow-y-auto pr-2">
                <p>Dear Students, Aapke Mid-Term Exams <strong class="text-red-500 font-bold">1st June</strong> se start ho rahe hain aur ab sirf <strong class="text-red-500 font-bold">10 din baki</strong> reh gaye hain! 😱</p>
                
                <p class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    Kya aap pareshan hain ke itne kam waqt mein achi CGPA kaise leni hai? Kya sirf past paper files par depend rehna kafi hai? In sab sawalat ke liye humne kal raat <strong class="text-[#1e3a8a] font-bold">9:15 PM</strong> ko special <strong class="text-[#1e3a8a] font-bold">Live Google Meet Session</strong> rakha hai. Ye session <strong class="text-red-600 font-bold">1st aur 2nd Semester</strong> ke bacho ke liye sabse zaroori hai!
                </p>

                <p class="border-l-4 border-[#facc15] pl-3 font-medium text-slate-700">
                    💡 <strong>🔥 Special Segment:</strong> Is session mein live computer screen par aapko sikhaya jayega ke <strong>Math ka exam</strong> bina time waste kiye jaldi aur aasan tarike se software par kaise solve karte hain! Apne dosto (friends) ko bhi sath lazmi add karein taake sab live sawal puch sakein.
                </p>

                <div class="bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100/70 space-y-2">
                    <p class="font-bold text-[#1e3a8a] flex items-center gap-1.5 text-xs md:text-sm">
                        📱 Mobile Users Ke Liye Zaroori Hidayat:
                    </p>
                    <p class="text-slate-600 text-[11px] md:text-xs">
                        Class join karne se pehle apne mobile mein **Google Meet App** lazmi download karein. Niche diye gaye link se aap app install kar sakte hain:
                    </p>
                    <div class="flex flex-wrap gap-2 pt-1">
                        <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.tachyon" target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] md:text-xs font-bold py-1.5 px-3 rounded-lg transition-all flex items-center gap-1">
                            🤖 Install Android App
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a id="lgwtJoinBtn" href="${GOOGLE_MEET_LINK}" target="_blank" class="bg-[#1e3a8a] hover:bg-blue-800 text-white font-black py-3 px-4 rounded-xl text-center text-xs md:text-sm transition-all shadow-lg hover:shadow-blue-200 transform active:scale-95 flex items-center justify-center gap-2">
                    <span>🚀 Join Meeting</span>
                </a>

                <a href="${whatsappShareUrl}" target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-black py-3 px-4 rounded-xl text-center text-xs md:text-sm transition-all shadow-lg hover:shadow-green-200 transform active:scale-95 flex items-center justify-center gap-2">
                    <span>📲 Share Link</span>
                </a>

                <button id="lgwtCloseBtn" class="border border-slate-200 hover:bg-slate-50 text-slate-500 font-bold py-3 px-4 rounded-xl text-center text-xs md:text-sm transition-all transform active:scale-95">
                    ❌ Close Notice
                </button>
            </div>

        </div>
    </div>
    `;

    // Append link layout element to document body
    document.body.insertAdjacentHTML('beforeend', popupHtml);

    // Fade-in effect trigger animation frame
    setTimeout(() => {
        const overlay = document.getElementById('lgwtPopupOverlay');
        if (overlay) {
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.querySelector('div').classList.remove('scale-95');
        }
    }, 400);

    // Bind Event Listeners dynamically
    document.getElementById('lgwtCloseBtn').addEventListener('click', function() {
        closeLgwtPopup(true);
    });
});

// Function to close popup smoothly and save state in Local Storage
function closeLgwtPopup(dontShowAgain) {
    const overlay = document.getElementById('lgwtPopupOverlay');
    if (overlay) {
        overlay.classList.add('opacity-0', 'pointer-events-none');
        overlay.querySelector('div').classList.add('scale-95');
        
        if (dontShowAgain) {
            localStorage.setItem("lgwt_meeting_popup_closed", "true"); // Save state [cite: 70]
        }
    }
}