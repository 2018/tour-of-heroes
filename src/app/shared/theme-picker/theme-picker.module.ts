import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ThemeService} from '../../services/theme.service';
import {ThemePickerComponent} from './theme-picker.component';
import {StyleService} from '../../services/style.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
  providers: [StyleService, ThemeService],
})
export class ThemePickerModule {
}
