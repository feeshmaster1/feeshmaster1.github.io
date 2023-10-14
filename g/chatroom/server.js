const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const chatHistoryFile = 'chat_history.json';
let chatHistory = loadChatHistoryFromFile();

wss.on('connection', (ws) => {
    console.log('WebSocket connection opened.');

    ws.on('message', (message) => {
        console.log('Received message:', message);

        const messageData = JSON.parse(message);

        if (messageData.request === 'get_chat_history') {
            ws.send(JSON.stringify({ request: 'get_chat_history', history: chatHistory }));
        } else {
            chatHistory.push(messageData);

            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(messageData));
                }
            });

            saveChatHistoryToFile(chatHistory);
        }
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed.');
    });
});

function loadChatHistoryFromFile() {
    try {
        const historyData = fs.readFileSync(chatHistoryFile, 'utf8');
        return JSON.parse(historyData);
    } catch (error) {
        console.error('Error loading chat history from file:', error);
        return [];
    }
}

function saveChatHistoryToFile(history) {
    const historyJSON = JSON.stringify(history, null, 2);
    fs.writeFile(chatHistoryFile, historyJSON, (err) => {
        if (err) {
            console.error('Error saving chat history:', err);
        } else {
            console.log('Chat history saved to file.');
        }
    });
}

app.use(express.static('public'));

app.use(express.json()); 

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (password === 'aHI0dA==') {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Login failed');
    }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
