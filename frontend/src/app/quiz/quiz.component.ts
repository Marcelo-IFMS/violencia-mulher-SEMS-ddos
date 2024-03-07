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
  public vetorPontuacao: any = [];
  public resultado: boolean = true;

  constructor(private questionsService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionsService.getQuestionJson().subscribe(res => {
      this.listaquestoes = res.questions;
    })

  }
  calcProgressBar() {
    this.progress = ((((this.questaocorrente) + 1) / this.listaquestoes.length) * 100).toString();
    if (this.questaocorrente === 0) {
      this.progress = "0";
    }
  }
  nextQuestion() {
    this.questaocorrente++;
    this.calcProgressBar();
    // this.progress = ((((this.questaocorrente) + 1) / this.listaquestoes.length) * 100).toString();
  }
  previousQuestion() {
    this.questaocorrente--;
    this.calcProgressBar();
  }
  addvetorPontuacao(pontos: any) {
    this.vetorPontuacao[this.questaocorrente] = pontos;
    this.pontuacao = this.vetorPontuacao.reduce((accumulator: any, value: any) => accumulator + value, 0);
    console.log(this.listaquestoes.length);
    console.log(this.questaocorrente);
    if (!(this.listaquestoes.length === this.questaocorrente+1)){
      this.nextQuestion();
    }else {
      this.resultado = true;
    }
    
  }
  resetQuiz(){
    this.pontuacao = 0;
    this.questaocorrente = 0;
    this.progress = "0";
    this.vetorPontuacao = [];
    this.resultado = false;
  }
}
