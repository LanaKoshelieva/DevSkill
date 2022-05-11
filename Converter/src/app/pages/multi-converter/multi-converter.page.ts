import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-converter',
  templateUrl: './multi-converter.page.html',
  styleUrls: ['./multi-converter.page.scss'],
})
export class MultiConverterPage implements OnInit {

  c:number;
  f:number;
  km:number;
  mi:number;

  constructor() { }

  notificaConversione(messaggio:string)
  {
    const messaggioDiviso = messaggio.split(':');

    let label:string = messaggioDiviso[0];
    let risultato:number = +messaggioDiviso[1];

    if( label === "C") {
      this.f = risultato;
    }
    if( label === "F") {
      this.c = risultato;
    }
    if( label === "KM") {
      this.mi = risultato;      
    }
    if( label === "MI") {
      this.km = risultato;
    }

  } 
  ngOnInit() {
  }
}
