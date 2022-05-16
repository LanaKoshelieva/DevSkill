import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crescente',
  templateUrl: './crescente.page.html',
  styleUrls: ['./crescente.page.scss'],
})
export class CrescentePage implements OnInit {

  cresc:number = 0;
  
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

  click()
  {
    if(this.cresc == 0)
    {
      this.risultato = undefined;
    }
    else if(this.cresc == 1)
    {
      this.crescente(this.array);      
    }
    else if(this.cresc == 2)
    {
      this.decrescente(this.array);      
    }
  }

  // click()
  // {
  //   if(this.cresc == 0)
  //   {
  //     this.risultato = undefined;
  //   }
  //   else if(this.cresc == 1)
  //   {
  //     this.ordinaArray(this.array, true);      
  //   }
  //   else if(this.cresc == 2)
  //   {
  //     this.ordinaArray(this.array, false);      
  //   }
  // }

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

  ordinaArray (array:number[], crescente:boolean):void
{ 
    for (let i=0; i< array.length-1; i++) 
    {
        for (let j=i+1; j< array.length; j++ )
        { 
            if (!crescente)
            {
                if (array[i] < array[j])
                {   
                    let X = array[i];
                    array[i] = array[j];
                    array[j] = X;
                } 
            }
            else
            {   
                if (array[i] > array[j])
                {
                    let X = array[i];
                    array[i] = array[j];
                    array[j] = X;
                }
            }           
        } 
    }
    this.risultato = array.toString();
}

  ngOnInit() {
  }

}
