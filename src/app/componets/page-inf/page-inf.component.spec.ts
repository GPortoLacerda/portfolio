import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfComponent } from './page-inf.component';

describe('PageInfComponent', () => {
  let component: PageInfComponent;
  let fixture: ComponentFixture<PageInfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageInfComponent]
    });
    fixture = TestBed.createComponent(PageInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
