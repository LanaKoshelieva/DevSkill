import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  
  constructor() {}

  
  isUgly (n:number):boolean 
  {
      while (n != 1) 
      {
          if (n%2 == 0) 
          {
              n = n /2
          } else
          if (n%3 == 0) 
          {
              n = n /3
          } else
          if (n%5 == 0) 
          {
              n = n /5
          } else 
          return false
      } 
      return true;
  }

  x = 1;
  contare:number = 0
  while (this.contare < 1500)
  {
      if (this.isUgly(this.x) == true) 
      {
          contare = contare+1;
      }
      this.x = this.x+1;
  }    
  // console.log("Il 1500-simo UglyNumber è: " +(this.x-1))

}
