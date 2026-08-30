// ============================================================
// VU STUDY LGWT — PREMIUM LMS HANDLING POPUP
// Semester Launch Campaign
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // Don't show again after closing in this session
    if (sessionStorage.getItem("lgwt_lms_popup_closed") === "true") {
        return;
    }

    // ==========================================================
    // CONFIG
    // ==========================================================

    const WHATSAPP_GROUP_LINK =
        "https://chat.whatsapp.com/EbRuKt2blNu4FVd7Odb9hc";

    const WHATSAPP_CONTACT =
        "https://wa.me/923196248868"; // <-- Apna WhatsApp number yahan lagayen

    const CALCULATOR_LINK = "#lms-calculator";


    // ==========================================================
    // POPUP STYLES
    // ==========================================================

    if (!document.getElementById("lgwt-lms-popup-styles")) {

        const styleTag = document.createElement("style");

        styleTag.id = "lgwt-lms-popup-styles";

        styleTag.innerHTML = `

            /* ==============================
               OVERLAY
            ============================== */

            #lgwtLmsPopupOverlay {
                opacity: 0;
                pointer-events: none;
                transition: opacity .35s ease;
            }

            #lgwtLmsPopupOverlay.lgwt-popup-visible {
                opacity: 1;
                pointer-events: auto;
            }


            /* ==============================
               CARD
            ============================== */

            #lgwtLmsPopupCard {
                opacity: 0;
                transform: scale(.94) translateY(15px);
                transition:
                    opacity .4s ease,
                    transform .4s cubic-bezier(.16,1,.3,1);

                font-family:
                    'Poppins',
                    'Inter',
                    system-ui,
                    sans-serif;
            }

            #lgwtLmsPopupOverlay.lgwt-popup-visible
            #lgwtLmsPopupCard {
                opacity: 1;
                transform: scale(1) translateY(0);
            }


            /* ==============================
               OFFER PULSE
            ============================== */

            @keyframes lgwtOfferPulse {

                0%, 100% {
                    box-shadow:
                        0 0 0 0 rgba(245,158,11,.30);
                }

                50% {
                    box-shadow:
                        0 0 0 5px rgba(245,158,11,0);
                }
            }

            .lgwt-offer-pulse {
                animation: lgwtOfferPulse 2.2s infinite;
            }


            /* ==============================
               LIVE DOT
            ============================== */

            @keyframes lgwtLive {

                0%, 100% {
                    opacity: 1;
                }

                50% {
                    opacity: .35;
                }
            }

            .lgwt-live-dot {
                animation: lgwtLive 1.5s infinite;
            }


            /* ==============================
               ICON FLOAT
            ============================== */

            @keyframes lgwtFloat {

                0%, 100% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(-4px);
                }
            }

            .lgwt-icon-float {
                animation: lgwtFloat 3s ease-in-out infinite;
            }


            /* ==============================
               BUTTON SHINE
            ============================== */

            .lgwt-shine {
                position: relative;
                overflow: hidden;
            }

            .lgwt-shine::after {
                content: "";
                position: absolute;
                top: 0;
                left: -120%;
                width: 60%;
                height: 100%;
                background:
                    linear-gradient(
                        90deg,
                        transparent,
                        rgba(255,255,255,.20),
                        transparent
                    );
                transform: skewX(-20deg);
                animation: lgwtShine 4s infinite;
            }

            @keyframes lgwtShine {

                0% {
                    left: -120%;
                }

                55%, 100% {
                    left: 150%;
                }
            }


            /* ==============================
               MOBILE
            ============================== */

            @media (max-width: 480px) {

                #lgwtLmsPopupCard {
                    max-height: calc(100vh - 20px);
                    overflow-y: auto;
                }

                #lgwtLmsPopupCard::-webkit-scrollbar {
                    width: 3px;
                }

                #lgwtLmsPopupCard::-webkit-scrollbar-thumb {
                    background: rgba(148,163,184,.35);
                    border-radius: 10px;
                }

            }

        `;

        document.head.appendChild(styleTag);
    }


    // ==========================================================
    // POPUP HTML
    // ==========================================================

    const popupHtml = `

        <div
            id="lgwtLmsPopupOverlay"
            class="
                fixed
                inset-0
                flex
                items-center
                justify-center
                p-3
            "
            style="
                z-index:99999;
                background:rgba(2,6,23,.76);
                backdrop-filter:blur(9px);
                -webkit-backdrop-filter:blur(9px);
            "
        >

            <!-- CARD -->

            <div
                id="lgwtLmsPopupCard"
                class="
                    relative
                    w-full
                    max-w-[380px]
                    rounded-[1.8rem]
                    overflow-hidden
                    bg-slate-950
                    border
                    border-white/10
                    shadow-[0_25px_80px_rgba(0,0,0,.5)]
                "
            >

                <!-- TOP LINE -->

                <div
                    class="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-1
                        bg-gradient-to-r
                        from-blue-500
                        via-indigo-500
                        to-yellow-400
                    "
                ></div>


                <!-- CLOSE -->

                <button
                    id="lgwtLmsCloseBtn"
                    class="
                        absolute
                        top-3
                        right-3
                        z-30
                        w-8
                        h-8
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-slate-400
                        hover:bg-red-500
                        hover:text-white
                        transition-all
                        flex
                        items-center
                        justify-center
                    "
                    aria-label="Close"
                >

                    <i class="fas fa-times text-xs"></i>

                </button>


                <!-- CONTENT -->

                <div class="relative z-10 px-5 py-5">


                    <!-- STATUS -->

                    <div class="flex justify-center">

                        <div
                            class="
                                inline-flex
                                items-center
                                gap-2
                                px-3
                                py-1
                                rounded-full
                                bg-green-500/10
                                border
                                border-green-500/20
                                text-green-400
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[.14em]
                            "
                        >

                            <span
                                class="
                                    lgwt-live-dot
                                    w-1.5
                                    h-1.5
                                    rounded-full
                                    bg-green-400
                                "
                            ></span>

                            LMS Booking Open

                        </div>

                    </div>


                    <!-- ICON -->

                    <div class="flex justify-center mt-4 mb-3">

                        <div
                            class="
                                lgwt-icon-float
                                w-14
                                h-14
                                rounded-2xl
                                bg-gradient-to-br
                                from-blue-600
                                to-indigo-700
                                flex
                                items-center
                                justify-center
                                shadow-lg
                                shadow-blue-600/20
                            "
                        >

                            <i
                                class="
                                    fas
                                    fa-graduation-cap
                                    text-white
                                    text-xl
                                "
                            ></i>

                        </div>

                    </div>


                    <!-- TITLE -->

                    <div class="text-center">

                        <p
                            class="
                                text-blue-400
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[.24em]
                            "
                        >
                            VU STUDY LGWT
                        </p>


                        <h2
                            class="
                                text-[25px]
                                sm:text-[27px]
                                font-semibold
                                text-white
                                leading-tight
                                mt-1
                                tracking-tight
                            "
                        >

                            LMS Handling

                            <span class="text-yellow-400">
                                Is Open
                            </span>

                        </h2>


                        <p
                            class="
                                text-slate-400
                                text-[11px]
                                font-normal
                                leading-relaxed
                                mt-2
                            "
                        >

                            Semester start hone wala hai —
                            apni LMS activities ko tension-free
                            manage karwain.

                        </p>

                    </div>


                    <!-- OFFER -->

                    <div
                        class="
                            lgwt-offer-pulse
                            mt-4
                            rounded-2xl
                            bg-yellow-500/10
                            border
                            border-yellow-500/20
                            px-4
                            py-3
                            text-center
                        "
                    >

                        <div
                            class="
                                flex
                                items-center
                                justify-center
                                gap-2
                                text-yellow-400
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-wider
                            "
                        >

                            <i class="fas fa-bolt"></i>

                            Semester Launch Offer

                        </div>


                        <p
                            class="
                                text-white
                                text-[12px]
                                font-medium
                                mt-1
                            "
                        >

                            Very Low Introductory Price

                        </p>


                        <p
                            class="
                                text-yellow-300
                                text-[9px]
                                font-normal
                                mt-1
                            "
                        >

                            Full applicable discount available
                            for eligible bookings.

                        </p>

                    </div>


                    <!-- SLOTS -->

                    <div
                        class="
                            mt-3
                            flex
                            justify-center
                        "
                    >

                        <span
                            class="
                                px-3
                                py-1
                                rounded-full
                                bg-red-500/10
                                border
                                border-red-500/20
                                text-red-400
                                text-[9px]
                                font-medium
                            "
                        >

                            ⏳ Only 10 Slots Available

                        </span>

                    </div>


                    <!-- SERVICES -->

                    <div
                        class="
                            grid
                            grid-cols-2
                            gap-2
                            mt-4
                        "
                    >

                        <div
                            class="
                                flex
                                items-center
                                gap-2
                                p-2.5
                                rounded-xl
                                bg-white/[.04]
                                border
                                border-white/[.07]
                            "
                        >

                            <i
                                class="
                                    fas
                                    fa-file-pen
                                    text-blue-400
                                    text-xs
                                "
                            ></i>

                            <span
                                class="
                                    text-[9px]
                                    font-normal
                                    text-slate-300
                                "
                            >
                                Assignments
                            </span>

                        </div>


                        <div
                            class="
                                flex
                                items-center
                                gap-2
                                p-2.5
                                rounded-xl
                                bg-white/[.04]
                                border
                                border-white/[.07]
                            "
                        >

                            <i
                                class="
                                    fas
                                    fa-list-check
                                    text-indigo-400
                                    text-xs
                                "
                            ></i>

                            <span
                                class="
                                    text-[9px]
                                    font-normal
                                    text-slate-300
                                "
                            >
                                Quizzes
                            </span>

                        </div>


                        <div
                            class="
                                flex
                                items-center
                                gap-2
                                p-2.5
                                rounded-xl
                                bg-white/[.04]
                                border
                                border-white/[.07]
                            "
                        >

                            <i
                                class="
                                    fas
                                    fa-comments
                                    text-yellow-400
                                    text-xs
                                "
                            ></i>

                            <span
                                class="
                                    text-[9px]
                                    font-normal
                                    text-slate-300
                                "
                            >
                                GDBs
                            </span>

                        </div>


                        <div
                            class="
                                flex
                                items-center
                                gap-2
                                p-2.5
                                rounded-xl
                                bg-white/[.04]
                                border
                                border-white/[.07]
                            "
                        >

                            <i
                                class="
                                    fas
                                    fa-laptop
                                    text-green-400
                                    text-xs
                                "
                            ></i>

                            <span
                                class="
                                    text-[9px]
                                    font-normal
                                    text-slate-300
                                "
                            >
                                LMS Support
                            </span>

                        </div>

                    </div>


                    <!-- CALCULATOR -->

                    <a
                        href="${CALCULATOR_LINK}"
                        id="lgwtCalculateBtn"
                        class="
                            lgwt-shine
                            mt-4
                            w-full
                            flex
                            items-center
                            justify-center
                            gap-2
                            py-3.5
                            px-4
                            rounded-xl
                            bg-gradient-to-r
                            from-blue-600
                            to-indigo-600
                            hover:from-blue-500
                            hover:to-indigo-500
                            text-white
                            font-medium
                            text-[11px]
                            tracking-wide
                            shadow-lg
                            shadow-blue-600/20
                            transition-all
                        "
                    >

                        <i
                            class="
                                fas
                                fa-calculator
                                text-yellow-300
                            "
                        ></i>

                        Calculate LMS Fee

                        <i
                            class="
                                fas
                                fa-arrow-right
                                text-[9px]
                            "
                        ></i>

                    </a>


                    <!-- DIRECT WHATSAPP -->

                    <a
                        href="${WHATSAPP_CONTACT}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="
                            mt-2
                            w-full
                            flex
                            items-center
                            justify-center
                            gap-2
                            py-3.5
                            px-4
                            rounded-xl
                            bg-green-500
                            hover:bg-green-600
                            text-white
                            font-medium
                            text-[11px]
                            tracking-wide
                            transition-all
                            shadow-lg
                            shadow-green-500/10
                        "
                    >

                        <i
                            class="
                                fab
                                fa-whatsapp
                                text-lg
                            "
                        ></i>

                        Contact Us on WhatsApp

                    </a>


                    <!-- GROUP -->

                    <a
                        href="${WHATSAPP_GROUP_LINK}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="
                            mt-2
                            w-full
                            flex
                            items-center
                            justify-center
                            gap-2
                            py-2.5
                            px-4
                            rounded-xl
                            bg-white/[.04]
                            border
                            border-white/[.08]
                            text-slate-300
                            hover:text-white
                            hover:bg-white/[.07]
                            font-normal
                            text-[9px]
                            transition-all
                        "
                    >

                        <i
                            class="
                                fab
                                fa-whatsapp
                                text-green-400
                            "
                        ></i>

                        Join LGWT WhatsApp Group

                    </a>


                    <!-- FOOTER -->

                    <p
                        class="
                            text-center
                            text-[8px]
                            font-normal
                            text-slate-500
                            mt-3
                        "
                    >

                        Calculate your fee • Check discount •
                        Contact us for booking

                    </p>

                </div>

            </div>

        </div>
    `;


    // ==========================================================
    // INSERT POPUP
    // ==========================================================

    document.body.insertAdjacentHTML(
        "beforeend",
        popupHtml
    );


    // ==========================================================
    // ELEMENTS
    // ==========================================================

    const overlay =
        document.getElementById("lgwtLmsPopupOverlay");

    const closeBtn =
        document.getElementById("lgwtLmsCloseBtn");

    const calculateBtn =
        document.getElementById("lgwtCalculateBtn");


    // ==========================================================
    // SHOW
    // ==========================================================

    setTimeout(() => {

        if (overlay) {
            overlay.classList.add(
                "lgwt-popup-visible"
            );
        }

    }, 450);


    // ==========================================================
    // CLOSE
    // ==========================================================

    function closePopup() {

        if (!overlay) return;

        overlay.classList.remove(
            "lgwt-popup-visible"
        );

        sessionStorage.setItem(
            "lgwt_lms_popup_closed",
            "true"
        );

        setTimeout(() => {

            overlay.remove();

        }, 350);
    }


    // ==========================================================
    // CLOSE BUTTON
    // ==========================================================

    if (closeBtn) {

        closeBtn.addEventListener(
            "click",
            closePopup
        );

    }


    // ==========================================================
    // CALCULATOR
    // ==========================================================

    if (calculateBtn) {

        calculateBtn.addEventListener(
            "click",
            function () {

                closePopup();

                setTimeout(() => {

                    const calculator =
                        document.getElementById(
                            "lms-calculator"
                        );

                    if (calculator) {

                        calculator.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }, 350);

            }
        );

    }


    // ==========================================================
    // OUTSIDE CLICK
    // ==========================================================

    if (overlay) {

        overlay.addEventListener(
            "click",
            function (event) {

                if (event.target === overlay) {
                    closePopup();
                }

            }
        );

    }


    // ==========================================================
    // ESC
    // ==========================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                document.getElementById(
                    "lgwtLmsPopupOverlay"
                )
            ) {

                closePopup();

            }

        }
    );

});
