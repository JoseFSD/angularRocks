// Modules from Angular Material

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';
// import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableExporterModule } from 'mat-table-exporter';


const myModules = [
  MatButtonModule,
  // MatToolbarModule,
  // MatIconModule,
  // MatInputModule,
  // MatCardModule,
  // MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableExporterModule
];

@NgModule ({
  imports: [ myModules ],
  exports: [ myModules ]
})

export class MaterialModule {}