import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionsComponent } from './instalacions.component';

describe('InstalacionsComponent', () => {
  let component: InstalacionsComponent;
  let fixture: ComponentFixture<InstalacionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
