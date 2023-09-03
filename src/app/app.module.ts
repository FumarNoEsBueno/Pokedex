import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table'; // Agrega TableModule
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import {AutoCompleteModule} from "primeng/autocomplete";
import {PanelModule} from "primeng/panel";
import {PaginatorModule} from "primeng/paginator";
import {RadioButtonModule} from "primeng/radiobutton";
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CardModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule,
    CarouselModule,
    FormsModule,
    AutoCompleteModule,
    PanelModule,
    PaginatorModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
