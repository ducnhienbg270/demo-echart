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
  },
  {
    id: 21,
    question: "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity. Which solution meets these requirements?",
    options: [
      "Use AWS DataSync to transfer data from each site to S3",
      "Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket",
      "Use AWS Direct Connect from each site to AWS",
      "Create an AWS Storage Gateway at each site to transfer data to S3"
    ],
    correctAnswer: 1,
    explanation: "S3 Transfer Acceleration uses Edge Locations to speed up content transfers to and from S3 by as much as 50-500%. It's ideal for long-distance transfers and works with multipart uploads for large files, minimizing operational complexity."
  },
  {
    id: 22,
    question: "A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture. What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?",
    options: [
      "Use Amazon EMR to analyze the logs",
      "Use Amazon Athena directly with Amazon S3 to run the queries as needed",
      "Use Amazon Redshift to load and analyze the logs",
      "Use AWS Glue to catalog and query the logs"
    ],
    correctAnswer: 1,
    explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. With minimal setup, you can point Athena at your data stored in S3 and begin using standard SQL to run ad-hoc queries and get results in seconds."
  },
  {
    id: 23,
    question: "A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations. Which solution meets these requirements with the LEAST amount of operational overhead?",
    options: [
      "Add an IAM policy to each user in the organization",
      "Add the aws:PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy",
      "Create an SCP to restrict access to the S3 bucket",
      "Add a bucket policy that lists all account IDs in the organization"
    ],
    correctAnswer: 1,
    explanation: "The aws:PrincipalOrgID global condition key simplifies specifying the Principal element in a resource-based policy. Instead of listing all account IDs, you can specify the organization ID in the Condition element to limit access to only users within the organization."
  },
  {
    id: 24,
    question: "An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet. Which solution will provide private network connectivity to Amazon S3?",
    options: [
      "Create a gateway VPC endpoint to the S3 bucket",
      "Create an interface VPC endpoint to the S3 bucket",
      "Use a NAT gateway to access the S3 bucket",
      "Use an internet gateway to access the S3 bucket"
    ],
    correctAnswer: 0,
    explanation: "A gateway VPC endpoint allows you to connect to Amazon S3 from your VPC without requiring an internet gateway or NAT device, and with no additional cost. Gateway endpoints provide private connectivity to S3 without using public IP addresses."
  },
  {
    id: 25,
    question: "A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time. What should a solutions architect propose to ensure users see all of their documents at once?",
    options: [
      "Copy data between the two EBS volumes using snapshots",
      "Configure the Application Load Balancer to use sticky sessions",
      "Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS",
      "Configure the Application Load Balancer to send requests to both instances simultaneously"
    ],
    correctAnswer: 2,
    explanation: "Amazon EFS provides scalability, availability, and shared access, allowing both EC2 instances to access and synchronize the documents seamlessly. Unlike EBS volumes which cannot be shared in real time across multiple instances, EFS allows both instances to access the same file system simultaneously."
  },
  {
    id: 26,
    question: "A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth. Which solution will meet these requirements?",
    options: [
      "Use AWS DataSync to transfer the data",
      "Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3",
      "Use AWS Direct Connect to transfer the data",
      "Use S3 Transfer Acceleration to upload the files"
    ],
    correctAnswer: 1,
    explanation: "AWS Snowball Edge can copy files at speeds up to 100Gbps. For 70TB, it takes less than 2 hours of transfer time. While it takes 4-6 working days to receive the device and 2-3 days to return it, it uses zero network bandwidth, making it ideal for large one-time migrations."
  },
  {
    id: 27,
    question: "A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?",
    options: [
      "Publish messages to Amazon Kinesis Data Streams with multiple consumers",
      "Publish messages to Amazon SQS with multiple consumers",
      "Publish messages to an Amazon SNS topic with Amazon SQS subscriptions",
      "Publish messages to an Amazon SNS topic with multiple Amazon SQS subscriptions. Configure the consumer applications to process the messages from the queues"
    ],
    correctAnswer: 3,
    explanation: "SNS with multiple SQS subscriptions provides fan-out capability to deliver messages to multiple consumers. Each SQS queue can have a filter policy to receive only relevant messages. This architecture decouples producers from consumers and scales to handle high message volumes."
  },
  {
    id: 28,
    question: "A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability. How should a solutions architect design the architecture to meet these requirements?",
    options: [
      "Configure an Amazon EC2 instance as the primary server. Use Amazon EC2 instances in an Auto Scaling group for compute nodes",
      "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue",
      "Configure an Amazon SNS topic to distribute jobs. Use Amazon EC2 instances in an Auto Scaling group as subscribers",
      "Configure AWS Lambda functions to process the jobs. Use Amazon EventBridge to distribute the jobs"
    ],
    correctAnswer: 1,
    explanation: "Using SQS as a job queue decouples the architecture. EC2 instances in an Auto Scaling group can process jobs from the queue. Scaling based on queue depth allows the system to adapt to variable workloads, scaling out when messages increase and scaling in when they decrease."
  },
  {
    id: 29,
    question: "A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed. The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues. Which solution will meet these requirements?",
    options: [
      "Use AWS DataSync to migrate data to Amazon S3. Create an S3 Lifecycle policy",
      "Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days",
      "Create an Amazon FSx for Windows File Server file system to extend storage",
      "Install a utility on the file server to monitor file access and move files to Amazon S3 Glacier"
    ],
    correctAnswer: 1,
    explanation: "Amazon S3 File Gateway provides a hybrid cloud storage solution, integrating on-premises environments with cloud storage. Files written to the file share are automatically saved as S3 objects. S3 Lifecycle policies can transition objects to Glacier Deep Archive for rarely accessed files, addressing both storage capacity and lifecycle management."
  },
  {
    id: 30,
    question: "A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received. Which solution will meet these requirements?",
    options: [
      "Use an API Gateway integration to send messages to an Amazon SQS standard queue",
      "Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing",
      "Use an API Gateway integration to publish messages to an Amazon SNS topic",
      "Use an API Gateway integration to send messages to AWS Step Functions"
    ],
    correctAnswer: 1,
    explanation: "Amazon SQS FIFO (First-In-First-Out) queues ensure that messages are processed exactly once and in the exact order they are sent. The FIFO queue can trigger a Lambda function to process orders, maintaining the order of processing."
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
