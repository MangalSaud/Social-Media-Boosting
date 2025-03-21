document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    function updateDateTime() {
        document.getElementById("datetime").innerText = new Date().toLocaleString();
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
});