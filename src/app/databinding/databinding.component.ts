import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  name:string = "bububbu";
  dt:Date = new Date();  
  constructor() { 
    setInterval(()=>{this.dt=new Date();},1000);
  }

  ngOnInit(): void {
  }
 

}
