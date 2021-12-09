import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  fontSize = 14;
  fontSizeText = "";
  imgSrc:string = "../assets/img/1.jpg"
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
  changeUrl(){
    this.imgSrc ="../assets/img/2.jpg"
  }
  changeUrl1(){
    this.imgSrc ="../assets/img/1.jpg"
  }
}
