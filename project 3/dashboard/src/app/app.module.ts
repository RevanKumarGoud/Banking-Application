import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { HeaderComponent } from './containers/layout/header/header.component';
import { DasshboardComponent } from './dasshboard/dasshboard.component';
import { WidgetBrandComponent } from './widget-brand/widget-brand.component';
import { TableComponent } from './table/table.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    DasshboardComponent,
    WidgetBrandComponent,
    TableComponent,
    SalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
