import { registerLocaleData } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import localeAr from '@angular/common/locales/ar';

registerLocaleData(localeAr);

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  displayedColumns: string[] = ['الموقع', 'الاسم', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | any;
  @ViewChild(MatSort, {static: true}) sort: MatSort | any;
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  الاسم: string;
  الموقع: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {الموقع: 1, الاسم: 'الالف', weight: 1.0079, symbol: 'أ'},
  {الموقع: 4, الاسم: 'الالف', weight: 1.0079, symbol: 'أ'},
  {الموقع: 3, الاسم: 'خمس', weight: 1.0079, symbol: 'أ'},
  {الموقع: 2, الاسم: 'خمس', weight: 1.0079, symbol: 'أ'},
  {الموقع: 1, الاسم: 'خمس', weight: 1.0079, symbol: 'أ'},
  {الموقع: 1, الاسم: 'الالف', weight: 1.0079, symbol: 'أ'},

];