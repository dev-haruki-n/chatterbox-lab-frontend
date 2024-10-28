"use client";

import React, { useState } from "react";

export default function ChatPage() {
    const [messages, setMessages] = useState<string[]>([]); // メッセージ一覧
    const [inputMessage, setInputMessage] = useState<string>(""); // 入力フィールド

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault(); // ページリロードを防ぐ
        if (inputMessage.trim()) {
            setMessages([...messages, inputMessage]); // メッセージを追加
            setInputMessage(""); // 入力フィールドをリセット
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
            <h1>チャット</h1>
            <div
                style={{
                    border: "1px solid #ddd",
                    padding: "1rem",
                    height: "300px",
                    overflowY: "auto",
                    marginBottom: "1rem",
                }}
            >
                {messages.map((msg, index) => (
                    <div key={index} style={{ marginBottom: "0.5rem" }}>
                        <strong>ユーザー:</strong> {msg}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSendMessage} style={{ display: "flex" }}>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="メッセージを入力"
                    style={{ flexGrow: 1, padding: "0.5rem" }}
                />
                <button type="submit" style={{ padding: "0.5rem 1rem" }}>
                    送信
                </button>
            </form>
        </div>
    );
}
