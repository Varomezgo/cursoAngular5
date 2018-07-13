import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  getMensajes(): Observable<any> {
    const mensajes = Observable.create((observer: Observer<string>) => {
      setTimeout(() =>{
        observer.next('Primer mensaje');
      }, 1000);
      setTimeout(() =>{
        observer.next('Segundo mensaje');
      }, 2000);
      setTimeout(() =>{
        //observer.error('Mensaje de error');
        observer.complete();
      }, 3000);
      setTimeout(() =>{
        observer.next('Tercer mensaje');
      }, 4000);
    });
    return mensajes;
  }

  getPings(): Observable<any> {
    const mensajes = Observable.create((observer: Observer<string>) => {
      setInterval(() =>{
        observer.next('Ping');
      },1000);
    });
    return mensajes;
  }
}
