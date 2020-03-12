import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssetsusagetypemasterComponent } from './assetsusagetypemaster.component';

describe('AssetsusagetypemasterComponent', () => {
  let component: AssetsusagetypemasterComponent;
  let fixture: ComponentFixture<AssetsusagetypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsusagetypemasterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetsusagetypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
