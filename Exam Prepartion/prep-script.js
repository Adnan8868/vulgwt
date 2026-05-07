// --- 1. DATA ARRAY ---
const prepData = {
    mid: [
        
        // ====================
        //      CS SUBJECTS
        // ====================
        {
            id: "CS101",
            name: "Introduction to Computing",
            videos: [
                { title: "Study BRD One Video 2 Hour", url: "https://www.youtube.com/watch?v=xiLNwY1SFBE" },
                { title: "Study BRD One Video 30 Mint", url: "https://www.youtube.com/watch?v=-rR-7k9nLaI" },
                { title: "VU Concepts", url: "https://www.youtube.com/watch?v=NKgFMXzTPbo" },
                { title: "Student Info 5", url: "https://www.youtube.com/watch?v=ari4JM71X70&t=268s" },
                { title: "World Of Education", url: "https://www.youtube.com/watch?v=qVK1rnJdnwg" },
                { title: "Halim Insight Quiz 1", url: "https://www.youtube.com/watch?v=83YSyEuNfyI&list=PLP4jqZZBeTPq-EEkvG15IldzITQNZrBxg" },
                { title: "Halim Insight Quiz 2", url: "https://www.youtube.com/watch?v=iIIkXIzOk9s&list=PLP4jqZZBeTPq-EEkvG15IldzITQNZrBxg&index=2" },
            ]
        },
        {
            id: "CS201",
            name: "Introduction to Programming",
            videos: [
                { title: "KST Learning", url: "https://www.youtube.com/watch?v=ur7UFeznVfA" },
                { title: "KST Learning 2nd Part", url: "https://youtu.be/ZVqbR5dmd2A?si=0Px6DjR_LwXwh57q" },
                { title: "VU TALK", url: "https://youtu.be/-iphkgjRSu4?si=VzJdjgCketK_KrOS" },
                { title: "VU Concepts", url: "https://www.youtube.com/watch?v=bhKrAd0BDc0" },
                { title: "Education World 2025-26", url: "https://www.youtube.com/watch?v=TnP4xFJzt1g" },
                { title: "Education World 2025 Part 1", url: "https://www.youtube.com/watch?v=7VZTcaUivc4" },
                { title: "Education World 2025 Part 2", url: "https://www.youtube.com/watch?v=K4hgd1BIFTk" },
                { title: "Education World 2023/24", url: "https://www.youtube.com/watch?v=ES4ihxdicMA" },
                { title: "Vu Knowledge", url: "https://www.youtube.com/watch?v=7zRh6aIR7DU" },
            ]
        },
        {
            id: "CS302",
            name: "Digital Logic and Design",
            videos: [
                { title: "KST Learning", url: "https://www.youtube.com/watch?v=lRuo3jiOq78" },
                { title: "Information HUB (IMP)", url: "https://youtu.be/MgIgWthlnXU?si=XkOLIgx_cT7kNC4B" },
                { title: "VU Concepts", url: "https://www.youtube.com/watch?v=bhKrAd0BDc0" },
                { title: "Education World 2024", url: "https://www.youtube.com/watch?v=fmxPoCHVdxE" },
            ]
        },
        // ====================
        //      ENG SUBJECTS
        // ====================
        {
            id: "ENG101",
            name: "English Comprehension",
            videos: [
                { title: "VU Concepts", url: "https://www.youtube.com/watch?v=INFgfS252_k" },
                { title: "Kinza Bilal", url: "https://www.youtube.com/watch?v=e3jFScc2N9M" },
                { title: "Student Info 5", url: "https://www.youtube.com/watch?v=Wsm83Ko_1yw" },
                { title: "Halim Insights Quiz 1", url: "https://www.youtube.com/watch?v=X1o8fbKF444" },
                { title: "Halim Insights Quiz 2", url: "https://www.youtube.com/watch?v=fjtHksew3G0" },
                { title: "VU Studyfy", url: "https://www.youtube.com/watch?v=f39VEOFzdaQ" },
                { title: "Education World 2024", url: "https://www.youtube.com/watch?v=iJ6jD_dA3dI" },
                { title: "VU Knowledge", url: "https://www.youtube.com/watch?v=ZOHwTZHC8Ak" },
            ]
        },
        {
            id: "ENG201",
            name: "Business and Technical English",
            videos: [
                { title: "VU Concepts", url: "https://www.youtube.com/watch?v=sMOMsi8Zi6g" },
                { title: "Study BRD", url: "https://www.youtube.com/watch?v=8j4VHtCurfs" },
                { title: "Education World 2024", url: "https://www.youtube.com/watch?v=-Gu51idRqjw" },
                { title: "Education World 2022", url: "https://www.youtube.com/watch?v=ILX64xJ7Llc" },
                { title: "VU Knowledge", url: "https://www.youtube.com/watch?v=kcXdpu-br3c" },
            ]
        },
        
        // ======================
        //      MATH SUBJECTS
        // ======================
        {
            id: "MTH101",
            name: "Calculus And Analytical Geometry",
            videos: [
                { title: "Kinza Bilal video 1", url: "https://www.youtube.com/watch?v=qqR79pnutTw" },
                { title: "Kinza Bilal video 2", url: "https://www.youtube.com/watch?v=_tceeWlfROs" },
                { title: "Kinza Bilal Quiz 1 P1", url: "https://youtu.be/C1Pt7lTIp7c?si=QZ4zrtoiNg1jRyoU" },
                { title: "Kinza Bilal Quiz 1 P2", url: "https://www.youtube.com/watch?v=evW6Fhqz57w" },
                { title: "Kinza Bilal Quiz 2", url: "https://www.youtube.com/watch?v=5C3EezM7DCU" },
                { title: "Iqra Azhar Paractice Quiestion", url: "https://www.youtube.com/watch?v=I9s24YHXP7A" },
                { title: "VU UzMA Scholars", url: "https://www.youtube.com/watch?v=Gra7rK2yORc" },
            ]
        },
        {
            id: "MTH301",
            name: "Calculus II",
            videos: [
                { title: "Kinza Bilal video 1", url: "https://www.youtube.com/watch?v=5iskXcWIxug" },
                { title: "Kinza Bilal Video 2", url: "https://youtu.be/Ib6WAYdEz8A?si=QKOpYOeaQGeWUy4K" },
                { title: "Kinza Bilal Quiz 1", url: "https://youtu.be/NlpOQYZiNi8?si=dyEI2dOU1pGGQyTL" },
                { title: "Kinza Bilal Quiz 2", url: "https://youtu.be/flwXUd91P5c?si=J1J5UEz-z649Ep_r" },
                { title: "Uzma Scholar", url: "https://youtu.be/XvmnIS1eTpA?si=RjqkqPMApCXeEmio" },
                { title: "VU Knowledge", url: "https://www.youtube.com/watch?v=DJPmHLPiEtg" },
            ]
        },
        // ======================
        //     PAK301 SUBJECTS
        // ======================
        {
            id: "PAK301",
            name: "Ideology of Pakistan",
            videos: [
                { title: "Student Info 5", url: "https://youtu.be/32UK2yXDVOE?si=4SEx7yWy0YE8Fim3" },
                { title: "VU Concepts", url: "https://www.youtube.com/watch?v=RU2ZvPYehHY" },
                { title: "VU Universe", url: "https://www.youtube.com/watch?v=eYwvWabdjJI" },
                { title: "VU Studyfy", url: "https://www.youtube.com/watch?v=wErHEn8j9uQ" },
                { title: "Kinza Bilal", url: "https://www.youtube.com/watch?v=wcTWeQN8dEI" },
            ]
        },
    ],

    // Final Start Here
    final: [
    ]
};

