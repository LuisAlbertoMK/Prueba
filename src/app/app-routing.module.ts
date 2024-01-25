import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosOrdenesComponent } from './pages/cargos-ordenes/cargos-ordenes.component';
import { CargosDetailsComponent } from './components/cargos-details/cargos-details.component';

const routes: Routes = [
  { path: 'cargoOrdenes', component: CargosOrdenesComponent},
  { path: 'detallesOrden', component: CargosDetailsComponent},
  { path: '', component: CargosOrdenesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'cargoOrdenes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
