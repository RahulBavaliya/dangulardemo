import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppMaterialModule } from "./app.material-module";
import { ButtonComponent } from "./button/button.component";
import { MatButtonModule  } from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
   ButtonComponent,
   DialogOverviewExampleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,

    BrowserAnimationsModule,

    AppMaterialModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule { }
