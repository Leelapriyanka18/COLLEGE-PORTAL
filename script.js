// Toggle Login Dropdown
function toggleDropdown() {
    document.querySelector(".dropdown").classList.toggle("open");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
    }
});

// Open ONLY one login section at a time
function openLogin(loginId) {

    // 1️⃣ Hide all login sections
    document.querySelectorAll('.login-section').forEach(section => {
        section.style.display = 'none';
    });

    // 2️⃣ Show selected login section
    const target = document.getElementById(loginId);
    if (target) {
        target.style.display = 'block';
        target.scrollIntoView({ behavior: 'smooth' });
    }

    // 3️⃣ Close dropdown
    document.querySelector(".dropdown").classList.remove("open");
}where can i add this below code in the above code<script>
function studentLogin() {
    document.getElementById("student-login").style.display = "none";
    document.getElementById("student-dashboard").style.display = "block";
}

function logoutStudent() {
    document.getElementById("student-dashboard").style.display = "none";
    document.getElementById("student-login").style.display = "block";
}
// ================= LOGIN DROPDOWN =================
function toggleDropdown() {
    document.querySelector(".dropdown").classList.toggle("open");
}

document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
    }
});

// ================= OPEN LOGIN =================
function openLogin(loginId) {
    document.querySelectorAll('.login-section').forEach(sec => {
        sec.style.display = 'none';
    });

    document.getElementById(loginId).style.display = 'block';
    document.getElementById(loginId).scrollIntoView({ behavior: 'smooth' });
}

// ================= STUDENT LOGIN =================
function studentLogin() {
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById("student-dashboard").style.display = "block";
}

// ================= LOGOUT =================
function logoutStudent() {
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "block";
    });

    document.getElementById("student-dashboard").style.display = "none";
}

</script>
 