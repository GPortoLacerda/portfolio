import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContatosComponent } from './page-contatos.component';

describe('PageContatosComponent', () => {
  let component: PageContatosComponent;
  let fixture: ComponentFixture<PageContatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageContatosComponent]
    });
    fixture = TestBed.createComponent(PageContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
