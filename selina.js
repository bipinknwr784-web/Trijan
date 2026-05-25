let blocked = false;

function sendMessage(){

    if(blocked){
        return;
    }

    let input = document.getElementById("messageInput");
    let message = input.value.trim();

    if(message === ""){
        return;
    }

    let chatBox = document.getElementById("chatBox");

    // User message
    let userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.innerText = message;

    chatBox.appendChild(userMsg);

    // Seen status
    let seen = document.createElement("div");
    seen.classList.add("status");
    seen.innerText = "Seen";

    chatBox.appendChild(seen);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

    // AI reply
    setTimeout(() => {

        let aiMsg = document.createElement("div");
        aiMsg.classList.add("message", "ai");

        aiMsg.innerText = "Selina Magar blocked you.";

        chatBox.appendChild(aiMsg);

        chatBox.scrollTop = chatBox.scrollHeight;

        blocked = true;

    }, 1500);
}
