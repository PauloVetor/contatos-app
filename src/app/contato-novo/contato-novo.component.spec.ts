import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoNovoComponent } from './contato-novo.component';

describe('ContatoNovoComponent', () => {
  let component: ContatoNovoComponent;
  let fixture: ComponentFixture<ContatoNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
