import { Component } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

interface Message {
    text: string;
    sender: 'User' | 'Friend';
    timestamp: string;
}

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [
        SharedModule
    ],
    templateUrl: './chat.component.html',
})
export class ChatComponent {
    messages: Message[] = [
        { text: '¡Hola! ¿Cómo estás?', sender: 'Friend', timestamp: '10:01 AM' },
        { text: '¡Hola! Todo bien, ¿y tú?', sender: 'User', timestamp: '10:02 AM' },
        { text: 'Genial, gracias. ¿Listo para la reunión?', sender: 'Friend', timestamp: '10:03 AM' },
        { text: 'Sí, estoy preparado.', sender: 'User', timestamp: '10:04 AM' },
        { text: 'Perfecto. Nos vemos a las 11.', sender: 'Friend', timestamp: '10:05 AM' },
    ];

    newMessage: string = '';

    sendMessage() {
        if (this.newMessage.trim()) {
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            this.messages.push({ text: this.newMessage, sender: 'User', timestamp });
            this.newMessage = ''; // Limpiar el campo de entrada
        }
    }
}
