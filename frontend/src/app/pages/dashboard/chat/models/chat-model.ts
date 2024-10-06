// src/app/chat/models/message.model.ts
export interface Message {
    id: number;
    sender: 'User' | 'Friend';
    text: string;
    timestamp: Date;
    type: 'text' | 'image' | 'video' | 'file';
    fileUrl?: string;
}

export interface Chat {
    id: number;
    friendName: string;
    friendPosition: string;
    friendPhoto: string;
    isActive: boolean;
    messages: Message[];
    lastMessage: string;
    lastTimestamp: Date;
}  