import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipEditComponent } from './recipes/recip-edit/recip-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipes-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

// routes sind Java-Script Objekte, wobei jedes Objekt = 1 Route
const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch:'full'},
    { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipEditComponent }
    ]},
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
