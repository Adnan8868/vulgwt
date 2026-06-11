// ====== VU LGWT ANTI-INSPECT ENGINE ======

// 1. Right-Click Block
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. Keyboard Shortcuts Block (F12, Ctrl+U, Ctrl+Shift+I/J/C)
document.addEventListener('keydown', function(e) {
    // F12 Disable
    if (e.key === "F12") {
        e.preventDefault();
    }
    // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C Disable
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'i' || e.key === 'j' || e.key === 'c')) {
        e.preventDefault();
    }
    // Ctrl+U (View Source) Disable
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
    }
});