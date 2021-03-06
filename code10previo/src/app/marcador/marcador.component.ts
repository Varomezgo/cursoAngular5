import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  jugadores: object[] = [
    {nombre: 'Isaiah Thomas', puntos: 0, imagen: 'assets/thomas.png'},
    {nombre: 'Kyle Kuzma', puntos: 0, imagen: 'assets/kuzma.png'},
    {nombre: 'Julius Randle', puntos: 0, imagen: 'assets/randle.png'},
    {nombre: 'Brandon Ingram', puntos: 0, imagen: 'assets/ingram.png'},
    {nombre: 'Brooke López', puntos: 0, imagen: 'assets/thomas.png'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
