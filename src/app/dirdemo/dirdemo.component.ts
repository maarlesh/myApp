import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirdemo',
  templateUrl: './dirdemo.component.html',
  styleUrls: ['./dirdemo.component.css']
})
export class DirdemoComponent implements OnInit {
  show:boolean = true;
  movieList1 = ["raanjhana","godFather","taxidriver"];
  movieList2 = [{name:"taxidriver",dir:"martin"},{name:"raanjhana",dir:"anandLrai"},{name:"maanadu",dir:"vp"}];
  constructor() { }

  ngOnInit(): void {
  }
  showVal(){
    this.show = !this.show;
  }

}
