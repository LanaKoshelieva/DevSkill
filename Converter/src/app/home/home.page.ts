import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title:string = "Conversion of measurements";
  celsius:number;
  fahrenheit:number;
  kilometers:number;
  miles:number;

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



  reset() {
    console.log("reset");
    let conferma:boolean = confirm ("Do you really want to reset the data?");

    if (conferma == true) {
      this.celsius = null;
      this.fahrenheit = null;
      this.kilometers = null;
      this.miles = null;
    }    
  }

  cInput(value:number) {
    if(value == null)
    {
      this.fahrenheit = null;
    }
    else
    {
      this.fahrenheit = this.celsiusToFahrenheit(value);
    }
  }

  fInput(value:number) {
    if(value == null)
    {
      this.celsius = null;
    }
    else
    {
      this.celsius = this.fahrenheitToCelsius(value);
    }
  }

  kInput(value:number) {
    if(value == null)
    {
      this.miles = null;
    }
    else
    {
      this.miles = this.kilometersToMiles(value);
    }
  }

  mInput(value:number) {
    if(value == null)
    {
      this.kilometers = null;
    }
    else
    {
      this.kilometers = this.milesToKilometers(value);
    }
  }

}


