import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserkeyAddComponent } from './userkey-add.component';

describe('UserkeyAddComponent', () => {
  let component: UserkeyAddComponent;
  let fixture: ComponentFixture<UserkeyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserkeyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserkeyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
