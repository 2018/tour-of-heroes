import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {NavBarComponent} from './nav-bar.component';
import {ThemePickerModule} from '../theme-picker/theme-picker.module';
import {StyleService} from '../../services/style.service';
import {ThemeService} from '../../services/theme.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    ThemePickerModule
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
  providers: [StyleService, ThemeService]
})
export class NavBarModule {
}
