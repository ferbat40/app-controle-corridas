import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.scss']
})
export class Componente3Component implements OnInit {
   year?: Date;
   
  constructor() { 
    this.year=new Date();
  }

  ngOnInit(): void {
  }

}
