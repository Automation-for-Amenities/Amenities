function section1Login(event) {
    event.preventDefault();
    let name = document.getElementById("Name").value.trim();
    let roll = document.getElementById("Roll").value.trim();
    let depart = document.getElementById("Depart").value.trim();
    if (name === "" || roll === "" || depart === "") {
        alert("Please enter all your details.");
        return;
    }
    document.getElementById("resul_log").textContent = name;
    document.getElementById("resul_log1").textContent = roll;
    document.getElementById("resul_log2").textContent = depart;
    document.getElementById("sidebarStudentName").textContent = name;
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    window.scrollTo(0, 0);
}
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
}
function closeSidebar() {
    document.querySelector(".sidebar").classList.remove("active");
}
document.addEventListener("click", function(event) {
    if (window.innerWidth <= 575) {
        let sidebar = document.querySelector(".sidebar");
        if (!sidebar.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    }
});
function logoutUser() {
    document.getElementById("section2").style.display = "none";
    document.getElementById("section1").style.display = "flex";
    document.querySelector(".sidebar").classList.remove("active");
    document.getElementById("Name").value = "";
    document.getElementById("Roll").value = "";
    document.getElementById("Depart").value = "";
    window.scrollTo(0, 0);
}
function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    let themeIcon = document.getElementById("themeIcon");
    let themeText = document.getElementById("themeText");

    if (document.body.classList.contains("dark-mode")) {

        themeIcon.className = "fa-solid fa-sun";
        themeText.textContent = "Light Mode";

    } else {

        themeIcon.className = "fa-solid fa-moon";
        themeText.textContent = "Dark Mode";

    }

}