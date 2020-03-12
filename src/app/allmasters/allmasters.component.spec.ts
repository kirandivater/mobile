import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllmastersComponent } from './allmasters.component';

describe('AllmastersComponent', () => {
  let component: AllmastersComponent;
  let fixture: ComponentFixture<AllmastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmastersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllmastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
