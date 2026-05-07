/* =======================
LMS CalCulator Scripts
========================== */
const specialBooks = ["CS101", "ENG101", "MTH101", "ISL202", "PAK301", "MGT211", "CS201P", "CS301P"];
const tagsContainer = document.getElementById('tags-container');
const tagInput = document.getElementById('tag-input');
let tags = [];

tagInput.addEventListener('keydown', (e) => {
    if (e.key === ',' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        let val = tagInput.value.trim().toUpperCase().replace(/,/g, '');
        if (val && !tags.includes(val)) { tags.push(val); renderTags(); }
        tagInput.value = '';
    }
});

function renderTags() {
    tagsContainer.querySelectorAll('.tag-badge').forEach(t => t.remove());
    tags.forEach((tag, i) => {
        const badge = document.createElement('div');
        badge.className = 'tag-badge bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-2';
        badge.innerHTML = `${tag} <span class="cursor-pointer opacity-70" onclick="removeTag(${i})">&times;</span>`;
        tagsContainer.insertBefore(badge, tagInput);
    });
}
function removeTag(i) { tags.splice(i, 1); renderTags(); }

function calculateInvoice() {
    if (tags.length === 0) { alert("Please add subjects!"); return; }
    const listBody = document.getElementById('invoiceList');
    listBody.innerHTML = "";
    let subtotal = 0;

    tags.forEach(code => {
        let rate = specialBooks.includes(code) ? 500 : 800;
        subtotal += rate;
        listBody.innerHTML += `
        <tr class="border-b border-slate-50 text-sm">
            <td class="p-4 font-bold text-slate-700">${code}</td>
            <td class="p-4 text-center text-slate-500">Rs. ${Math.round(rate / 4)}</td>
            <td class="p-4 text-center text-slate-500 font-medium">Rs. ${Math.round(rate / 2)}</td>
            <td class="p-4 text-right font-bold text-blue-600">Rs. ${rate}</td>
        </tr>`;
    });

    let disc = 0;
    resetOffers();
    if (subtotal >= 6000) { disc = 1100; highlight('off6k'); }
    else if (subtotal >= 5000) { disc = 800; highlight('off5k'); }
    else if (subtotal >= 4000) { disc = 500; highlight('off4k'); }

    document.getElementById('grossBill').innerText = `Rs. ${subtotal}`;
    document.getElementById('finalBill').innerText = `Rs. ${subtotal - disc}`;
    document.getElementById('form-stage').classList.add('hidden');
    document.getElementById('result-stage').classList.remove('hidden');
}

function highlight(id) {
    const el = document.getElementById(id);
    el.classList.replace('opacity-40', 'opacity-100');
    el.classList.add('bg-green-50', 'border-green-400', 'scale-105', 'shadow-sm');
}

function resetOffers() {
    ['off4k', 'off5k', 'off6k'].forEach(id => {
        document.getElementById(id).className = "p-3 rounded-xl border border-slate-100 flex justify-between items-center opacity-40 transition-all";
    });
}

function goBack() {
    document.getElementById('form-stage').classList.remove('hidden');
    document.getElementById('result-stage').classList.add('hidden');
}

function bookNow() {
    const final = document.getElementById('finalBill').innerText;
    const msg = `Assalam o Alaikum LGWT! %0AMujhe LMS Handling start karwani hai.%0ASubjects: ${tags.join(', ')}%0AFinal Discounted Bill: ${final}%0A%0A(Website Invoice Checked) \n Please Give Me More Discount If Possible`;
    window.open(`https://wa.me/923196248868?text=${msg}`, '_blank');
}

/* =======================
 Other Script
========================== */

var typed = new Typed('#typed-heading', {
    strings: ["Welcome to VU Study LGWT", "Your LMS Solution Partner", "Accurate Assignment Help", "Expert Quiz Handling"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Mobile Menu Toggle logic
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    const icon = btn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

/* ==========================
     BOT Script
========================== */

const logContainer = document.getElementById('hacker-logs');
const commands = [
    { txt: "> Initializing Baileys Socket...", color: "text-blue-400" },
    { txt: "> Loading Dani.js & Auth Info...", color: "text-blue-400" },
    { txt: "> connection.update: OPEN", color: "text-green-500" },
    { txt: "> setupHandoutSearch: READY", color: "text-blue-400" },
    { txt: "> setupResultCheck: READY", color: "text-blue-400" },
    { txt: "> Listening for .sticker command...", color: "text-yellow-500" },
    { txt: "> Request received from: 923xxxxxxxxx", color: "text-white" },
    { txt: "> Processing PDF search: CS101...", color: "text-cyan-400" },
    { txt: "> System Heartbeat: OK", color: "text-green-500" },
    { txt: "-----------------------------------", color: "text-slate-700" }
];

let lineIndex = 0;

function addLogLine() {
    if (lineIndex >= commands.length) {
        logContainer.innerHTML = ""; // Loop reset
        lineIndex = 0;
    }

    const line = document.createElement('div');
    line.className = `log-line ${commands[lineIndex].color} text-[12px]`;
    line.innerText = commands[lineIndex].txt;
    logContainer.appendChild(line);

    lineIndex++;
    setTimeout(addLogLine, Math.random() * 1000 + 500);
}

window.addEventListener('load', addLogLine);

/* ==========================
     Assignemnt Counter Script 
========================== */

const startCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Jitna kam hoga, utna fast chalega

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

let started = false;
window.addEventListener('scroll', () => {
    const section = document.querySelector('.counter')?.parentElement;
    if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && !started) {
            startCounters();
            started = true;
        }
    }
});

/* ==========================
     Scroll Bar Script 
========================== */

window.addEventListener('scroll', () => {
    // --- 1. Scroll Progress Bar Logic ---
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress-bar").style.width = scrolled + "%";

    // --- 2. Active Link Highlight Logic ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.hidden.md\\:flex a'); // Desktop links

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('nav-active');
        // Match link href with current section ID
        if (link.getAttribute('href').includes(current) && current !== null) {
            link.classList.add('nav-active');
        }
    });
});
