import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  movieList = [
    {
      name:"taxidriver",
      dir:"martin",
      cast:"robertdinero"
    },
    {
      name:"wall street",
      dir:"martin",
      cast:"di caprio"
    },
    {
      name:"gone girl",
      dir:"david fincher",
      cast:"ben affleck"
    },
    {
      name:"vettaiyadu vilayadu",
      dir:"gvm",
      cast:"kamalhassan"
    }
  ];
  clickedMovie ={name:"",dir:"",cast:""}
  newMovie ={name:"",dir:"",cast:""}
  showFlag:boolean = false;
  showInsert:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showInsertOption(){
    this.showInsert = true;
  }
  view(index:number){
    this.showFlag = true;
    this.clickedMovie = this.movieList[index];
  }
  insert(){
    this.movieList.push(this.newMovie);
    this.showInsert = false;
    this.newMovie ={name:"",dir:"",cast:""}
  
  }
  delete(index:number){
    this.movieList.splice(index,1);
    this.showFlag = false;
  }
  dontShowInsert(){
    this.showInsert = false;
  }

}
