import {NgModule} from '@angular/core';
import {ContentHeaderComponent} from './content-header.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [ContentHeaderComponent],
  declarations: [ContentHeaderComponent],
})
export class ContentHeaderModule {
}
