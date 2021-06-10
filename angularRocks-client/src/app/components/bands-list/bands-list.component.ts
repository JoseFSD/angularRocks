import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RequestsService } from 'src/services/requests.service';
import { Band } from '../../../models/Band';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialogService } from 'src/app/services/mat-dialog.service';

/**
//  * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.scss']
})
export class BandsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'img', 'video', 'foundation_year', ];
  dataSource: MatTableDataSource<Band>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  Bands: Band[] = [];
  infoBand: Band;
  colums = [
    { title: "Band name", name: "name" },
    { title: "Description", name: "description" },
    { title: "Image", name: "img" },
    { title: "Video link", name: "video" },
    { title: "Foundation year", name: "foundation_year" }
  ]

  constructor(private requests: RequestsService, private dialog: MatDialog, private md: MatDialogService) {
    this.getBands();
  }
  ngOnInit(): void {    
  }

  getBands(): void{
    this.requests.getBandsRequests().subscribe(
      (arrayBands) => {
        this.Bands = arrayBands; 
        this.dataSource = new MatTableDataSource(this.Bands);
        this.initializePaginatorAndSourting();
      },
      (error) => {
        this.md.dialogErrorUserServer('400px', '150px');
      }
    );
  }

  initializePaginatorAndSourting() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  bandSelected(band: Band): void {
    this.infoBand = band;
  }
}
