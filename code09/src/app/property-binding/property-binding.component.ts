import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imagen = 'assets/trolebuses.jpg'

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.imagen = 'assets/uc.jpg';
    }, 3000);
  }

}
