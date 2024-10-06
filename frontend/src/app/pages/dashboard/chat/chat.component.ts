// src/app/chat/chat.component.ts
import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

import { SharedModule } from '../../../shared/shared.module';

import { ChatService } from './models/chat.service';
import { Chat, Message } from './models/chat-model';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [
        SharedModule
    ],
    templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit, AfterViewChecked {
    chats: Chat[] = [];
    selectedChat: Chat | null = null;
    newMessage: string = '';
    showEmojiPicker: boolean = false;
    @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

    constructor(private chatService: ChatService) { }

    ngOnInit(): void {
        this.chatService.getChats().subscribe(data => {
            this.chats = data;
            if (!this.selectedChat && this.chats.length > 0) {
                this.selectChat(this.chats[0]);
            }
        });
    }

    ngAfterViewChecked(): void {
        this.scrollToBottom();
    }

    selectChat(chat: Chat): void {
        this.selectedChat = chat;
        this.scrollToBottom();
    }

    createNewChat(): void {
        // Implementa la lógica para crear un nuevo chat
        // Por ejemplo, abrir un modal para seleccionar un usuario
        alert('Funcionalidad de crear nuevo chat no implementada.');
    }

    sendMessage(): void {
        if (this.newMessage.trim() === '' || !this.selectedChat) {
            return;
        }

        const message: Message = {
            id: this.generateMessageId(),
            sender: 'User',
            text: this.newMessage,
            timestamp: new Date(),
            type: 'text'
        };

        this.chatService.addMessage(this.selectedChat.id, message);
        this.newMessage = '';
        this.showEmojiPicker = false;
        this.scrollToBottom();
    }

    addEmoji(event: EmojiEvent): void {
        this.newMessage += event.emoji.native;
    }

    toggleEmojiPicker(): void {
        this.showEmojiPicker = !this.showEmojiPicker;
    }

    onFileSelected(event: any): void {
        if (!this.selectedChat) return;

        const file: File = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const fileUrl = reader.result as string;
                let messageType: 'image' | 'video' | 'file' = 'file';

                if (file.type.startsWith('image/')) {
                    messageType = 'image';
                } else if (file.type.startsWith('video/')) {
                    messageType = 'video';
                }

                const message: Message = {
                    id: this.generateMessageId(),
                    sender: 'User',
                    text: file.name,
                    timestamp: new Date(),
                    type: messageType,
                    fileUrl: fileUrl
                };

                // this.chatService.addMessage(this.selectedChat.id, message);
                this.scrollToBottom();
            };

            reader.readAsDataURL(file);
        }
    }

    generateMessageId(): number {
        return this.selectedChat ? Math.max(...this.selectedChat.messages.map(m => m.id)) + 1 : 1;
    }

    scrollToBottom(): void {
        try {
            this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }
}
