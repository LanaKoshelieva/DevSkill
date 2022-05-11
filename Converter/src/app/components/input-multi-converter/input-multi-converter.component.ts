import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-multi-converter',
  templateUrl: './input-multi-converter.component.html',
  styleUrls: ['./input-multi-converter.component.scss'],
})
export class InputMultiConverterComponent implements OnInit {

  @Input() label:string;
  @Input() valore:number;

  @Output() eventoConversione = new EventEmitter<string>();

  convertiValore () 
  {
    let valoreConvertito:number;

    if (this.label == "C") 
    {
      valoreConvertito = +(this.valore * 9 / 5 + 32).toFixed(3);
    }
    if (this.label == "F") 
    {
      valoreConvertito = +((this.valore-32) * 5 / 9).toFixed(3);
    }
    if (this.label == "MI") 
    {
      valoreConvertito = +(this.valore * 1.60934).toFixed(3);
    }
    if (this.label == "KM") 
    {
      valoreConvertito = +(this.valore / 1.60934).toFixed(3);
    }
    if (this.valore == null)
    {
      valoreConvertito = null;
    }
    this.eventoConversione.emit(this.label+ ":" +valoreConvertito);
    console.log(this.eventoConversione)
  }

  // convertiValore () {
  //   let valoreConvertito:number;

  //   if (this.label == "C") {
  //     valoreConvertito = this.arrotonda(this.valore * 9 / 5 + 32);
  //   }
  //   if (this.label == "F") {
  //     valoreConvertito = this.arrotonda((this.valore-32) * 5 / 9);
  //   }
  //   if (this.label == "KM") {
  //     valoreConvertito = this.arrotonda(this.valore * 1.60934);
  //   }
  //   if (this.label == "MI") {
  //     valoreConvertito = this.arrotonda(this.valore / 1.60934);
  //   }
  //   this.eventoConversione.emit(this.label+":"+valoreConvertito);
  // }

  // arrotonda(risultato:number):number {
  //   return +risultato.toPrecision(5);
  // }
  constructor() { }

  ngOnInit() {}

}
