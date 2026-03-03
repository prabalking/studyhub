function searchResource() {
  let query = document.getElementById("search").value.toLowerCase();
  let resources = document.querySelectorAll("#resource-list li");
  resources.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";

    }
  });
}

// ENTER KEY SUPPORT
document.getElementById("user-input")
.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");
    let userText = input.value.trim();
    if (!userText) return;

    chatBox.innerHTML += `<div class="user-msg">${userText}</div><br>`;
    input.value = "";

    let typing = document.createElement("div");
    typing.className = "bot-msg";
    typing.innerHTML = "Typing...";
    chatBox.appendChild(typing);

    setTimeout(() => {
        typing.innerHTML = getSmartReply(userText);
        saveChat();
    }, 800);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getSmartReply(message) {
    message = message.toLowerCase();

    // Greetings
    if (message.includes("hello") || message.includes("hi")) {
        return "Hello 👋 How can I help you today?";
    }

    // Study related
    if (message.includes("math")) {
        return "Mathematics improves logical thinking. Practice daily for best results.";
    }

    if (message.includes("science")) {
        return "Science helps us understand the world around us.";
    }

    if (message.includes("exam")) {
        return "Revise regularly and solve previous year questions.";
    }

    if (message.includes("motivation")) {
        return "Success comes from consistency, not motivation alone.";
    }

    if (message.includes("who are you")) {
        return "I am Study Bot 🤖 created by Shashi.";
    }

    if (message.includes("html")) {
        return "HTML is used to structure web pages.";
    }

    if (message.includes("css")) {
        return "CSS is used to style web pages.";
    }

    if (message.includes("javascript")) {
        return "JavaScript makes websites interactive.";
    }

    if (message.includes("bye")) {
        return "Goodbye 👋 Keep learning!";
    }

    return "That's interesting! Tell me more about it.";
}

document.getElementById("user-input")
.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function saveChat() {
    localStorage.setItem("chatData", document.getElementById("chat-box").innerHTML);
}

window.onload = function() {
    let saved = localStorage.getItem("chatData");
    if (saved) {
        document.getElementById("chat-box").innerHTML = saved;
    }
};

function searchResource() {
    let query = document.getElementById("search-input").value.trim();
    let resultBox = document.getElementById("result-box");

    if (query === "") return;

    let googleLink = "https://www.google.com/search?q=" + encodeURIComponent(query);

    resultBox.innerHTML = `
        <p><b>Search Result:</b></p>
        <p>🔎 <a href="${googleLink}" target="_blank">View results for "${query}" on Google</a></p>
    `;
}