const messageInput = document.querySelector("#messageInput");
var alt = true;

function changeMicCss() {
    if (messageInput.value == "Mensagem" && alt == true) {
        messageInput.value = "";
        messageInput.style.color = "rgb(200, 200, 200)";
        document.querySelector("#microfone").style.display = "none";
        document.querySelector("#messageSender").style.display = "flex";
    }
}

function changeMessageCss() {
    if (messageInput.value == "Mensagem") {
        alt = false;
    }

    if (messageInput.value == "") {
        messageInput.value = "Mensagem";
        messageInput.style.color = "rgb(135, 136, 133)";
        document.querySelector("#microfone").style.display = "flex";
        document.querySelector("#messageSender").style.display = "none";
        alt = true;
    }
}

const topInput = document.querySelector("#searchInput");
const emoteLupa = document.querySelector("#emoteLupa");
const emoteSeta = document.querySelector("#emoteSeta");

var alt2 = true;
function changeLupaCss() {
    if (
        topInput.value == "Pesquisar ou começar uma nova conversa" &&
        alt2 == true
    ) {
        topInput.value = "";
        topInput.style.color = "rgb(200, 200, 200)";

        emoteLupa.style.transform = "rotate(60deg)";
        emoteLupa.style.opacity = "0";
        emoteLupa.style.visibility = "hidden";

        emoteSeta.style.transform = "rotate(0deg)";
        emoteSeta.style.opacity = "1";
        emoteSeta.style.visibility = "visible";
    }
}

function changeSetaCss() {
    if (topInput.value == "Pesquisar ou começar uma nova conversa") {
        alt2 = false;
    }

    if (topInput.value == "") {
        topInput.value = "Pesquisar ou começar uma nova conversa";
        topInput.style.color = "rgb(135, 136, 133)";

        emoteLupa.style.transform = "rotate(0deg)";
        emoteLupa.style.opacity = "1";
        emoteLupa.style.visibility = "visible";

        emoteSeta.style.transform = "rotate(60deg)";
        emoteSeta.style.opacity = "0";
        emoteSeta.style.visibility = "hidden";

        alt2 = true;
    }
}

const allHours = document.querySelectorAll(".hoursTime");
function setTime() {
    var today = new Date();
    var hour = formatTime(today.getHours());
    var minutes = formatTime(today.getMinutes());
    for (var i = 0; i < allHours.length; i++) {
        allHours[i].innerText = `${hour}:${minutes}`;
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setTime();
