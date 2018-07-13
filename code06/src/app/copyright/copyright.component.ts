import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `<p>&copy; Santander 2.018.</p>`,
  styles: [`p 
  {color: red;}`]
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
