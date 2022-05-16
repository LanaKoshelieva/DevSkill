import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-crescente',
  templateUrl: './de-crescente.page.html',
  styleUrls: ['./de-crescente.page.scss'],
})
export class DeCrescentePage implements OnInit {

  input: number;
  array:number[] = [];
  risultato:string;
  tasca:string;

  constructor() { } 

  push(input)
  {
    console.log(input)
    this.array.push(+input);
    this.input = null;
    this.tasca = this.array.toString();
  }

  crescente(A:number[]):number[]
  { 
    console.log("crescente", A)
    for (let i=0; i< A.length-1; i++) 
    {
        for (let j=i+1; j< A.length; j++ )
        { 
            if (A[i] > A[j])
            {   
                let X = A[i];
                A[i] = A[j];
                A[j] = X;
            } 
        } 
    }
    this.risultato = A.toString();
    return A;
  }


  decrescente(A:number[]):number[]
  { 
    console.log("decrescente")
    for (let i=0; i< A.length-1; i++) 
    {
        for (let j=i+1; j< A.length; j++ )
        { 
            if (A[i] < A[j])
            {   
                let X = A[i];
                A[i] = A[j];
                A[j] = X;
            } 
        } 
    }
    this.risultato = A.toString();
    return A;
  }
  y

  ngOnInit() {
  }

}
