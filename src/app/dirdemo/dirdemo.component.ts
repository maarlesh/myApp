import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirdemo',
  templateUrl: './dirdemo.component.html',
  styleUrls: ['./dirdemo.component.css']
})
export class DirdemoComponent implements OnInit {
  show:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  showVal(){
    this.show = !this.show;
  }

}
