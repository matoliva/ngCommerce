import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {
  
  title: string;

  
  constructor() { }

  ngOnInit() {
  }

  onKeyPress() {
    if(!this.title) 
      return null;
    
    return this.title.toUpperCase();
  }
}
