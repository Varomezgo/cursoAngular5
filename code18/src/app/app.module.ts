import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteaComponent } from './componenteA/componentea/componentea.component';
import { ComponentebComponent } from './componenteB/componenteb/componenteb.component';
import { Routes,RouterModule } from '@angular/router'

const rutas: Routes = [
  {path: 'a', component: ComponenteaComponent},
  {path: 'b', component: ComponentebComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ComponenteaComponent,
    ComponentebComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
