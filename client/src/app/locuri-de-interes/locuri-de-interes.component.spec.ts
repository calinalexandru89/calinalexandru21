import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocuriDeInteresComponent } from './locuri-de-interes.component';

describe('LocuriDeInteresComponent', () => {
  let component: LocuriDeInteresComponent;
  let fixture: ComponentFixture<LocuriDeInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocuriDeInteresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocuriDeInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
