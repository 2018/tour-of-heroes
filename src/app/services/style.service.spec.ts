import {HttpClientTestingModule} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {StyleService} from './style.service';


describe('StyleService', () => {
  let styleService: StyleService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [StyleService]
  }));

  beforeEach(inject([StyleService], (sm: StyleService) => {
    styleService = sm;
  }));

  afterEach(() => {
    const links = document.head.querySelectorAll('link');
    for (const link of Array.prototype.slice.call(links)) {
      if (link.className.includes('style-manager-')) {
        document.head.removeChild(link);
      }
    }
  });

  it('should add stylesheet to head', () => {
    styleService.setStyle('test', 'test.css');
    const styleEl = document.head.querySelector('.style-manager-test') as HTMLLinkElement;
    expect(styleEl).not.toBeNull();
    expect(styleEl.href.endsWith('test.css')).toBe(true);
  });

  it('should change existing stylesheet', () => {
    styleService.setStyle('test', 'test.css');
    const styleEl = document.head.querySelector('.style-manager-test') as HTMLLinkElement;
    expect(styleEl).not.toBeNull();
    expect(styleEl.href.endsWith('test.css')).toBe(true);

    styleService.setStyle('test', 'new.css');
    expect(styleEl.href.endsWith('new.css')).toBe(true);
  });

  it('should remove existing stylesheet', () => {
    styleService.setStyle('test', 'test.css');
    let styleEl = document.head.querySelector('.style-manager-test') as HTMLLinkElement;
    expect(styleEl).not.toBeNull();
    expect(styleEl.href.endsWith('test.css')).toBe(true);

    styleService.removeStyle('test');
    styleEl = document.head.querySelector('.style-manager-test') as HTMLLinkElement;
    expect(styleEl).toBeNull();
  });
});
