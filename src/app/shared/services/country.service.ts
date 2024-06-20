import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiURL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    return this.http.get(`${this.apiURL}/all`);
  }

  getCountryByName(name: string): Observable<any> {
    return this.http.get(`${this.apiURL}/name/${name}`);
  }
}
