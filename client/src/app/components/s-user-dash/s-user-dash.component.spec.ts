import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SUserDashComponent} from './s-user-dash.component';
import {MatExpansionModule, MatDividerModule} from "@angular/material";

describe('SUserDashComponent', () => {
    let component: SUserDashComponent;
    let fixture: ComponentFixture<SUserDashComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SUserDashComponent
            ],
            imports: [
                MatExpansionModule,
                MatDividerModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SUserDashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
