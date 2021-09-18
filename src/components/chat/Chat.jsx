import React from "react"
import styles from './Chat.module.css'

function clear_loading_screen() {
    document.documentElement.style.setProperty('--loading-opacity', '0%');
    setTimeout(() => {
        document.documentElement.style.setProperty('--loading-text-content', 'none');
        document.documentElement.style.setProperty('--loading-background-content', 'none');
    }, 300)
}

export default function Chat() {
    
    React.useEffect(() => {        
        const chat = document.getElementById("chat-log");
        const chat_log = document.getElementById("chat-log");
        const chat_input = document.getElementById("chat-input");

        // const web_socket = new WebSocket("wss://danlab.co.uk/server");
        // web_socket.onopen = function (event) {
        //     console.log("Connected!");
        //     clear_loading_screen();

        // };


    }, []);

    return (
        <div className={styles.chat}>
            <div id="chat-log" className={styles.chatLog}>
                Start of chat log.
            </div>
            <input id="chat-input" className={styles.chatInput} type="text" placeholder="Type a message and press enter." />
        </div>
    );
}