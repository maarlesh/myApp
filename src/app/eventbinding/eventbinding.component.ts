import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  fontSize = 14;
  fontSizeText = "";
  constructor() { }

  ngOnInit(): void {
  }
  hi(){
    alert("you are baited");
  }
  increaseSize(){
    this.fontSize = this.fontSize +2 ;
    this.fontSizeText = this.fontSize+"px";
  }
  decreaseSize(){
    this.fontSize = this.fontSize -2 ;
    this.fontSizeText = this.fontSize+"px";
  }
}
