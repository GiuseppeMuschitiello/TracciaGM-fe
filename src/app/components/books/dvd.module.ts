import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DvdsListComponent } from './dvds-list/dvds-list.component';
import { DvdDetailsComponent } from './book-details/dvd-details.component';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DvdsListComponent,
    DvdDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DvdsListComponent,
    DvdDetailsComponent
  ],
  providers: [ ApiService ]
})
export class DvdModule { }