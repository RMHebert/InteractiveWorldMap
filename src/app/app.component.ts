import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { TableComponent } from './components/table/table.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MapComponent,
    TableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Interactive World Map';

  // default hoveredID & hoveredName values
  hoveredID: string = '';
  hoveredName: string = '';

  // default table values
  tableName: string = '';
  tableCapital: string = '';
  tableRegion: string = '';
  tableIncome: string = '';
  tableLong: string = '';
  tableLat: string = '';

  constructor(private apiService: ApiService) {}

  // assigns hoveredID
  onCountryHoveredID(countryID: string): void {
    this.hoveredID = countryID;
    this.fetchDataForHoveredID();
  }

  // assigns hoveredName
  onCountryHoveredName(countryName: string): void {
    this.hoveredName = countryName;
    this.fetchDataForHoveredName();
  }
  
  // can fetch table data via hoveredID
  fetchDataForHoveredID() {
    this.apiService.getCountryDataViaID(this.hoveredID).subscribe(
      (data) => this.updateTableData(data),
      (error) => console.error('Retrieval error:', error)
    );
  } // end of fetchDataForHoveredID

  // can fetch table data via hoveredName
  fetchDataForHoveredName() {
    this.apiService.getCountryDataViaName(this.hoveredName).subscribe(
      (data) => this.updateTableData(data),
      (error) => console.error('Retrieval error:', error)
    );
  } // end of fetchDataForHoveredName

  // updates table with fetched data via
  // fetchDataForHoveredID or fetchDataForHoveredName
  // current iteration uses fetchDataForHoveredName as per task requirements
  updateTableData(data: any[]) {
    if (data && data.length > 1 && data[1].length > 0) {
      this.tableName = data[1][0].name;
      this.tableCapital = data[1][0].capitalCity;
      this.tableRegion = data[1][0].region.value;
      this.tableIncome = data[1][0].incomeLevel.value;
      this.tableLong = data[1][0].longitude;
      this.tableLat = data[1][0].latitude;
    } else {
      console.error('No data found');
    }
  }

} // end of AppComponent

