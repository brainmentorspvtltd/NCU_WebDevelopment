import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { InputComponent } from './phonebook/input/input.component';
import { ListComponent } from './phonebook/list/list.component';
import { RecordComponent } from './phonebook/list/record/record.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    InputComponent,
    ListComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
