import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-converter',
  templateUrl: './input-converter.component.html',
  styleUrls: ['./input-converter.component.scss'],
})
export class InputConverterComponent implements OnInit {
  

  @Input() from:number;
  @Input() to:number;

  @Input() inputFrom:string;
  @Input() inputTo:string;
  
  @Output() eventoRipristino = new EventEmitter<string>();

  celsiusToFahrenheit (gradiC:number):number {
    return +(gradiC * 9 / 5 + 32).toFixed(3);
  }

  fahrenheitToCelsius (gradiF:number):number {
    return +((gradiF-32) * 5 / 9).toFixed(3);  
  }

  milesToKilometers (distanzaM:number):number {
    return +(distanzaM * 1.60934).toFixed(3);
  }

  kilometersToMiles (distanzaKm:number):number {
    return +(distanzaKm / 1.60934).toFixed(3);
  }

  converti(value:number, tipo:string):number 
  {
    if (tipo === "C") 
    {
      return this.celsiusToFahrenheit(value);
    } else 
    if (tipo === "F") 
    {
      return this.fahrenheitToCelsius(value);
    } else 
    if (tipo === "MI") 
    {
      return this.milesToKilometers(value);
    } else 
    if (tipo === "KM") 
    {
      return this.kilometersToMiles(value);
    }
    return value;
  }

  reset() 
  {
    this.from = null;
    this.to = null;
  }


  fromChanged(value:number) {
    if(value == null)
    {
      this.to = null;
    }
    else 
    {
      this.to = this.converti(value, this.inputFrom);
    }
  }

  toChanged(value:number) {
    if(value == null)
    {
      this.from = null;
    }
    else
    {
      this.from = this.converti(value, this.inputTo);
    }
  }  



  // addEventoRipristino(value:string) {
  //   this.addEventoRipristino.emit(value)
  // }

  constructor() { }

  ngOnInit() {}

}
