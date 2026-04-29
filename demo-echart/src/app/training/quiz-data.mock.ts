export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const SOLUTIONS_ARCHITECT_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "A company needs to store data that will be accessed frequently for the first 30 days, then infrequently for the next 60 days, and rarely after that. Which S3 storage class combination is most cost-effective?",
    options: [
      "S3 Standard → S3 Standard-IA → S3 Glacier",
      "S3 Standard → S3 One Zone-IA → S3 Glacier Deep Archive",
      "S3 Intelligent-Tiering only",
      "S3 Standard-IA → S3 Glacier → S3 Glacier Deep Archive"
    ],
    correctAnswer: 0,
    explanation: "S3 Standard for frequent access (30 days), S3 Standard-IA for infrequent access (60 days), and S3 Glacier for archival provides the most cost-effective solution with appropriate retrieval times."
  },
  {
    id: 2,
    question: "An application running on EC2 instances needs to access S3 buckets securely without using access keys. What is the best practice?",
    options: [
      "Store access keys in environment variables",
      "Use IAM roles attached to EC2 instances",
      "Embed access keys in the application code",
      "Use S3 bucket policies only"
    ],
    correctAnswer: 1,
    explanation: "IAM roles provide temporary credentials automatically rotated by AWS, eliminating the need to manage access keys and following AWS security best practices."
  },
  {
    id: 3,
    question: "A web application experiences unpredictable traffic spikes. Which combination provides the best scalability and cost optimization?",
    options: [
      "EC2 Reserved Instances behind an Application Load Balancer",
      "EC2 Auto Scaling with Application Load Balancer and CloudWatch alarms",
      "Multiple EC2 On-Demand instances in different AZs",
      "Single large EC2 instance with Elastic IP"
    ],
    correctAnswer: 1,
    explanation: "Auto Scaling automatically adjusts capacity based on demand, ALB distributes traffic, and CloudWatch monitors metrics to trigger scaling actions, providing both scalability and cost efficiency."
  },
  {
    id: 4,
    question: "A company needs to ensure their RDS database can survive an Availability Zone failure. What should they implement?",
    options: [
      "Enable automated backups",
      "Create read replicas in multiple regions",
      "Enable Multi-AZ deployment",
      "Use RDS snapshots"
    ],
    correctAnswer: 2,
    explanation: "Multi-AZ deployment automatically maintains a synchronous standby replica in a different AZ, providing automatic failover in case of AZ failure."
  },
  {
    id: 5,
    question: "An application needs to process messages asynchronously with guaranteed delivery and the ability to delay message processing. Which service is most appropriate?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon Kinesis",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "SQS provides reliable message queuing with guaranteed delivery, message retention, and delay queue features for asynchronous processing."
  },
  {
    id: 6,
    question: "A company wants to distribute content globally with low latency. Which AWS service should they use?",
    options: [
      "Amazon S3 Transfer Acceleration",
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "Elastic Load Balancing"
    ],
    correctAnswer: 2,
    explanation: "CloudFront is a CDN service that caches content at edge locations worldwide, providing low-latency access to users globally."
  },
  {
    id: 7,
    question: "An application needs to store session data that must be shared across multiple EC2 instances. Which service is most suitable?",
    options: [
      "Amazon EBS volumes",
      "Amazon EFS",
      "Amazon ElastiCache",
      "Amazon S3"
    ],
    correctAnswer: 2,
    explanation: "ElastiCache (Redis or Memcached) provides in-memory caching ideal for session storage with fast access and sharing across multiple instances."
  },
  {
    id: 8,
    question: "A company needs to analyze streaming data in real-time from thousands of IoT devices. Which service combination is most appropriate?",
    options: [
      "Amazon SQS → AWS Lambda → Amazon RDS",
      "Amazon Kinesis Data Streams → AWS Lambda → Amazon DynamoDB",
      "Amazon SNS → Amazon SQS → Amazon EC2",
      "AWS IoT Core → Amazon S3 → Amazon Athena"
    ],
    correctAnswer: 1,
    explanation: "Kinesis Data Streams handles high-throughput streaming data, Lambda processes it in real-time, and DynamoDB provides fast NoSQL storage for the results."
  },
  {
    id: 9,
    question: "An organization wants to enforce that all S3 buckets must have encryption enabled. What is the best approach?",
    options: [
      "Manually enable encryption on each bucket",
      "Use AWS Config rules to detect and remediate",
      "Create an IAM policy to deny unencrypted uploads",
      "Use S3 bucket policies on each bucket"
    ],
    correctAnswer: 1,
    explanation: "AWS Config rules can automatically detect non-compliant resources and trigger remediation actions, providing centralized compliance management."
  },
  {
    id: 10,
    question: "A database needs to handle millions of requests per second with single-digit millisecond latency. Which database service is most suitable?",
    options: [
      "Amazon RDS with read replicas",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    correctAnswer: 2,
    explanation: "DynamoDB is a fully managed NoSQL database designed for high-performance applications requiring single-digit millisecond latency at any scale."
  },
  {
    id: 11,
    question: "A company wants to migrate their on-premises VMware environment to AWS. Which service should they use?",
    options: [
      "AWS Server Migration Service",
      "AWS Database Migration Service",
      "VMware Cloud on AWS",
      "AWS Application Migration Service"
    ],
    correctAnswer: 2,
    explanation: "VMware Cloud on AWS allows running VMware workloads natively on AWS infrastructure without refactoring applications."
  },
  {
    id: 12,
    question: "An application needs to send notifications to multiple subscribers using different protocols (email, SMS, HTTP). Which service is most appropriate?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    correctAnswer: 1,
    explanation: "SNS is a pub/sub messaging service that supports multiple protocols and can fan out messages to multiple subscribers simultaneously."
  },
  {
    id: 13,
    question: "A company needs to run batch processing jobs that can be interrupted and resumed. Which EC2 pricing model is most cost-effective?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    correctAnswer: 2,
    explanation: "Spot Instances offer up to 90% discount and are ideal for fault-tolerant, flexible workloads that can handle interruptions."
  },
  {
    id: 14,
    question: "An application needs to store and query time-series data from IoT sensors. Which database is most suitable?",
    options: [
      "Amazon RDS PostgreSQL",
      "Amazon DynamoDB",
      "Amazon Timestream",
      "Amazon DocumentDB"
    ],
    correctAnswer: 2,
    explanation: "Amazon Timestream is purpose-built for time-series data, offering fast ingestion and query performance with automatic data lifecycle management."
  },
  {
    id: 15,
    question: "A company wants to implement disaster recovery with an RTO of 1 hour and RPO of 15 minutes. Which strategy is most appropriate?",
    options: [
      "Backup and Restore",
      "Pilot Light",
      "Warm Standby",
      "Multi-Site Active-Active"
    ],
    correctAnswer: 2,
    explanation: "Warm Standby maintains a scaled-down version of the production environment running, allowing quick scaling to meet RTO/RPO requirements."
  },
  {
    id: 16,
    question: "An application needs to execute code in response to HTTP requests without managing servers. Which service should be used?",
    options: [
      "Amazon EC2 with Auto Scaling",
      "AWS Lambda with API Gateway",
      "Amazon ECS with Fargate",
      "AWS Elastic Beanstalk"
    ],
    correctAnswer: 1,
    explanation: "Lambda with API Gateway provides serverless compute triggered by HTTP requests, eliminating server management and charging only for execution time."
  },
  {
    id: 17,
    question: "A company needs to ensure their VPC resources can communicate with on-premises resources securely. Which solution is most appropriate?",
    options: [
      "VPC Peering",
      "AWS VPN or AWS Direct Connect",
      "Internet Gateway",
      "NAT Gateway"
    ],
    correctAnswer: 1,
    explanation: "AWS VPN provides encrypted connectivity over the internet, while Direct Connect offers dedicated private connectivity to on-premises networks."
  },
  {
    id: 18,
    question: "An application needs to store objects larger than 5TB. Which storage service supports this requirement?",
    options: [
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "Amazon FSx"
    ],
    correctAnswer: 2,
    explanation: "Amazon S3 supports individual objects up to 5TB in size and is designed for storing and retrieving any amount of data."
  },
  {
    id: 19,
    question: "A company wants to analyze their AWS costs and receive recommendations for cost optimization. Which service should they use?",
    options: [
      "AWS CloudWatch",
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "AWS Budgets"
    ],
    correctAnswer: 2,
    explanation: "AWS Trusted Advisor provides cost optimization recommendations along with security, performance, and fault tolerance checks."
  },
  {
    id: 20,
    question: "An application needs to perform complex SQL queries on data stored in S3. Which service is most appropriate?",
    options: [
      "Amazon RDS",
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon EMR"
    ],
    correctAnswer: 1,
    explanation: "Amazon Athena allows running SQL queries directly on data in S3 without loading it into a database, using a serverless architecture."
  }
];

