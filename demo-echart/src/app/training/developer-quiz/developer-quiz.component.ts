import { Component, OnInit } from '@angular/core';
import { DEVELOPER_TOPICS, QuizQuestion, QuizTopic } from '../quiz-data.mock';

@Component({
  selector: 'app-developer-quiz',
  templateUrl: './developer-quiz.component.html',
  styleUrls: ['./developer-quiz.component.css']
})
export class DeveloperQuizComponent implements OnInit {
  // Expose String to template
  String = String;
  
  // Topic management
  topics: QuizTopic[] = DEVELOPER_TOPICS;
  selectedTopic: QuizTopic = DEVELOPER_TOPICS[0]; // Default to 'All Topics'
  showTopicMenu = true;
  
  questions: QuizQuestion[] = [];

  currentQuestionIndex = 0;
  selectedAnswer: number | null = null;
  showExplanation = false;
  score = 0;
  answeredQuestions: boolean[] = [];
  quizCompleted = false;

  ngOnInit(): void {
    // Don't initialize questions yet, wait for topic selection
  }

  selectTopic(topic: QuizTopic): void {
    this.selectedTopic = topic;
    this.questions = [...topic.questions]; // Create a copy
    this.showTopicMenu = false;
    this.resetQuiz();
  }

  backToTopicMenu(): void {
    this.showTopicMenu = true;
    this.resetQuiz();
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.showExplanation = false;
    this.score = 0;
    this.answeredQuestions = new Array(this.questions.length).fill(false);
    this.quizCompleted = false;
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
    this.resetQuiz();
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
