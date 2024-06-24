import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.worldbank.org/V2/country';  // World Bank API endpoint

  constructor(private http: HttpClient) {}

  // get country data from World Bank API via hoverID
  getCountryDataViaID(hoverID: string): Observable<any[]> {
    const url = `${this.apiUrl}/${hoverID}?format=json&per_page=1`;
    return this.http.get<any[]>(url);
  }

  // get country data from World Bank API via hoverName
  getCountryDataViaName(hoverName: string): Observable<any[]> {
    const url = `${this.apiUrl}/${hoverName}?format=json&per_page=1`;
    return this.http.get<any[]>(url);
  }

}