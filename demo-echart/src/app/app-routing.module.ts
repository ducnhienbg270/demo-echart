import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradingComponent } from './trading/trading.component';
import { PricesComponent } from './prices/prices.component';
import { GamesComponent } from './games/games.component';
import { RedButtonComponent } from './games/red-button/red-button.component';
import { CookingGameComponent } from './games/cooking-game/cooking-game.component';
import { PuzzleGameComponent } from './games/puzzle-game/puzzle-game.component';
import { FightingGameComponent } from './games/fighting-game/fighting-game.component';
import { ShootingGameComponent } from './games/shooting-game/shooting-game.component';
import { TrainingComponent } from './training/training.component';
import { SolutionsArchitectQuizComponent } from './training/solutions-architect-quiz/solutions-architect-quiz.component';
import { DeveloperQuizComponent } from './training/developer-quiz/developer-quiz.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trading', component: TradingComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/red-button', component: RedButtonComponent },
  { path: 'games/cooking', component: CookingGameComponent },
  { path: 'games/puzzle', component: PuzzleGameComponent },
  { path: 'games/fighting', component: FightingGameComponent },
  { path: 'games/shooting', component: ShootingGameComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'training/solutions-architect', component: SolutionsArchitectQuizComponent },
  { path: 'training/developer', component: DeveloperQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
