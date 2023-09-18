document.addEventListener("DOMContentLoaded", function () {

    const formItem = document.querySelector('#formItem');
    formItem.addEventListener("submit", doSendMessage);

    function doSendMessage(message) {
        message.preventDefault();

        const msgInput = document.querySelector('#msgInput');

        if (msgInput.value.length) {
            const newMessage = document.createElement("div");
            newMessage.classList.add("user-message", "message-box", "font-style-white");
            newMessage.innerHTML = `<p class="message">${msgInput.value}</p>`;
    
            const msgList = document.querySelector('#msgList');
            msgList.appendChild(newMessage);
    
            formItem.reset();
        }
    }
    
});