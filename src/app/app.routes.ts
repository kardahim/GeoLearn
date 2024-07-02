import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CountryDetailsComponent } from './features/country-details/country-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'country/:countryname',
    component: CountryDetailsComponent,
  },
];
