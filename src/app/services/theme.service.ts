import {Injectable, EventEmitter} from '@angular/core';

export interface DocsSiteTheme {
  name: string;
  displayName?: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}


@Injectable()
export class ThemeService {
  static storageKey = 'docs-theme-storage-current-name';

  onThemeUpdate: EventEmitter<DocsSiteTheme> = new EventEmitter<DocsSiteTheme>();

  storeTheme(theme: DocsSiteTheme) {
    try {
      window.localStorage[ThemeService.storageKey] = theme.name;
    } catch {
    }

    this.onThemeUpdate.emit(theme);
  }

  getStoredThemeName(): string | null {
    try {
      return window.localStorage[ThemeService.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeService.storageKey);
    } catch {
    }
  }
}