export const DEVELOPER_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "A developer needs to deploy a Node.js application quickly without managing infrastructure. Which service is most appropriate?",
    options: [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "Amazon ECS",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "Elastic Beanstalk automatically handles deployment, capacity provisioning, load balancing, and monitoring while allowing developers to focus on code."
  },
  {
    id: 2,
    question: "An application needs to store user credentials securely. Which service should be used?",
    options: [
      "AWS Systems Manager Parameter Store",
      "Amazon S3 with encryption",
      "AWS Secrets Manager",
      "Environment variables in Lambda"
    ],
    correctAnswer: 2,
    explanation: "AWS Secrets Manager is specifically designed for storing and rotating credentials, API keys, and other secrets with automatic rotation capabilities."
  },
  {
    id: 3,
    question: "A developer wants to test API changes without affecting production. What is the best approach using API Gateway?",
    options: [
      "Create a new API Gateway",
      "Use API Gateway stages",
      "Deploy to different regions",
      "Use different Lambda functions"
    ],
    correctAnswer: 1,
    explanation: "API Gateway stages allow deploying different versions of an API (dev, test, prod) with separate configurations and endpoints."
  },
  {
    id: 4,
    question: "An application needs to process uploaded images asynchronously. Which architecture is most suitable?",
    options: [
      "S3 → Lambda → DynamoDB",
      "EC2 → RDS → S3",
      "API Gateway → Lambda → S3",
      "CloudFront → S3 → Lambda"
    ],
    correctAnswer: 0,
    explanation: "S3 event notifications can trigger Lambda functions automatically when images are uploaded, which can then process and store metadata in DynamoDB."
  },
  {
    id: 5,
    question: "A developer needs to debug a Lambda function that's timing out. Which service provides the most detailed logs?",
    options: [
      "AWS X-Ray",
      "Amazon CloudWatch Logs",
      "AWS CloudTrail",
      "Amazon EventBridge"
    ],
    correctAnswer: 1,
    explanation: "CloudWatch Logs automatically captures all console output and logs from Lambda functions, providing detailed execution information."
  },
  {
    id: 6,
    question: "An application needs to implement user authentication with social identity providers. Which service should be used?",
    options: [
      "AWS IAM",
      "Amazon Cognito",
      "AWS Directory Service",
      "AWS SSO"
    ],
    correctAnswer: 1,
    explanation: "Amazon Cognito provides user authentication and authorization with support for social identity providers like Google, Facebook, and Amazon."
  },
  {
    id: 7,
    question: "A developer wants to implement CI/CD for their application. Which AWS service combination is most appropriate?",
    options: [
      "GitHub → Jenkins → EC2",
      "AWS CodeCommit → CodeBuild → CodeDeploy → CodePipeline",
      "GitLab → AWS Lambda → S3",
      "Bitbucket → Elastic Beanstalk"
    ],
    correctAnswer: 1,
    explanation: "AWS CodePipeline orchestrates the entire CI/CD workflow using CodeCommit (source), CodeBuild (build), and CodeDeploy (deployment)."
  },
  {
    id: 8,
    question: "An application needs to handle API requests that take longer than 30 seconds to process. What is the best solution?",
    options: [
      "Increase API Gateway timeout",
      "Use asynchronous processing with SQS and Lambda",
      "Use WebSockets",
      "Increase Lambda timeout to 15 minutes"
    ],
    correctAnswer: 1,
    explanation: "API Gateway has a 30-second timeout limit. For longer processing, use asynchronous patterns with SQS queuing the request and Lambda processing it."
  },
  {
    id: 9,
    question: "A developer needs to trace requests across multiple microservices. Which service should they use?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS X-Ray",
      "Amazon EventBridge"
    ],
    correctAnswer: 2,
    explanation: "AWS X-Ray provides end-to-end tracing of requests across distributed applications, showing the flow through different services."
  },
  {
    id: 10,
    question: "An application needs to store session state for a serverless API. Which solution is most cost-effective?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon S3"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB offers serverless, pay-per-request pricing with fast access times, making it ideal for session storage in serverless applications."
  },
  {
    id: 11,
    question: "A developer wants to run containers without managing servers. Which service should they use?",
    options: [
      "Amazon ECS with EC2",
      "Amazon ECS with Fargate",
      "Amazon EKS with EC2",
      "AWS Elastic Beanstalk"
    ],
    correctAnswer: 1,
    explanation: "AWS Fargate is a serverless compute engine for containers that removes the need to provision and manage servers."
  },
  {
    id: 12,
    question: "An application needs to send emails to users. Which service is most appropriate?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon SES",
      "AWS Lambda"
    ],
    correctAnswer: 2,
    explanation: "Amazon SES (Simple Email Service) is specifically designed for sending transactional and marketing emails at scale."
  },
  {
    id: 13,
    question: "A developer needs to implement rate limiting for their API. Which API Gateway feature should they use?",
    options: [
      "Usage Plans and API Keys",
      "Lambda Authorizers",
      "Resource Policies",
      "CORS Configuration"
    ],
    correctAnswer: 0,
    explanation: "API Gateway Usage Plans allow setting throttling limits and quotas per API key, implementing effective rate limiting."
  },
  {
    id: 14,
    question: "An application needs to process streaming data from mobile apps in real-time. Which service is most suitable?",
    options: [
      "Amazon SQS",
      "Amazon Kinesis Data Streams",
      "Amazon SNS",
      "AWS AppSync"
    ],
    correctAnswer: 1,
    explanation: "Kinesis Data Streams is designed for real-time processing of streaming data at scale from multiple sources."
  },
  {
    id: 15,
    question: "A developer wants to implement GraphQL APIs with real-time subscriptions. Which service should they use?",
    options: [
      "API Gateway REST API",
      "API Gateway WebSocket API",
      "AWS AppSync",
      "Amazon EventBridge"
    ],
    correctAnswer: 2,
    explanation: "AWS AppSync is a managed GraphQL service with built-in support for real-time subscriptions and offline sync."
  },
  {
    id: 16,
    question: "An application needs to execute code on a schedule. Which service combination is most appropriate?",
    options: [
      "CloudWatch Events → Lambda",
      "EC2 with cron jobs",
      "Step Functions → Lambda",
      "SQS → Lambda"
    ],
    correctAnswer: 0,
    explanation: "CloudWatch Events (EventBridge) can trigger Lambda functions on a schedule using cron or rate expressions."
  },
  {
    id: 17,
    question: "A developer needs to implement blue/green deployments for their application. Which service supports this natively?",
    options: [
      "AWS CodeDeploy",
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All three services support blue/green deployments: CodeDeploy for EC2/Lambda, CloudFormation with change sets, and Elastic Beanstalk with environment swapping."
  },
  {
    id: 18,
    question: "An application needs to store and retrieve JSON documents with flexible schema. Which database is most appropriate?",
    options: [
      "Amazon RDS MySQL",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB is a NoSQL database that natively stores JSON documents and supports flexible schemas without predefined structure."
  },
  {
    id: 19,
    question: "A developer wants to implement request validation before invoking Lambda. Where should this be configured?",
    options: [
      "In Lambda function code",
      "In API Gateway request validators",
      "In CloudFront",
      "In Application Load Balancer"
    ],
    correctAnswer: 1,
    explanation: "API Gateway request validators can validate request parameters and body before invoking the backend, reducing Lambda invocations and costs."
  },
  {
    id: 20,
    question: "An application needs to coordinate multiple Lambda functions in a workflow. Which service should be used?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions",
      "Amazon EventBridge"
    ],
    correctAnswer: 2,
    explanation: "AWS Step Functions orchestrates multiple Lambda functions and other AWS services into serverless workflows with error handling and retry logic."
  }
];

// Made with Bob
