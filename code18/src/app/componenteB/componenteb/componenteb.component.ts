import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componenteb',
  templateUrl: './componenteb.component.html',
  styleUrls: ['./componenteb.component.css']
})
export class ComponentebComponent implements OnInit, OnDestroy {

  pings: Subscription;

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.pings = this.servicioService.getPings()
                  .subscribe(
                    (data: string)=>{ console.log(data)},
                    (error)=>{ console.log(error)},
                    ()=>{ console.log('Proceso completado')}
                  )
  }

  ngOnDestroy() {
    this.pings.unsubscribe();
  }

}
