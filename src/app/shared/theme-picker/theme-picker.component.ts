import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {DocsSiteTheme, ThemeService} from '../../services/theme.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {DomSanitizer} from '@angular/platform-browser';
import {StyleService} from '../../services/style.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: 'theme-picker.component.html',
  styleUrls: ['theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ThemePickerComponent implements OnInit, OnDestroy {
  private _queryParamSubscription = Subscription.EMPTY;
  currentTheme: DocsSiteTheme;

  // The below colors need to align with the themes defined in theme-picker.scss
  themes: DocsSiteTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green',
      isDark: true,
    },
  ];

  constructor(public styleManager: StyleService,
              private _themeStorage: ThemeService,
              private _activatedRoute: ActivatedRoute,
              private liveAnnouncer: LiveAnnouncer,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('theme-example',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/theme-demo-icon.svg'));
    const themeName = this._themeStorage.getStoredThemeName();
    if (themeName) {
      this.selectTheme(themeName);
    }
  }

  ngOnInit() {
    this._queryParamSubscription = this._activatedRoute.queryParamMap
      .pipe(map((params: ParamMap) => params.get('theme')))
      .subscribe((themeName: string | null) => {
        if (themeName) {
          this.selectTheme(themeName);
        }
      });
  }

  ngOnDestroy() {
    this._queryParamSubscription.unsubscribe();
  }

  selectTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `assets/${theme.name}.css`);
    }

    if (this.currentTheme) {
      this.liveAnnouncer.announce(`${theme.displayName} theme selected.`, 'polite', 3000).then();
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }
}
