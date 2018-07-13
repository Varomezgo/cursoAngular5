import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-componentea',
  templateUrl: './componentea.component.html',
  styleUrls: ['./componentea.component.css']
})
export class ComponenteaComponent implements OnInit {

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.getMensajes()
                  .subscribe(
                    (data: string)=>{ console.log(data)},
                    (error)=>{ console.log(error)},
                    ()=>{ console.log('Proceso completado')}
                  )
  }

}
