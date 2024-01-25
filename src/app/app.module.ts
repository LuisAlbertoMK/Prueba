import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargosOrdenesComponent } from './pages/cargos-ordenes/cargos-ordenes.component';
import { CargosDetailsComponent } from './components/cargos-details/cargos-details.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdenComponent } from './components/orden/orden.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { FechaFormatoPipe } from './pipes/fecha-formato.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CargosOrdenesComponent,
    CargosDetailsComponent,
    OrdenComponent,
    FechaFormatoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
