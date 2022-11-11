import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSskillsComponent } from './hsskills.component';

describe('HSskillsComponent', () => {
  let component: HSskillsComponent;
  let fixture: ComponentFixture<HSskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HSskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
