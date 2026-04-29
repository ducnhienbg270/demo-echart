import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { TradingComponent } from './trading/trading.component';
import { GamesComponent } from './games/games.component';
import { RedButtonComponent } from './games/red-button/red-button.component';
import { CookingGameComponent } from './games/cooking-game/cooking-game.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'map', component: MapComponent },
  { path: 'trading', component: TradingComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/red-button', component: RedButtonComponent },
  { path: 'games/cooking', component: CookingGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
