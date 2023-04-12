import { Component,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  productsArray :any
  products:any
constructor(private httpClient: HttpClient ) {}
ngOnInit(): void {
  // fetch('src/assets/Accountsummary.json').then(res => res.json())
  // .then(jsonData => {
  //   console.log(jsonData)
  //   this.productsArray = jsonData;
  // });
  this.httpClient.get("./assets/Accountsummary.json").subscribe(data =>{
    console.log(data);
    this.products = data;
  })
}
}

