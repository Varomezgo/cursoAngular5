import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  texto = 'ciudad de Santander';
  id:any = 3;
  fecha = new Date();
  importe = 356979.135;
  aciertos = 0.0876;
  jugador = {
    nombre: 'Cristiano',
    apellidos: 'Ronaldo'
  }

  cantidad= 1200.7892479625249;

  ngOnInit(){
    this.id = '00000' + this.id;
  }

}
