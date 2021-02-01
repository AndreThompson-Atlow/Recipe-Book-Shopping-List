import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Description of Recipe',
      'https://cutt.ly/Ckpdyf5'
    ),
    new Recipe(
      'Test Recipe 2',
      'Description of Recipe 2',
      'https://cutt.ly/Ckpdyf5'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
