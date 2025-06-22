const socket = new WebSocket('ws://localhost:3000')

function sendMessage(e) {
    e.preventDefault()
    const input = document.querySelector('input')
    if (input.value) {
    socket.send(input.value)
    input.value = ""
    }
    input.focus()
}

document.querySelector('form')
    .addEventListener('submit', sendMessage)

// Listen for messages 
socket.addEventListener("message", ({ data }) => {
    const messageBox = document.createElement('div');
    messageBox.className = 'message-box';
    const li = document.createElement('li');
    li.textContent = data;
    messageBox.appendChild(li);
    document.querySelector('ul').appendChild(messageBox);
})

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.querySelector('.chat-messages ul');
const clearButton = document.getElementById('clear-button');

// Initialize local storage
const storedMessages = localStorage.getItem('messages');
const messages = storedMessages ? JSON.parse(storedMessages) : [];

// Function to add message to local storage
function addMessage(message) {
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

// Function to display messages
function displayMessages() {
    chatMessages.innerHTML = '';
    messages.forEach((message) => {
        const li = document.createElement('li');
    li.textContent = message;
    chatMessages.appendChild(li);
    });
}

// Function to clear chat
function clearChat() {
    localStorage.removeItem('messages');
    messages.length = 0;
    displayMessages();
}

// Add event listener to send button
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
        if (message) {
    addMessage(message);
    displayMessages();
    messageInput.value = '';
    }
});

// Add event listener to clear button
clearButton.addEventListener('click', clearChat);

// Display initial messages
displayMessages();






    sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
    const li = document.createElement('li');
    const chatBubble = document.createElement('div');
    chatBubble.className = 'chat-bubble';
    chatBubble.textContent = message;
    li.appendChild(chatBubble);
    document.querySelector('.chat-messages ul').appendChild(li);
    messageInput.value = '';
    }
});
