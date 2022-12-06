import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BannerComponent } from './banner.component';

describe('5. Banner Page Component Test scenario', () => {
  let fixture: ComponentFixture<BannerComponent>;
  let component: BannerComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [BannerComponent],
    });
    fixture = TestBed.createComponent(BannerComponent);
    // fixture.detectChanges()
  });
  beforeEach(() => {
    fixture.detectChanges();
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });
  describe('5.1. Component should be initialized', () => {
    it('component should be created', () => {
      expect(component).toBeTruthy();
      expect(component).toBeInstanceOf(BannerComponent);
    });

    it('component view Element should be created', () => {
      expect(element).toBeTruthy();
    });
  });

  describe('5.2. Component should have the required properties and tags', () => {
    const expectedSubtitle = 'Web Developer';
    it(`title should have value as ${expectedSubtitle}`, () => {
      expect(component.title).toMatch(expectedSubtitle);
    });

    it(`Banner application title should contain value as ${expectedSubtitle}`, () => {
      const banner = element.querySelector('span') as Element;

      expect(banner).toBeTruthy();
      expect(banner.textContent).toContain(component.title);
    });

    it('Banner application button should have warning classes', () => {
      const warning = debugElement.query(By.css('.text-warning'))
      expect(Object.values(warning.classes)).toContain(true);
    })
  });
});
