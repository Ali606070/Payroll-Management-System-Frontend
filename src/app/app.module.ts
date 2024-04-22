import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CodesInitializationComponent } from './components/codes-initialization/codes-initialization.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// angualar material module
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './components/home/home.component';
import { HeroSectionComponent } from './components/shared/hero-section/hero-section.component';
import { DataTableComponent } from './components/shared/data-table/data-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CodesInitializationComponent,
    BsNavbarComponent,
    HomeComponent,
    HeroSectionComponent,
    DataTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
