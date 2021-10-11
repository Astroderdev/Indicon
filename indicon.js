function Loginuser() {
    username = document.getElementById("user_name").value;
    localStorage.setItem("Username:", username);
    window.location = "indicon_room_page.html";
}