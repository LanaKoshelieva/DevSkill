import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  N1:number;
  N2:number;

  risultatoMax = 0;

  constructor() {}

    calcolaGiro (numero:number):number 
  {
      let count:number = 1; 
      while (numero != 1) 
      {
          if (numero %2 == 0) 
          {
              numero = numero /2;
          } 
          else 
          {
              numero = numero*3 +1;
          } 
          count ++;
      } 
      return count;
  } 
  
    calcolaMax() 
    { 
      let n1 = +this.N1;
      let n2 = +this.N2;

      if (n1 > n2 || n1 == n2 || (n1 < 0 || n1 > 10000) || (n2 < 0 || n2 > 10000) || (isNaN(n1) || isNaN(n2))) 
      {
        alert ("Il primo numero deve essere minore del secondo. \nI numeri non possono essere minori di 0 e maggiori di 10000")
        return;
      } 
      console.log(n1, n2)
      this.risultatoMax = 0;
      for (let i=n1; i<=n2; i++) 
      {
          let risultato:number = this.calcolaGiro(i);
          if (risultato > this.risultatoMax) 
          { 
              this.risultatoMax = risultato;
          } 
      } 
      console.log(this.risultatoMax)
       
    }

}
