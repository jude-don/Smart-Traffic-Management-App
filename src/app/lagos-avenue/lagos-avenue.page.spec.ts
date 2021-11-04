import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LagosAvenuePage } from './lagos-avenue.page';

describe('LagosAvenuePage', () => {
  let component: LagosAvenuePage;
  let fixture: ComponentFixture<LagosAvenuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagosAvenuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LagosAvenuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
