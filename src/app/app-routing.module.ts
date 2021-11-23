import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCharactersComponent } from './components/all-characters/all-characters.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersTableComponent } from './components/characters-table/characters-table.component';


const routes: Routes = [

  // Implements Routes for project
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: CharacterDetailComponent,
  },
  {
    path: 'character-search',
    component: CharacterSearchComponent
  },
  {
    path: 'all-character',
    component: AllCharactersComponent
  },
  {
    path: 'characters-table',
    component: CharactersTableComponent
  },

  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo: 'home',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
