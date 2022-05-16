import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ugly-numbers',
  templateUrl: './ugly-numbers.page.html',
  styleUrls: ['./ugly-numbers.page.scss'],
})
export class UglyNumbersPage implements OnInit {

  constructor() { }

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
    
    n:number;
    risultato:number;

    trovaVoluto (n:number):void
    {    
        let contare = 0;  
        let x:number = 1;  
        while (contare < 1500)
        {
            if (this.isUgly(x) == true) 
            {
                contare = contare+1;
            }
            x = x+1;
        } 
        this.risultato = x - 1;     
        console.log("Il 1500-simo UglyNumber è: " +(this.risultato))
    }

  ngOnInit() {
  }

}
