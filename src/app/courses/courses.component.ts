import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  title = "List of courses";
  courses;
  email = "oliva@mati.com";
  money = "1200";
  day = new Date(2018,2,2);
  
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  /*onSave(event) {
    console.log("was clicked", event);
  }*/

  onKeyUp() {
    console.log(this.email);
  }
  

  ngOnInit() {
  }

}
