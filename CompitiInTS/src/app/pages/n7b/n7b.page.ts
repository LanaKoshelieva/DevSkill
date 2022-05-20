import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n7b',
  templateUrl: './n7b.page.html',
  styleUrls: ['./n7b.page.scss'],
})
export class N7bPage implements OnInit {

  constructor() { }

  X:number;
  N:number;
  array:number[] = [];
  S:string = "";
  input:number;

  isButtonDisabled: boolean = true;
  hidden;

  pushX(n:number)
  {
    this.X = n;
    this.controllaBottone()
  }
  
  pushN(n:number)
  {
    this.N = n;
    this.controllaBottone()
  }

  push(n:number)
  {
    this.array.push(n)
    if (this.array.length == this.N)
    {
      this.stampa();
    }
    this.input = null;
    this.hidden = "Mancano " + (this.N - this.array.length) +" elementi nell'array"
  }

  controllaBottone()
  {
    if (this.N==null || this.X==null)
    {
      this.isButtonDisabled = true;
    }
    else
    {
      this.isButtonDisabled = false;
      this.hidden = "Inserisci " + this.N +" elementi nell'array"
    }    
  }

  stampa()
  {
    for (let i=0; i<this.N; i++)
    {
        if (this.array[i]<this.X && (this.array[i]%2==0))
        {
            this.S = this.S + this.array[i];       
        }
    }
    console.log(this.S)
  }

  ngOnInit() {
  }

}
