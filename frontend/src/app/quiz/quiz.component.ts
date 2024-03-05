import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {

  public listaquestoes: any = [];
  public questaocorrente: number = 0;
  public pontuacao: number = 0;
  public progress: string = "0";

  constructor(private questionsService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionsService.getQuestionJson().subscribe(res => {
      this.listaquestoes = res.questions;
    })

  }
  nextQuestion() {
    this.questaocorrente++;
    this.progress = ((((this.questaocorrente)+1) / this.listaquestoes.length) *100).toString();
    
  }
  previousQuestion() {
    this.questaocorrente--;
    this.progress = ((((this.questaocorrente)+1) / this.listaquestoes.length) *100).toString();
    if (this.questaocorrente ===0){
      this.progress = "0";
    }

  }

}
