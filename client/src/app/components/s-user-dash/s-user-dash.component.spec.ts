 import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 import { SUserDashComponent } from './s-user-dash.component';

 describe('SUserDashComponent', () => {
   let component: SUserDashComponent;
   let fixture: ComponentFixture<SUserDashComponent>;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ SUserDashComponent ]
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
