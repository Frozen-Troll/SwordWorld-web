import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DiceComponent } from './dice/dice.component';
import { CharacterCardComponent } from './character-card/character-card.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch:'full'},
  { path: 'dice', component: DiceComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'char', component: CharacterCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
