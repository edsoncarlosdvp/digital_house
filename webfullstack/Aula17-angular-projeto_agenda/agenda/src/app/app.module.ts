import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { TableModule } from 'primeng/table'
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';

import { AppComponent } from './app.component';
import { PainelAgendaComponent } from './painel-agenda/painel-agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelAgendaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
