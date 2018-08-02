import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  
  faStar = faStar;
  faStarHalf = faStarHalf;
  isFavorite: boolean;  


  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert("Works!");
  }
}
