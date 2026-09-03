
const asmaUlHusnaList = [
    { arabic: "الرَّحْمَٰن", meaning: "سب سے بڑا مہربان" },
    { arabic: "الرَّحِيم", meaning: "بے حد رحم کرنے والا" },
    { arabic: "الْمَلِك", meaning: "سب کا مالک و بادشاہ" },
    { arabic: "الْقُدُّوس", meaning: "نہایت پاک و مقدس" },
    { arabic: "السَّلَام", meaning: "سلامتی دینے والا" },
    { arabic: "الْمُؤْمِن", meaning: "امن و امان دینے والا" },
    { arabic: "الْمُهَيْمِن", meaning: "نگہبان و محافظ" },
    { arabic: "الْعَزِيز", meaning: "سب پر غالب اور عزت والا" },
    { arabic: "الْجَبَّار", meaning: "زبردست اقتدار والا" },
    { arabic: "الْمُتَكَبِّر", meaning: "بزرگی اور بڑائی والا" },
    { arabic: "الْخَالِق", meaning: "پیدا کرنے والا" },
    { arabic: "الْبَارِئ", meaning: "وجود میں لانے والا" },
    { arabic: "الْمُصَوِّر", meaning: "صورتیں بنانے والا" },
    { arabic: "الْغَفَّار", meaning: "بار بار بخشنے والا" },
    { arabic: "الْقَهَّار", meaning: "ہر چیز پر غالب آنے والا" },
    { arabic: "الْوَهَّاب", meaning: "بہت عطا کرنے والا" },
    { arabic: "الرَّزَّاق", meaning: "رزق دینے والا" },
    { arabic: "الْعَلِيم", meaning: "سب کچھ جاننے والا" },
    { arabic: "السَّمِيع", meaning: "سب کچھ سننے والا" },
    { arabic: "الْبَصِير", meaning: "سب کچھ دیکھنے والا" },
    { arabic: "الْحَكِيم", meaning: "نہایت حکمت والا" }
];

function rotateHeaderName() {
    const arabicEl = document.getElementById('header-arabic');
    const meaningEl = document.getElementById('header-meaning');
    if (!arabicEl || !meaningEl) return;

    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % asmaUlHusnaList.length;
        const current = asmaUlHusnaList[currentIndex];
        arabicEl.innerText = current.arabic;
        meaningEl.innerText = current.meaning;
    }, 3000);
}

