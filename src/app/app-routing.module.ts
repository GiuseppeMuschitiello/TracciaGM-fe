import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DvdsListComponent } from './components/books/dvds-list/dvds-list.component';
import { DvdDetailsComponent } from './components/books/book-details/dvd-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dvds',
    component: DvdsListComponent,
  },
  {
    path: 'dvds/new',
    component: DvdDetailsComponent,
  },
  {
    path: 'dvds/edit/:id',
    component: DvdDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
