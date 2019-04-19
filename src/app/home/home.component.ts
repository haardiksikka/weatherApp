import { Component, OnInit } from '@angular/core';

import { WeatherdataService } from '../weatherdata.service';

// interface DataResponse {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
search:string;
result : any
currentResult : any;
weatherArray= new Array();
  constructor(private data: WeatherdataService) { }


getWeatherInfo(city){
  this.search=city;
  this.data.getCurrentData(city).subscribe((d)=>{
        this.currentResult=d;      
  },
  (err)=>{
     this.currentResult=""
  })
  this.data.getData(city).subscribe((d)=>{
    this.result=d;
    this.weatherArray=[]
    for(let i=0;i<this.result.list.length;i++){
        this.weatherArray.push(this.result.list[i]);
        i=i+8;
    }
    
    console.log(this.weatherArray)
  },
  (err) => {
   
    this.weatherArray=[]
    alert('Location not found')
  }
    )
  
}
  ngOnInit() {
  }

}
