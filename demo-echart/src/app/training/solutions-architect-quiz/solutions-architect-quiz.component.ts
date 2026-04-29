import { Component, OnInit } from '@angular/core';
import { SOLUTIONS_ARCHITECT_QUESTIONS, QuizQuestion } from '../quiz-data.mock';

@Component({
  selector: 'app-solutions-architect-quiz',
  templateUrl: './solutions-architect-quiz.component.html',
  styleUrls: ['./solutions-architect-quiz.component.css']
})
export class SolutionsArchitectQuizComponent implements OnInit {
  // Expose String to template
  String = String;
  
  questions: QuizQuestion[] = SOLUTIONS_ARCHITECT_QUESTIONS;
  
  // Remove old questions array
  /*
  questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'Một công ty cần lưu trữ dữ liệu với khả năng truy cập ngay lập tức và độ bền cao. Dịch vụ nào phù hợp nhất?',
      options: [
        'Amazon S3 Standard',
        'Amazon Glacier',
        'Amazon EBS',
        'Amazon EFS'
      ],
      correctAnswer: 0,
      explanation: 'Amazon S3 Standard cung cấp khả năng truy cập ngay lập tức với độ bền 99.999999999% (11 nines) và là lựa chọn tốt nhất cho dữ liệu cần truy cập thường xuyên.',
      category: 'Storage'
    },
    {
      id: 2,
      question: 'Để đảm bảo high availability cho ứng dụng web, bạn nên deploy EC2 instances ở đâu?',
      options: [
        'Một Availability Zone',
        'Nhiều Availability Zones',
        'Một Region',
        'Edge Locations'
      ],
      correctAnswer: 1,
      explanation: 'Deploy EC2 instances across nhiều Availability Zones đảm bảo ứng dụng vẫn hoạt động nếu một AZ gặp sự cố, đây là best practice cho high availability.',
      category: 'High Availability'
    },
    {
      id: 3,
      question: 'Dịch vụ nào giúp phân phối traffic đến nhiều EC2 instances?',
      options: [
        'Amazon Route 53',
        'AWS Direct Connect',
        'Elastic Load Balancer',
        'Amazon CloudFront'
      ],
      correctAnswer: 2,
      explanation: 'Elastic Load Balancer (ELB) tự động phân phối incoming traffic đến nhiều targets như EC2 instances, containers, và IP addresses.',
      category: 'Load Balancing'
    },
    {
      id: 4,
      question: 'Để tự động scale EC2 instances dựa trên demand, bạn sử dụng dịch vụ nào?',
      options: [
        'AWS Lambda',
        'Amazon EC2 Auto Scaling',
        'AWS Elastic Beanstalk',
        'Amazon ECS'
      ],
      correctAnswer: 1,
      explanation: 'Amazon EC2 Auto Scaling giúp tự động thêm hoặc xóa EC2 instances dựa trên conditions bạn định nghĩa, đảm bảo đủ capacity để handle load.',
      category: 'Scalability'
    },
    {
      id: 5,
      question: 'Database nào phù hợp nhất cho workload với unpredictable traffic patterns?',
      options: [
        'Amazon RDS',
        'Amazon DynamoDB',
        'Amazon Redshift',
        'Amazon Aurora'
      ],
      correctAnswer: 1,
      explanation: 'Amazon DynamoDB là fully managed NoSQL database với auto-scaling capability, phù hợp cho workloads với unpredictable traffic patterns.',
      category: 'Database'
    },
    {
      id: 6,
      question: 'Để encrypt data at rest trong S3, bạn nên sử dụng?',
      options: [
        'AWS KMS',
        'AWS CloudHSM',
        'AWS Certificate Manager',
        'AWS Secrets Manager'
      ],
      correctAnswer: 0,
      explanation: 'AWS Key Management Service (KMS) là dịch vụ managed để tạo và quản lý encryption keys, thường được sử dụng với S3 Server-Side Encryption.',
      category: 'Security'
    },
    {
      id: 7,
      question: 'Dịch vụ nào cung cấp CDN (Content Delivery Network) của AWS?',
      options: [
        'Amazon S3',
        'Amazon CloudFront',
        'AWS Global Accelerator',
        'Amazon Route 53'
      ],
      correctAnswer: 1,
      explanation: 'Amazon CloudFront là CDN service giúp deliver content với low latency bằng cách cache content tại edge locations gần users.',
      category: 'Content Delivery'
    },
    {
      id: 8,
      question: 'Để monitor và log API calls trong AWS account, bạn sử dụng?',
      options: [
        'Amazon CloudWatch',
        'AWS CloudTrail',
        'AWS Config',
        'Amazon Inspector'
      ],
      correctAnswer: 1,
      explanation: 'AWS CloudTrail records API calls và events trong AWS account, cung cấp audit trail cho compliance và security analysis.',
      category: 'Monitoring'
    },
    {
      id: 9,
      question: 'Storage class nào của S3 có cost thấp nhất cho archival data?',
      options: [
        'S3 Standard',
        'S3 Intelligent-Tiering',
        'S3 Glacier Deep Archive',
        'S3 One Zone-IA'
      ],
      correctAnswer: 2,
      explanation: 'S3 Glacier Deep Archive là storage class có cost thấp nhất, phù hợp cho data cần lưu trữ lâu dài (7-10 years) và hiếm khi truy cập.',
      category: 'Cost Optimization'
    },
    {
      id: 10,
      question: 'Để implement disaster recovery với RTO/RPO thấp, strategy nào phù hợp nhất?',
      options: [
        'Backup and Restore',
        'Pilot Light',
        'Warm Standby',
        'Multi-Site Active-Active'
      ],
      correctAnswer: 3,
      explanation: 'Multi-Site Active-Active strategy cung cấp RTO/RPO thấp nhất vì có full production environment running ở nhiều regions, nhưng cost cao nhất.',
      category: 'Disaster Recovery'
    }
  ];
  */

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