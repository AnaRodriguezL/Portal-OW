import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgendaModalComponent } from './add-agenda-modal.component';

describe('AddAgendaModalComponent', () => {
    let component: AddAgendaModalComponent;
    let fixture: ComponentFixture<AddAgendaModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AddAgendaModalComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AddAgendaModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
