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

  stampa()
  {
    for (let i=0; i<this.N; i++)
    {
        let input:number = +prompt("Riempi il tuo array");
        this.array.push(input);
    }
    console.log(this.array)

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
