import { Component } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { MatDialog } from '@angular/material/dialog';
import { AddAgendaModalComponent } from '../../../components/modals/add-agenda-modal/add-agenda-modal.component';

import { SharedModule } from '../../../shared/shared.module';

import { agendaItems } from './agenda-items/agenda-data';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        SharedModule
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent {

    calendarOptions: any;

    agendaItems = agendaItems;

    handleDateClick() {
        const dialogRef = this.dialog.open(AddAgendaModalComponent, {
            width: '500px',
            data: {} // Puedes pasar datos aquí si es necesario
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const newEvent = {
                    title: result.title,
                    date: result.date,
                    time: result.time,
                    extendedProps: { subtext: result.description },
                    color: result.color,
                    completed: result.completed
                };

                this.calendarOptions = {
                    ...this.calendarOptions,
                    events: [...this.calendarOptions.events, newEvent]
                };

                const newAgendaItem = {
                    id: this.agendaItems.length + 1,
                    time: result.time,
                    date: result.date,
                    color: result.color,
                    title: result.title,
                    subtext: result.description,
                    completed: result.completed
                };

                this.agendaItems.push(newAgendaItem);
            }
        });
    }

    constructor(public dialog: MatDialog) {
        this.calendarOptions = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            locale: 'es',
            buttonText: {
                today: 'Hoy',
                month: 'Mes',
                week: 'Semana',
                day: 'Día'
            },
            events: [
                { title: 'Evento 1', date: '2024-09-01' },
                { title: 'Evento 2', date: '2024-09-02' }
            ],
            dateClick: this.handleDateClick.bind(this)
        };
    }
}
