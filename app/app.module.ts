import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SalaryCalcComponent} from './salarycalc/salarycalc.component';
import { SalarycomputeComponent } from './salarycompute/salarycompute.component';

@NgModule({
  declarations:[AppComponent,SalaryCalcComponent, SalarycomputeComponent], // Contain Component, Pipe, Directive
  providers:[],  // Contain Service
  imports:[BrowserModule],  // dependent module

bootstrap:[AppComponent]

}
)
export class AppModule{

}
