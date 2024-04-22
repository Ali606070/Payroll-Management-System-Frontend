import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodesInitializationComponent } from './components/codes-initialization/codes-initialization.component';
import { HomeComponent } from './components/home/home.component';
import { DataTableComponent } from './components/shared/data-table/data-table.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Initalization',component:CodesInitializationComponent},
  {path:'data',component:DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
