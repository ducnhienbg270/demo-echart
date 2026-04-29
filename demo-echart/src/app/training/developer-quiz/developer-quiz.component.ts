import { Component, OnInit } from '@angular/core';
import { DEVELOPER_QUESTIONS, QuizQuestion } from '../quiz-data.mock';

@Component({
  selector: 'app-developer-quiz',
  templateUrl: './developer-quiz.component.html',
  styleUrls: ['./developer-quiz.component.css']
})
export class DeveloperQuizComponent implements OnInit {
  // Expose String to template
  String = String;
  
  questions: QuizQuestion[] = DEVELOPER_QUESTIONS;

  currentQuestionIndex = 0;
  selectedAnswer: number | null = null;
  showExplanation = false;
  score = 0;
  answeredQuestions: boolean[] = [];
  quizCompleted = false;

  ngOnInit(): void {
    this.answeredQuestions = new Array(this.questions.length).fill(false);
  }

  get currentQuestion(): QuizQuestion {
    return this.questions[this.currentQuestionIndex];
  }

  get progress(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  selectAnswer(index: number): void {
    if (this.showExplanation) return;
    this.selectedAnswer = index;
  }

  submitAnswer(): void {
    if (this.selectedAnswer === null) return;

    this.showExplanation = true;
    
    if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
      this.score++;
    }
    
    this.answeredQuestions[this.currentQuestionIndex] = true;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
      this.showExplanation = false;
    } else {
      this.quizCompleted = true;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.selectedAnswer = null;
      this.showExplanation = false;
    }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.showExplanation = false;
    this.score = 0;
    this.answeredQuestions = new Array(this.questions.length).fill(false);
    this.quizCompleted = false;
  }

  getScorePercentage(): number {
    return (this.score / this.questions.length) * 100;
  }

  getScoreGrade(): string {
    const percentage = this.getScorePercentage();
    if (percentage >= 90) return 'Excellent';
    if (percentage >= 80) return 'Very Good';
    if (percentage >= 70) return 'Good';
    if (percentage >= 60) return 'Pass';
    return 'Need More Practice';
  }
}

// Made with Bob
