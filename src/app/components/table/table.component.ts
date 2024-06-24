import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent {
    @Input() tableName: string = '';
    @Input() tableCapital: string = '';
    @Input() tableRegion: string = '';
    @Input() tableIncome: string = '';
    @Input() tableLong: string = '';
    @Input() tableLat: string = '';

    constructor() { }
    
}