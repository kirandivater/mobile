import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaluserdetailsmasterComponent } from './baluserdetailsmaster.component';

describe('BaluserdetailsmasterComponent', () => {
  let component: BaluserdetailsmasterComponent;
  let fixture: ComponentFixture<BaluserdetailsmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaluserdetailsmasterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaluserdetailsmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
