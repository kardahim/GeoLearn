import { Component, OnInit } from '@angular/core';
import { ICountryList } from './interfaces/ICountryList';
import { NgFor } from '@angular/common';
import { CountryService } from '../../shared/services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  countryList: ICountryList[] = [];

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit() {
    // fill the countryList array
    this.countryService.getAllCountries().subscribe((data) => {
      this.countryList = data.map((country: any) => {
        return {
          flagURL: country.flags.svg,
          countryName: country.name.common,
        };
      });
    });
  }

  navigateToCountryDetails(countryName: string) {
    this.router.navigate([`/country/${countryName}`]);
  }
}
