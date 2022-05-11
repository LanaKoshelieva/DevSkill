import { Component, Input, OnInit, Output } from '@angular/core';
import { InputConverterComponent } from 'src/app/components/input-converter/input-converter.component';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {

  
  @Input() module1:any = "lolo";
  @Input() module2:any = "lala";
  
  reset(event:any):void {
     
    if (event.type == "click") 
    {

    }
    
    console.log("reset");
    let conferma:boolean = confirm ("Do you really want to reset the data?");

    if (conferma == true) {
      console.log("true")
      this.module1.reset();
      this.module2.reset();
    }    
  }

  constructor() { }

  ngOnInit() {
  }

}
