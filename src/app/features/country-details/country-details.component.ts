import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../shared/services/country.service';
import { ICountryDetails } from './interfaces/ICountryDetails';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
})
export class CountryDetailsComponent implements OnInit {
  countryDetails: ICountryDetails = {
    commonName: '',
    officialName: '',
    nativeName: [],
    nativeOfficialName: [],
    currencies: [],
    capital: [],
    region: '',
    subregion: '',
    languages: [],
    area: 0,
    population: 0,
  };

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // fill the countryDetails object
    const countryName = this.route.snapshot.paramMap.get('countryname');

    this.countryService.getCountryByName(countryName!).subscribe((data) => {
      this.countryDetails = {
        commonName: data[0].name.common,
        officialName: data[0].name.official,
        nativeName: Object.values(data[0].name.nativeName).map(
          (name: any) => name.common
        ),
        nativeOfficialName: Object.values(data[0].name.nativeName).map(
          (name: any) => name.official
        ),
        currencies: Object.values(data[0].currencies).map(
          (currency: any) => currency.name
        ),
        capital: Object.values(data[0].capital),
        region: data[0].region,
        subregion: data[0].subregion,
        languages: Object.values(data[0].languages),
        area: data[0].area,
        population: data[0].population,
      };
    });
  }
}
