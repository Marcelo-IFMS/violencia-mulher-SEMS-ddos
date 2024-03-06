import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { QuizComponent } from './quiz/quiz.component';
import { LegislacaoComponent } from './legislacao/legislacao.component';

const routes: Routes = [
  {path: '',     component: HomeComponent},
  {path:'informacoes', component: InfoComponent},
  {path:'quiz', component: QuizComponent},
  {path:'legislacao', component: LegislacaoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
