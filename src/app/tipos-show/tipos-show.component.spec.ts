import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposShowComponent } from './tipos-show.component';

describe('TiposShowComponent', () => {
  let component: TiposShowComponent;
  let fixture: ComponentFixture<TiposShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
