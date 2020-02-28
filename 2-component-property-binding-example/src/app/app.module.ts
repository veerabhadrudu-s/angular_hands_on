import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PrintAllPersonsDetailsComponent } from './print-all-persons-details/print-all-persons-details.component';

@NgModule({
   declarations: [
      AppComponent,
      PersonDetailsComponent,
      PrintAllPersonsDetailsComponent

   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
