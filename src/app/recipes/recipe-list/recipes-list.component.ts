import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes-models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe Test', 'It is a test', 'URL test')
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
