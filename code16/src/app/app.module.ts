import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { NavComponent } from './nav/nav.component';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';
import { LoginGuard } from './login.guard';
import { ComunesModule } from './comunes/comunes.module';

const rutas: Routes = [
  {path: '', component: InicioComponent},
  {path: 'listado-clientes', component: ListadoClientesComponent, data: {titulo: 'Listado de clientes'}},
  {path: 'ver-cliente/:id', component: VerClienteComponent, canActivate: [LoginGuard]},
  {path: 'recursos-humanos', loadChildren: 'src/app/rrhh/rrhh.module#RrhhModule'},
  {path: '**', component: InicioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoClientesComponent,
    NavComponent,
    VerClienteComponent
  ],
  imports: [
    BrowserModule,
    ComunesModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
