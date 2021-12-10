import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirdemoComponent } from './dirdemo.component';

describe('DirdemoComponent', () => {
  let component: DirdemoComponent;
  let fixture: ComponentFixture<DirdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
