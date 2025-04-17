import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryinfoService {

  constructor(private http: HttpClient) { }

  countryInfo (id: string):Observable<any[]> {
    const url = `https://api.worldbank.org/v2/country/${id}?format=json`;
    return this.http.get<any[]>(url)
  }
}
