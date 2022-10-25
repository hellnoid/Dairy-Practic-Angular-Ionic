import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
recipes: Recipe[]=[];
  constructor(private recipeSer: RecipeServiceService) { }

  ngOnInit() {
    this.recipes=this.recipeSer.getRecipes();
  }

}
