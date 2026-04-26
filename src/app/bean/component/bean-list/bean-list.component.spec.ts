import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanListComponent } from './bean-list.component';

describe('BeanListComponent', () => {
  let component: BeanListComponent;
  let fixture: ComponentFixture<BeanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
