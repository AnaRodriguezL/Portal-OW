// src/app/chat/services/chat.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chat, Message } from './chat-model';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private chats: Chat[] = [
        {
            id: 1,
            friendName: 'Ana García',
            friendPosition: 'Diseñadora UX/UI',
            friendPhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
            isActive: true,
            messages: [
                {
                    id: 1,
                    sender: 'Friend',
                    text: '¡Hola! ¿Cómo estás?',
                    timestamp: new Date(),
                    type: 'text'
                },
                {
                    id: 2,
                    sender: 'User',
                    text: '¡Hola Ana! Estoy bien, gracias.',
                    timestamp: new Date(),
                    type: 'text'
                }
            ],
            lastMessage: '¡Hola Ana! Estoy bien, gracias.',
            lastTimestamp: new Date()
        },
        // Puedes agregar más chats aquí
    ];

    private chatsSubject: BehaviorSubject<Chat[]> = new BehaviorSubject(this.chats);

    constructor() { }

    getChats(): Observable<Chat[]> {
        return this.chatsSubject.asObservable();
    }

    getChatById(id: number): Chat | undefined {
        return this.chats.find(chat => chat.id === id);
    }

    addMessage(chatId: number, message: Message): void {
        const chat = this.getChatById(chatId);
        if (chat) {
            chat.messages.push(message);
            chat.lastMessage = message.text;
            chat.lastTimestamp = message.timestamp;
            this.chatsSubject.next(this.chats);
        }
    }

    addChat(chat: Chat): void {
        this.chats.push(chat);
        this.chatsSubject.next(this.chats);
    }

    // Otros métodos como eliminar chat pueden ser añadidos aquí
}