const subjects = [
    { code: "ACC 311", link: "https://youtube.com/playlist?list=PLZp2HLoa99VkWKje5MgYt1JMElkzzLu3R&si=-ujyBKidDYo4EBgx" },
    { code: "ACC 501", link: "https://youtube.com/playlist?list=PLZp2HLoa99VlF-WHPyBnDCddhKa0iMi6M&si=rhi6gLJ2iUgVl0lt" },
    { code: "BIO 101", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPqOiQ9TpXV23-sm9yuuY3Nl&si=uuXnwE0u61-jxEEC" },
    { code: "BIO 401", link: "https://youtube.com/playlist?list=PLt3Oo4_Qc3uTAs9LzMcVD6n9-RMV87Qrt&si=ql02OaZO1oSbe6D" },
    { code: "CS101", link: "https://youtube.com/playlist?list=PLzxNPvn_0tjtECEA4HAT7qOWILYLC1Rdw&si=yVOJy6eRizWbg7Qs" },
    { code: "CS201", link: "https://youtube.com/playlist?list=PL1EXAGJzUWBzuRezwId4iQyL5N3Jybdgn&si=Sb8Q8CiNYjyY9pdl" },
    { code: "CS201P", link: "https://youtube.com/playlist?list=PL1EXAGJzUWByhYm3WgbeiiTI7s_a9wlu3&si=7h-LxPHr2KMkNLaW" },
    { code: "CS202", link: "https://youtube.com/playlist?list=PLKFcyV7OSsShTy0RUNHXtAdxkfVHCV0Od&si=NgDWw61Zu9vzuZQc" },
    { code: "CS205", link: "https://youtube.com/playlist?list=PLyZmlxzdS0WtnFtTXBD0k7b1Lo7OZf4gf&si=ztwUdenQV0h8Mg7w" },
    { code: "CS301", link: "https://youtube.com/playlist?list=PL1EXAGJzUWBwJOZ82bzrxka_fWK3QNNWV&si=EZDlsB1clwPOfV-i" },
    { code: "CS301P", link: "https://youtube.com/playlist?list=PL1EXAGJzUWBwsYlcJ8lh6nteeMp3QbeAP&si=Bsju6xw4CHicaYEI" },
    { code: "CS302", link: "https://youtube.com/playlist?list=PLmP-OrFxaX-jb8B_v8aQyE2F6ZzRxorap&si=C03BEUSrx53Yp_3y" },
    { code: "CS302 Short", link: "https://youtube.com/playlist?list=PLmP-OrFxaX-jb8B_v8aQyE2F6ZzRxorap&si=0RHXE1jXrSMeFX7N" },
    { code: "CS302P", link: "https://youtube.com/playlist?list=PLQ2wIG-CTpwA9rQE62HNnBJVBYRve7BR4&si=miQpf1bbKz30AlKP" },
    { code: "CS304", link: "https://youtube.com/playlist?list=PL1EXAGJzUWBwe_TeEC2g5a71GRl98TIAl&si=a9pYqlbmRBk5H1X-" },
    { code: "CS304P", link: "https://youtube.com/playlist?list=PL1EXAGJzUWBwe_TeEC2g5a71GRl98TIAl&si=a9pYqlbmRBk5H1X-" },
    { code: "CS401", link: "https://youtube.com/playlist?list=PLxSadPlZSPVRsFn3UBocPQPyDa4g8Arcx&si=1bLMTAYCfDS42mCx" },
    { code: "CS402", link: "https://youtube.com/playlist?list=PLmZDxjypE-1BzYPnTc_L1PxUp88Y8PgxJ&si=4c0_ABxdRGTKQ8cj" },
    { code: "CS403", link: "https://youtube.com/playlist?list=PL1EXAGJzUWBw0y2xNguaEJ0g5iYqKkppD&si=elotCBY_iGgnB4t-" },
    { code: "CS403P", link: "https://youtube.com/playlist?list=PL1EXAGJzUWByQIOptJN76ALwjJz5JyuGc&si=SgqbLfQZdDLHr0L5 " },
    { code: "CS408", link: "https://youtube.com/playlist?list=PLxSadPlZSPVSIkltHoRFe-1APW25Q4MM7&si=-LGUIpKwXIqxHrAE" },
    { code: "CS409", link: "https://youtube.com/playlist?list=PLc888mkLG2X_Vdwrz21mFwQqTm3fNDtds&si=L6d9t321UMU7j_zj" },
    { code: "CS411", link: "https://youtube.com/playlist?list=PLVSBvqr3MeHSwHxxyXU1PO_t9pnft2lTW&si=OQwaca4Sf52bokWT" },
    { code: "CS432", link: "https://youtube.com/playlist?list=PLc888mkLG2X_ujpI4r9Oce-UqTRf2VCNU&si=6grF2wgegNm27-mU" },
    { code: "CS501", link: "https://youtube.com/playlist?list=PL043DHjwUKS4nIbQZGZNyF9W0_8tPvBEG&si=43UvVpVlE6Mdbi3e" },
    { code: "CS502", link: "https://youtube.com/playlist?list=PL1EXAGJzUWBxG8Hm8QaOWKK1P6zMVgAV5&si=FOSHHgsAYC3U_w9W" },
    { code: "CS504", link: "https://youtube.com/playlist?list=PL1EXAGJzUWByPWei7Z0cPxrwsCYlLGYNz&si=OdQUX6yor8FxcweQ" },
    { code: "CS506", link: "https://youtube.com/playlist?list=PL1EXAGJzUWByDXWZxxsFvOlXNyc1Q-rFi&si=mbdXn01aKuG0Iff6" },
    { code: "CS507", link: "https://youtube.com/playlist?list=PLZiOhULnkWwwgrjxFDxUd9Vakw7B0iNW0&si=V_kVlG0Z28VoEBU7" },
    { code: "CS508", link: "https://youtube.com/playlist?list=PLC_ZKW-xzzQfzqxwtzwoJNyWWG0GDlTN-&si=hYQsG__T82Qc3MzV" },
    { code: "CS510", link: "https://youtube.com/playlist?list=PLxSadPlZSPVTD2X7BAtduxhqtKyJmRday&si=-U7zk_kn1erp6gcE" },
    { code: "CS601", link: "https://youtube.com/playlist?list=PLKyB9RYzaFRgeYAB4C1iZ9X7bsDI7GWfv&si=0ETDySHIl059MARH" },
    { code: "CS602", link: "https://youtube.com/playlist?list=PL043DHjwUKS6-D_ZFrdFCKFVZAxG0dAU_&si=E-hXMt48YIGUkzBm" },
    { code: "CS603", link: "https://youtube.com/playlist?list=PLxSadPlZSPVSud0o6TkZses0F4b_480n-&si=Enc7HjxLW5-3LZUL" },
    { code: "CS605", link: "https://youtube.com/playlist?list=PLxSadPlZSPVSR3uvOjGhdVZmP3ZniYEu6&si=naxWLanxjwaZX9vu" },
    { code: "CS606", link: "https://youtube.com/playlist?list=PL043DHjwUKS5kD6r0t66lbDcvgmSPMppI&si=59eXAunPGP3aIWf7" },
    { code: "CS607", link: "https://youtube.com/playlist?list=PLC_ZKW-xzzQd63MXFzfGxjzKn90pUzl1n&si=5RBFE167oHIeevQP" },
    { code: "CS609", link: "https://youtube.com/playlist?list=PL1InxKivDc_orBi3F-GiwvH-T939GfWaN&si=X1UIg943z5-1VMxw" },
    { code: "CS610", link: "https://youtube.com/playlist?list=PL1EXAGJzUWBwR_xIO3e0TQ51YF1NYnFrX&si=syPIZ44d4cYSPaJA" },
    { code: "CS615", link: "https://youtube.com/playlist?list=PL4gx2mXeLU4mc_m3ll1WJztR00c6htAYp&si=GBfs96YyHZmc8aug" },
    { code: "CS625", link: "https://youtube.com/playlist?list=PLJGNjy8afpZQKI520EGIXRoyfatsAsMye&si=xcY4KyQh_JVCehCK" },
    { code: "ECO 401", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPqXp_oVZaNzNT7xo-IVZzRD&si=17BfJEFrlqJphJTM" },
    { code: "ECO 402", link: "https://youtube.com/playlist?list=PL0Rl6622PpjXjc6MSK9eo2rCTfyHLs1DL&si=ZtEAH2kJEwzTr3YN" },
    { code: "ECO 403", link: "https://youtube.com/playlist?list=PL0Rl6622PpjU87eV4SGKl5uucaq1geD-k&si=czEO0tiyzPBOe6y0" },
    { code: "ECO 606", link: "https://youtube.com/playlist?list=PL0Rl6622PpjUvk9vuAxBKrSaazrPrUM6u&si=oV22qaeOw--C3iE9" },
    { code: "ECO 610", link: "https://youtube.com/playlist?list=PLZp2HLoa99VnV2tp8u5inPq8NXZuTmLFZ&si=j_INJFwM9QTDvRea_" },
    { code: "ENG 101", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPrFLAj2_Lyt_G0rFUgzZW-e&si=zRnYxzm7e8rBojTf" },
    { code: "ENG 201", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPqbnLkPn5yvB9ix-zc2UAEa&si=aDzyycBfmppbVgyq" },
    { code: "ENG 301", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPrSmTJDIMuxkGFHHdmNvCX8&si=cOqoXH6EGTFnyvpX" },
    { code: "ENG 501", link: "https://youtube.com/playlist?list=PLMTEEvnTRWdRI8IcOZJkZzbwe9A3AnSSH&si=az7kT-j87XMAwnzH" },
    { code: "ENG 502", link: "https://youtube.com/playlist?list=PLMTEEvnTRWdRJmfIdn2vfAy_1wzkt_EvU&si=aoysOcDu2y7EUKu0" },
    { code: "ISL 202", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPqEGhJ5S4F-O4fybdV-7lMB&si=-BUJnWJonf_XdmGI" },
    { code: "MCM 101", link: "https://youtube.com/playlist?list=PL7RxEwsx3K6G_xz_22pfGN4gvr7VrnZvC&si=R62AfkbHtGXa6DOt" },
    { code: "MCM 301", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPo1RELJaOsgxKQ-pCw-fHxp&si=TFvmuCclyznHfM7V" },
    { code: "MGT 101", link: "https://youtube.com/playlist?list=PLZp2HLoa99VloanG42ZlKK7DIv5iDv2bo&si=XCglqId31inRLmwK" },
    { code: "MGT 111", link: "https://youtube.com/playlist?list=PLzxNPvn_0tjuzlRfLG-xsyXhQghOqq4&si=Leog1gxu-BjseP8V" },
    { code: "MGT 211", link: "https://youtube.com/playlist?list=PLKWdilk0WW6aRikQ3IHiF7TfaoIbG3ynu&si=33CoYm8m56EQn0ab" },
    { code: "MGT 201", link: "https://youtube.com/playlist?list=PLZp2HLoa99Vn85D8e4A5f3PWsLFFPJsqg&si=NKDrUs93Vruwn2m8" },
    { code: "MGT 301", link: "https://youtube.com/playlist?list=PLZp2HLoa99VlexZ3_BGaD9yjfp4d2akQc&si=215Zjuev6K6OegCd" },
    { code: "MGT 501", link: "https://youtube.com/playlist?list=PL043DHjwUKS5MVHJ5weM-ipiB00zPTFcn&si=1BqXhNghL7DBKNK-" },
    { code: "MTH 101", link: "https://youtube.com/playlist?list=PL_CVl-a6qycIwm2clfLYbzjIR10_3NyxW&si=XOkcZb1WeISkhmWi" },
    { code: "MTH 102", link: "https://youtube.com/playlist?list=PLneCQQGFGDDsaJ5WjbOqsXfU1FDEoduFe&si=yjsYVhWavDWJU5Ad" },
    { code: "MTH 202", link: "https://youtube.com/playlist?list=PL_CVl-a6qycLQRB33OErT5VlWeXEJsbHK&si=FDvzcprr_jew-Cjt" },
    { code: "MTH 301", link: "https://youtube.com/playlist?list=PL_CVl-a6qycIBrSxIFQa_eyhTmqaaGu2w&si=WG4yut5TgIPLmYe0" },
    { code: "PAK 301", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPreGmaZHCI1Mvh1NdSDMh9O&si=slCDOAN50fXQYo2P" },
    { code: "PSY 101", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPq2s5XnImn_fCjCycV_2Il6&si=Hs4ol4W4sfo2Z5Cg" },
    { code: "SOC 101", link: "https://youtube.com/playlist?list=PLP4jqZZBeTPqEGhJ5S4F-O4fybdV-7lMB&si=-BUJnWJonf_XdmGI" },
    { code: "STA 301", link: "https://youtube.com/playlist?list=PL043DHjwUKS46H8CPLoYE-Lcl5veuqr6b&si=XLaMgL9K3JH5smbV" }
];

function displaySubjects(list) {
    const container = document.getElementById("subjectContainer");
    const countDisplay = document.getElementById("subjectCount");
    container.innerHTML = "";

    list.forEach(sub => {
        let cleanCode = sub.code.replace(/📚/g, "").trim();
        let deptName = cleanCode.split(" ")[0];

        container.innerHTML += `
                    <div class="prep-card-style p-4 md:p-5 rounded-2xl flex flex-col justify-between transition-all duration-200 shadow-sm">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <span class="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 px-2.5 py-0.5 rounded-md text-[10px] md:text-[11px] font-extrabold uppercase tracking-wider">${deptName}</span>
                                <i class="fa-brands fa-youtube text-red-500 text-base md:text-lg"></i>
                            </div>
                            <h3 class="text-base md:text-lg font-extrabold text-slate-800 dark:text-white mt-0.5 leading-tight">${cleanCode}</h3>
                            <p class="text-slate-500 dark:text-slate-400 text-xs font-medium mb-4">VU Short Lectures & Playlist</p>
                        </div>
                        
                        <div>
                            <a href="${sub.link}" target="_blank" class="flex items-center justify-center gap-2 w-full py-2.5 md:py-2 bg-red-600 text-white rounded-xl font-bold text-xs hover:bg-red-700 transition shadow-sm active:scale-95">
                                <i class="fa-solid fa-play text-xs"></i> Open Playlist
                            </a>
                        </div>
                    </div>
                `;
    });
    countDisplay.innerText = `${list.length} Subjects`;
}

displaySubjects(subjects);

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
    let query = this.value.toUpperCase().replace(/\s/g, "");

    const filtered = subjects.filter(sub => {
        let cleanCode = sub.code.replace(/📚/g, "").replace(/\s/g, "").toUpperCase();
        return cleanCode.includes(query);
    });

    displaySubjects(filtered);

    const noResult = document.getElementById("noResult");
    if (filtered.length === 0) {
        noResult.classList.remove('hidden');
    } else {
        noResult.classList.add('hidden');
    }
});

function resetSearch() {
    searchInput.value = "";
    displaySubjects(subjects);
    document.getElementById("noResult").classList.add('hidden');
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        updateThemeUI(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeUI(false);
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeUI(isDark);
}

function updateThemeUI(isDark) {
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    if (icon && text) {
        if (isDark) {
            icon.className = 'fa-solid fa-moon text-yellow-300';
            text.innerText = 'Dark';
        } else {
            icon.className = 'fa-solid fa-sun text-amber-500';
            text.innerText = 'Light';
        }
    }
}

window.onload = () => {
    initTheme();
    rotateHeaderName();
};