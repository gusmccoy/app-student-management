import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StudentService } from './student-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddRowDirective } from './add-directive';

@NgModule({
  declarations: [
    AppComponent,
    AddRowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
  ],
  providers: [StudentService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
