import { Component } from '@angular/core';

interface Certification {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: string;
  route: string;
  topics: string[];
}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  certifications: Certification[] = [
    {
      id: 'saa',
      title: 'AWS Solutions Architect Associate',
      description: 'Thiết kế và triển khai hệ thống phân tán trên AWS',
      icon: '🏗️',
      level: 'Associate',
      route: '/training/solutions-architect',
      topics: [
        'Design Resilient Architectures',
        'Design High-Performing Architectures',
        'Design Secure Applications',
        'Design Cost-Optimized Architectures'
      ]
    },
    {
      id: 'dva',
      title: 'AWS Developer Associate',
      description: 'Phát triển và bảo trì ứng dụng trên AWS',
      icon: '💻',
      level: 'Associate',
      route: '/training/developer',
      topics: [
        'Development with AWS Services',
        'Security',
        'Deployment',
        'Troubleshooting and Optimization'
      ]
    }
  ];

  studyResources = [
    {
      title: 'AWS Documentation',
      description: 'Tài liệu chính thức từ AWS',
      icon: '📚',
      link: 'https://docs.aws.amazon.com/'
    },
    {
      title: 'AWS Training',
      description: 'Khóa học miễn phí từ AWS',
      icon: '🎓',
      link: 'https://aws.amazon.com/training/'
    },
    {
      title: 'AWS Whitepapers',
      description: 'Tài liệu kỹ thuật chuyên sâu',
      icon: '📄',
      link: 'https://aws.amazon.com/whitepapers/'
    },
    {
      title: 'AWS FAQs',
      description: 'Câu hỏi thường gặp về các dịch vụ',
      icon: '❓',
      link: 'https://aws.amazon.com/faqs/'
    }
  ];
}

// Made with Bob