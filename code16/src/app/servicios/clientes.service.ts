import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<any> = [
    {id:'1', nombre: 'Iberdrola', cif: 'A12345678'},
    {id:'1', nombre: 'Vodafone', cif: 'A34578945'},
    {id:'1', nombre: 'Gas Natural', cif: 'A23845956'}
  ]
  constructor() { }

  getClientes(){
    return this.clientes;
  }

  getCliente(id){
    const clienteSel = this.clientes.find( cliente => {
      return cliente.id === id
    });
    return clienteSel;
  }
}
