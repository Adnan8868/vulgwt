function searchSubjects() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const cards = document.getElementById('subjectContainer').getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const code = cards[i].getElementsByTagName("h3")[0].innerText.toUpperCase();
        const name = cards[i].getElementsByClassName("book-name")[0].innerText.toUpperCase();
        if (code.indexOf(input) > -1 || name.indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}