import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AUserDashComponent} from './a-user-dash.component';
import {MatExpansionModule, MatDividerModule} from "@angular/material";

describe('SUserDashComponent', () => {
    let component: AUserDashComponent;
    let fixture: ComponentFixture<AUserDashComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AUserDashComponent
            ],
            imports: [
                MatExpansionModule,
                MatDividerModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AUserDashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
