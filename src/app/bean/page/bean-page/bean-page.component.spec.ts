import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanPageComponent } from './bean-page.component';

describe('BeanPageComponent', () => {
  let component: BeanPageComponent;
  let fixture: ComponentFixture<BeanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
