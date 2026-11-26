
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
    let sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        sidebar.classList.toggle("active");
    }
}

function closeSidebar() {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        sidebar.classList.remove("active");
    }
}

document.addEventListener("click", function(event) {
    if (window.innerWidth <= 575) {
        let sidebar = document.querySelector(".sidebar");

        if (sidebar && !sidebar.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    }
});

function logoutUser() {
    document.getElementById("section2").style.display = "none";
    document.getElementById("section1").style.display = "flex";

    let sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        sidebar.classList.remove("active");
    }

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
        if (themeIcon) themeIcon.className = "fa-solid fa-sun";
        if (themeText) themeText.textContent = "Light Mode";
    } else {
        if (themeIcon) themeIcon.className = "fa-solid fa-moon";
        if (themeText) themeText.textContent = "Dark Mode";
    }
}
