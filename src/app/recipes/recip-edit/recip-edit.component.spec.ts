import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipEditComponent } from './recip-edit.component';

describe('RecipEditComponent', () => {
  let component: RecipEditComponent;
  let fixture: ComponentFixture<RecipEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
