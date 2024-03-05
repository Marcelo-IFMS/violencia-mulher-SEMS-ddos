import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  pg1 = true;
  pg2 = false;
  pg(pgNumber: any) {
    if (pgNumber == 1) {
      console.log("1");
      this.pg1 = true;
      this.pg2 = false;
    } 
    if (pgNumber == 2) {
      console.log("2");
      this.pg1 = false;
      this.pg2 = true;
    }

  }

}
