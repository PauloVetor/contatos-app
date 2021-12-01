import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoEditarComponent } from './contato-editar.component';

describe('ContatoEditarComponent', () => {
  let component: ContatoEditarComponent;
  let fixture: ComponentFixture<ContatoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
