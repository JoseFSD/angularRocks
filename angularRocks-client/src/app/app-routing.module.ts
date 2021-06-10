import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandsListComponent } from './components/bands-list/bands-list.component';
import { DetailsBandsComponent } from './components/bands-list/details-bands/details-bands.component';

const routes: Routes = [
  { path: '', redirectTo: 'bands', pathMatch: 'full' },
  { path: 'bands', component:  BandsListComponent},
  { path: 'details', component:  DetailsBandsComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