let currentTab = 'mid';

// --- Rendering and Stats Engine ---
function renderUI() {
    const mainContainer = document.getElementById('mainPrepContainer');
    const countDisplay = document.getElementById('subjectCount');
    const linksDisplay = document.getElementById('totalLinksCount');
    const headerCountDisplay = document.getElementById('headerSubjectCount');

    // --- Header Dynamic Counting Logic ---
    const allUniqueSubjects = new Set([
        ...prepData.mid.map(s => s.id),
        ...prepData.final.map(s => s.id)
    ]);

    if (headerCountDisplay) {
        headerCountDisplay.innerText = allUniqueSubjects.size;
    }

    mainContainer.innerHTML = '';
    const currentData = prepData[currentTab];

    // Initial Stats
    countDisplay.innerText = currentData.length < 10 ? `0${currentData.length}` : currentData.length;
    const totalLinks = currentData.reduce((sum, item) => sum + item.videos.length, 0);
    linksDisplay.innerText = totalLinks < 10 ? `0${totalLinks}` : totalLinks;

    const grouped = currentData.reduce((acc, obj) => {
        const dept = obj.id.replace(/[0-9]/g, '').trim();
        if (!acc[dept]) acc[dept] = [];
        acc[dept].push(obj);
        return acc;
    }, {});

    for (const dept in grouped) {
        mainContainer.innerHTML += `
            <div class="w-full flex items-center gap-4 mt-16 mb-8 section-group" data-dept="${dept}">
                <div class="section-line"></div>
                <h2 class="text-xl font-black text-blue-900 uppercase tracking-widest">${dept} Department</h2>
                <div class="section-line"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="container-${dept}"></div>
        `;

        const sectionGrid = document.getElementById(`container-${dept}`);
        grouped[dept].forEach(item => {
            // YouTube Playlist Link Generation
            const videoIds = item.videos.map(v => {
                try {
                    const urlObj = new URL(v.url);
                    return urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
                } catch (e) { return ""; }
            }).filter(id => id !== "").join(',');

            const combinedUrl = `https://www.youtube.com/watch_videos?video_ids=${videoIds}`;

            sectionGrid.innerHTML += `
                <div class="prep-card bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col h-full hover:shadow-xl transition-all duration-300 relative group">
                    <div class="absolute top-6 right-6 bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <i class="fa-solid fa-link"></i> ${item.videos.length} Videos
                    </div>
                    <div class="mb-4 text-left">
                        <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[9px] font-black uppercase italic tracking-widest">${currentTab.toUpperCase()} PREP</span>
                        <h3 class="text-2xl font-black text-slate-800 mt-2">${item.id}</h3>
                        <p class="text-slate-500 text-xs font-medium">${item.name}</p>
                    </div>
                    <div class="bg-slate-50 rounded-2xl p-4 flex-1">
                        <p class="text-[10px] font-black text-blue-600/50 uppercase tracking-tighter mb-3 italic">Preparation By LGWT</p>
                        <div class="space-y-3 h-40 overflow-y-auto custom-scrollbar pr-2 text-left">
                            ${item.videos.map(v => `
                                <a href="${v.url}" target="_blank" class="flex items-start gap-2 group/link cursor-pointer hover:bg-white p-1 rounded-md transition-all">
                                    <i class="fa-brands fa-youtube text-red-500 text-xs mt-1"></i>
                                    <span class="text-[11px] font-bold text-slate-600 leading-snug group-hover/link:text-blue-600">${v.title}</span>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                    <a href="${combinedUrl}" target="_blank" class="mt-5 w-full py-3 bg-red-600 text-white rounded-xl font-bold text-center shadow-lg hover:bg-red-700 transition flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                        <i class="fa-solid fa-play"></i> Start Prep
                    </a>
                </div>
            `;
        });
    }
}

// --- Dynamic Search Logic ---
function handleSearch() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const cards = Array.from(document.getElementsByClassName('prep-card'));
    const sections = Array.from(document.getElementsByClassName('section-group'));
    const notFound = document.getElementById('notFoundMsg');
    const label = document.getElementById('statLabel');
    const countDisplay = document.getElementById('subjectCount');
    const linksDisplay = document.getElementById('totalLinksCount');

    let visibleCount = 0;
    let visibleLinks = 0;

    cards.forEach(card => {
        const isMatch = card.innerText.toUpperCase().includes(input);
        card.style.display = isMatch ? "" : "none";
        if (isMatch) {
            visibleCount++;
            const linksInCard = parseInt(card.querySelector('.absolute span || div').innerText) || 0;
        }
    });

    if (input === "") {
        label.innerText = "Total Subjects:";
        renderUI();
    } else {
        label.innerText = "Search Result:";
        countDisplay.innerText = visibleCount < 10 ? `0${visibleCount}` : visibleCount;

        const currentData = prepData[currentTab];
        const filteredLinks = currentData
            .filter(item => item.id.includes(input) || item.name.toUpperCase().includes(input))
            .reduce((sum, item) => sum + item.videos.length, 0);

        linksDisplay.innerText = filteredLinks < 10 ? `0${filteredLinks}` : filteredLinks;
    }

    sections.forEach(sec => {
        const dept = sec.getAttribute('data-dept');
        const grid = document.getElementById(`container-${dept}`);
        const hasVisibleCards = Array.from(grid.children).some(c => c.style.display !== "none");
        sec.style.display = hasVisibleCards ? "" : "none";
    });

    notFound.style.display = (visibleCount === 0 && input !== "") ? "block" : "none";
}

// --- 3. CONTROLS ---
function switchTab(tab) {
    currentTab = tab;
    const midBtn = document.getElementById('midTabBtn');
    const finalBtn = document.getElementById('finalTabBtn');

    if (tab === 'mid') {
        midBtn.classList.add('tab-active');
        finalBtn.classList.remove('tab-active');
    } else {
        finalBtn.classList.add('tab-active');
        midBtn.classList.remove('tab-active');
    }

    renderUI();
}

function handleSearch() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const cards = Array.from(document.getElementsByClassName('prep-card'));
    const sections = Array.from(document.getElementsByClassName('section-group'));

    // UI Elements
    const notFound = document.getElementById('notFoundMsg');
    const label = document.getElementById('statLabel'); // "Total Subjects" wala text element
    const countDisplay = document.getElementById('subjectCount');
    const linksDisplay = document.getElementById('totalLinksCount');

    let visibleCount = 0;
    let visibleLinks = 0;

    cards.forEach(card => {
        const isMatch = card.innerText.toUpperCase().includes(input);
        card.style.display = isMatch ? "" : "none";

        if (isMatch) {
            visibleCount++;
            const videoCountText = card.querySelector('.absolute').innerText.replace(/[^0-9]/g, '');
            visibleLinks += parseInt(videoCountText) || 0;
        }
    });

    // --- Stats Update Logic ---
    if (input === "") {
        label.innerText = "Total Subjects:";
        const currentData = prepData[currentTab];
        countDisplay.innerText = currentData.length < 10 ? `0${currentData.length}` : currentData.length;
        const totalLinks = currentData.reduce((sum, item) => sum + item.videos.length, 0);
        linksDisplay.innerText = totalLinks < 10 ? `0${totalLinks}` : totalLinks;
    } else {
        label.innerText = "Search Result:";
        countDisplay.innerText = visibleCount < 10 ? `0${visibleCount}` : visibleCount;
        linksDisplay.innerText = visibleLinks < 10 ? `0${visibleLinks}` : visibleLinks;
    }

    // --- Section Headers Visibility ---
    sections.forEach(sec => {
        const dept = sec.getAttribute('data-dept');
        const grid = document.getElementById(`container-${dept}`);
        const hasVisibleCards = Array.from(grid.children).some(c => c.style.display !== "none");
        sec.style.display = hasVisibleCards ? "" : "none";
    });

    // --- Not Found Message Logic ---
    if (visibleCount === 0 && input !== "") {
        notFound.classList.remove('hidden');
        notFound.style.display = "block";
    } else {
        notFound.classList.add('hidden');
        notFound.style.display = "none";
    }
}

// Initial Run
renderUI();
