export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizTopic {
  id: string;
  name: string;
  icon: string;
  description: string;
  questions: QuizQuestion[];
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

// ============================================
// AWS LAMBDA QUESTIONS - Developer Associate
// ============================================
export const LAMBDA_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the maximum execution timeout for an AWS Lambda function?",
    options: [
      "5 minutes",
      "10 minutes",
      "15 minutes",
      "30 minutes"
    ],
    correctAnswer: 2,
    explanation: "AWS Lambda functions can run for a maximum of 15 minutes (900 seconds). If your function needs more time, consider using AWS Step Functions or breaking it into smaller functions."
  },
  {
    id: 2,
    question: "A Lambda function needs to access resources in a VPC. What happens to the function's internet access?",
    options: [
      "It maintains internet access automatically",
      "It loses internet access unless a NAT Gateway is configured",
      "It can only access VPC resources, never the internet",
      "It requires an Internet Gateway in the VPC"
    ],
    correctAnswer: 1,
    explanation: "When a Lambda function is configured to access VPC resources, it loses direct internet access. To access both VPC resources and the internet, you need to configure a NAT Gateway in a public subnet."
  },
  {
    id: 3,
    question: "What is the maximum memory allocation for a Lambda function?",
    options: [
      "3,008 MB",
      "5,120 MB",
      "10,240 MB",
      "15,360 MB"
    ],
    correctAnswer: 2,
    explanation: "AWS Lambda allows you to allocate up to 10,240 MB (10 GB) of memory to a function. CPU power scales proportionally with memory allocation."
  },
  {
    id: 4,
    question: "A developer wants to share code between multiple Lambda functions. What is the best approach?",
    options: [
      "Copy the code into each function",
      "Use Lambda Layers",
      "Store code in S3 and download it",
      "Use environment variables"
    ],
    correctAnswer: 1,
    explanation: "Lambda Layers allow you to package libraries, custom runtimes, or other dependencies separately and share them across multiple functions, reducing deployment package size and promoting code reuse."
  },
  {
    id: 5,
    question: "What is the maximum size of a Lambda deployment package (zipped) when uploaded directly?",
    options: [
      "10 MB",
      "50 MB",
      "100 MB",
      "250 MB"
    ],
    correctAnswer: 1,
    explanation: "The maximum deployment package size is 50 MB (zipped) for direct upload. For larger packages (up to 250 MB unzipped), you must upload to S3 first."
  },
  {
    id: 6,
    question: "A Lambda function is experiencing cold starts. Which strategy will NOT help reduce cold start time?",
    options: [
      "Increase memory allocation",
      "Use provisioned concurrency",
      "Minimize deployment package size",
      "Increase timeout value"
    ],
    correctAnswer: 3,
    explanation: "Increasing timeout value does not reduce cold start time; it only allows the function more time to execute. Cold starts are reduced by: increasing memory (faster CPU), using provisioned concurrency, minimizing package size, and keeping functions warm."
  },
  {
    id: 7,
    question: "How does Lambda handle concurrent executions by default?",
    options: [
      "One execution at a time per function",
      "Up to 1,000 concurrent executions per account per region",
      "Unlimited concurrent executions",
      "10 concurrent executions per function"
    ],
    correctAnswer: 1,
    explanation: "AWS Lambda provides a default concurrent execution limit of 1,000 per account per region. This is a soft limit that can be increased by requesting a quota increase from AWS Support."
  },
  {
    id: 8,
    question: "A Lambda function needs to process messages from an SQS queue. What is the recommended batch size for optimal performance?",
    options: [
      "1 message at a time",
      "10 messages (default)",
      "100 messages",
      "It depends on message size and processing time"
    ],
    correctAnswer: 3,
    explanation: "The optimal batch size depends on your specific use case, including message size, processing time, and memory requirements. Start with the default (10) and adjust based on performance metrics. Maximum batch size is 10,000 for standard queues."
  },
  {
    id: 9,
    question: "What happens when a Lambda function invoked synchronously throws an error?",
    options: [
      "Lambda automatically retries 3 times",
      "The error is returned to the caller immediately",
      "The function is placed in a dead-letter queue",
      "Lambda retries indefinitely"
    ],
    correctAnswer: 1,
    explanation: "For synchronous invocations (like API Gateway), errors are returned immediately to the caller. The caller is responsible for implementing retry logic. Automatic retries only occur for asynchronous invocations and stream-based invocations."
  },
  {
    id: 10,
    question: "A developer wants to test a Lambda function locally before deployment. Which tool is officially provided by AWS?",
    options: [
      "AWS Lambda Test Console",
      "AWS SAM CLI",
      "AWS Cloud9",
      "LocalStack"
    ],
    correctAnswer: 1,
    explanation: "AWS SAM (Serverless Application Model) CLI provides the 'sam local' command to test Lambda functions locally using Docker containers that simulate the Lambda execution environment."
  },
  {
    id: 11,
    question: "What is the purpose of Lambda's reserved concurrency setting?",
    options: [
      "To increase function performance",
      "To guarantee a specific number of concurrent executions and limit maximum concurrency",
      "To reduce cold starts",
      "To enable auto-scaling"
    ],
    correctAnswer: 1,
    explanation: "Reserved concurrency serves two purposes: it guarantees that a specific number of concurrent executions are always available for your function, and it sets a maximum limit to prevent the function from consuming all account concurrency."
  },
  {
    id: 12,
    question: "A Lambda function processes S3 events but occasionally fails. How can you capture failed events for later reprocessing?",
    options: [
      "Enable S3 versioning",
      "Configure a dead-letter queue (DLQ)",
      "Increase Lambda timeout",
      "Use S3 event notifications retry"
    ],
    correctAnswer: 1,
    explanation: "Configuring a dead-letter queue (SQS or SNS) allows Lambda to send failed event payloads for asynchronous invocations, enabling you to analyze failures and reprocess events later."
  },
  {
    id: 13,
    question: "What is the difference between Lambda's /tmp directory and Lambda Layers?",
    options: [
      "They are the same thing",
      "/tmp is for temporary runtime storage (up to 10GB), Layers are for shared code/dependencies",
      "/tmp is permanent storage, Layers are temporary",
      "Layers are faster than /tmp"
    ],
    correctAnswer: 1,
    explanation: "/tmp provides ephemeral storage (up to 10GB) during function execution for temporary files. Lambda Layers are for packaging and sharing code, libraries, and dependencies across functions. They serve different purposes."
  },
  {
    id: 14,
    question: "A Lambda function needs to call an external API that takes 2 minutes to respond. What is the best architecture?",
    options: [
      "Increase Lambda timeout to 3 minutes",
      "Use Lambda with Step Functions for orchestration",
      "Use synchronous invocation with retry logic",
      "Split the function into multiple smaller functions"
    ],
    correctAnswer: 1,
    explanation: "For long-running operations, use Step Functions to orchestrate the workflow. Step Functions can wait for external callbacks and handle long-running tasks better than Lambda alone, which has a 15-minute maximum timeout."
  },
  {
    id: 15,
    question: "How are environment variables encrypted in Lambda?",
    options: [
      "They are not encrypted",
      "Encrypted at rest using AWS managed keys by default",
      "Encrypted only if you enable it manually",
      "Encrypted in transit only"
    ],
    correctAnswer: 1,
    explanation: "Lambda environment variables are encrypted at rest using AWS managed keys by default. You can optionally use your own KMS keys for additional control. They are also encrypted in transit."
  },
  {
    id: 16,
    question: "What is Lambda's provisioned concurrency feature used for?",
    options: [
      "To reduce costs",
      "To eliminate cold starts by keeping functions initialized",
      "To increase maximum concurrent executions",
      "To enable auto-scaling"
    ],
    correctAnswer: 1,
    explanation: "Provisioned concurrency keeps a specified number of function instances initialized and ready to respond immediately, eliminating cold starts for those instances. This is useful for latency-sensitive applications."
  },
  {
    id: 17,
    question: "A Lambda function needs to access a database password. What is the most secure approach?",
    options: [
      "Store it in an environment variable",
      "Hardcode it in the function code",
      "Store it in AWS Secrets Manager and retrieve it at runtime",
      "Store it in an S3 bucket"
    ],
    correctAnswer: 2,
    explanation: "AWS Secrets Manager is designed for storing sensitive information like database credentials. It provides automatic rotation, encryption, and fine-grained access control. Lambda can retrieve secrets at runtime using the SDK."
  },
  {
    id: 18,
    question: "What is the maximum number of Lambda Layers that can be attached to a single function?",
    options: [
      "3 layers",
      "5 layers",
      "10 layers",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "A Lambda function can reference up to 5 layers at a time. The total unzipped size of the function and all layers cannot exceed 250 MB."
  },
  {
    id: 19,
    question: "A Lambda function invoked by API Gateway returns a 502 Bad Gateway error. What is the most likely cause?",
    options: [
      "API Gateway is down",
      "Lambda function timeout or unhandled exception",
      "Invalid API Gateway configuration",
      "DDoS attack"
    ],
    correctAnswer: 1,
    explanation: "A 502 error from API Gateway typically indicates that the Lambda function timed out, threw an unhandled exception, or returned an improperly formatted response. Check CloudWatch Logs for the actual error."
  },
  {
    id: 20,
    question: "How can you optimize Lambda function performance when accessing DynamoDB?",
    options: [
      "Increase Lambda memory allocation",
      "Use connection pooling and reuse SDK clients outside the handler",
      "Enable DynamoDB auto-scaling",
      "Use provisioned concurrency"
    ],
    correctAnswer: 1,
    explanation: "Initialize the AWS SDK client outside the Lambda handler function to reuse connections across invocations. This reduces latency and improves performance by avoiding connection overhead on each invocation."
  },
  {
    id: 21,
    question: "What is the purpose of Lambda's execution role?",
    options: [
      "To authenticate users calling the function",
      "To grant the function permissions to access AWS services",
      "To encrypt function code",
      "To enable VPC access"
    ],
    correctAnswer: 1,
    explanation: "The execution role is an IAM role that grants the Lambda function permissions to access AWS services and resources. It defines what the function can do, such as reading from S3, writing to DynamoDB, or publishing to SNS."
  },
  {
    id: 22,
    question: "A Lambda function processes Kinesis stream records. What happens if the function fails to process a batch?",
    options: [
      "The batch is discarded",
      "Lambda retries the entire batch until success or expiration",
      "Only failed records are retried",
      "The stream is paused"
    ],
    correctAnswer: 1,
    explanation: "For stream-based event sources (Kinesis, DynamoDB Streams), Lambda retries the entire batch until it succeeds or the data expires. This ensures in-order processing but can block the shard if errors persist."
  },
  {
    id: 23,
    question: "What is the best practice for handling secrets in Lambda functions?",
    options: [
      "Store in environment variables with encryption helpers",
      "Use AWS Secrets Manager or Systems Manager Parameter Store",
      "Embed in the deployment package",
      "Pass as function parameters"
    ],
    correctAnswer: 1,
    explanation: "AWS Secrets Manager and Systems Manager Parameter Store are purpose-built for managing secrets. They provide encryption, rotation, auditing, and fine-grained access control. Retrieve secrets at runtime rather than storing them in environment variables."
  },
  {
    id: 24,
    question: "How does Lambda handle function versioning?",
    options: [
      "Versions are automatically created on each deployment",
      "You must explicitly publish a version to create an immutable snapshot",
      "Only one version exists at a time",
      "Versions are created weekly"
    ],
    correctAnswer: 1,
    explanation: "Lambda versions are immutable snapshots of your function code and configuration. You must explicitly publish a version; otherwise, you're working with $LATEST (mutable). Versions enable safe deployments and rollbacks."
  },
  {
    id: 25,
    question: "What is the purpose of Lambda aliases?",
    options: [
      "To rename functions",
      "To create pointers to specific function versions and enable traffic shifting",
      "To reduce costs",
      "To improve performance"
    ],
    correctAnswer: 1,
    explanation: "Aliases are pointers to specific Lambda versions (e.g., 'prod' → version 3). They enable blue/green deployments by allowing weighted traffic shifting between versions and provide stable endpoints for clients."
  },
  {
    id: 26,
    question: "A Lambda function needs to process large files from S3. What is the recommended approach?",
    options: [
      "Download the entire file to /tmp and process it",
      "Use S3 Select to retrieve only needed data",
      "Increase Lambda memory to 10GB",
      "Use EC2 instead"
    ],
    correctAnswer: 1,
    explanation: "S3 Select allows you to retrieve only the subset of data you need using SQL expressions, reducing data transfer and processing time. For very large files, consider streaming or using services like AWS Glue."
  },
  {
    id: 27,
    question: "What is Lambda's SnapStart feature designed for?",
    options: [
      "Faster deployment",
      "Reducing cold start times for Java functions",
      "Automatic scaling",
      "Cost optimization"
    ],
    correctAnswer: 1,
    explanation: "Lambda SnapStart improves cold start performance for Java functions by up to 10x. It creates and caches a snapshot of the initialized execution environment, allowing faster function startup."
  },
  {
    id: 28,
    question: "How can you monitor Lambda function performance and errors?",
    options: [
      "Only through AWS Console",
      "CloudWatch Metrics, Logs, and X-Ray tracing",
      "Email notifications only",
      "Manual log file review"
    ],
    correctAnswer: 1,
    explanation: "Lambda integrates with CloudWatch for metrics (invocations, errors, duration) and logs (console output). AWS X-Ray provides distributed tracing to analyze performance and debug issues across services."
  },
  {
    id: 29,
    question: "What is the maximum payload size for synchronous Lambda invocations?",
    options: [
      "256 KB",
      "1 MB",
      "6 MB",
      "10 MB"
    ],
    correctAnswer: 2,
    explanation: "The maximum request and response payload size for synchronous invocations is 6 MB. For asynchronous invocations, the limit is 256 KB. For larger payloads, use S3 to store data and pass references."
  },
  {
    id: 30,
    question: "A Lambda function needs to fan out messages to multiple services. What is the best architecture?",
    options: [
      "Lambda → SQS → Multiple Lambdas",
      "Lambda → SNS → Multiple subscribers (SQS, Lambda, etc.)",
      "Lambda → Kinesis → Multiple Lambdas",
      "Multiple Lambda invocations from the source"
    ],
    correctAnswer: 1,
    explanation: "SNS provides native fan-out capability, allowing one message to be delivered to multiple subscribers (SQS queues, Lambda functions, HTTP endpoints, etc.) simultaneously. This is more efficient than manual fan-out."
  }
];

// ============================================
// AWS DYNAMODB QUESTIONS - Developer Associate
// ============================================
export const DYNAMODB_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the maximum size of an item in DynamoDB?",
    options: [
      "100 KB",
      "256 KB",
      "400 KB",
      "1 MB"
    ],
    correctAnswer: 2,
    explanation: "DynamoDB items have a maximum size of 400 KB, including both attribute names and values. This includes all attributes in the item."
  },
  {
    id: 2,
    question: "Which DynamoDB feature allows you to automatically delete expired items?",
    options: [
      "DynamoDB Streams",
      "Time To Live (TTL)",
      "Global Secondary Index",
      "DynamoDB Accelerator (DAX)"
    ],
    correctAnswer: 1,
    explanation: "Time To Live (TTL) allows you to define a per-item timestamp to determine when an item is no longer needed. DynamoDB automatically deletes expired items without consuming write throughput."
  },
  {
    id: 3,
    question: "What is the difference between a Local Secondary Index (LSI) and a Global Secondary Index (GSI)?",
    options: [
      "LSI can be created anytime, GSI must be created with the table",
      "LSI shares throughput with the table, GSI has its own throughput",
      "LSI is faster than GSI",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "LSI must be created when the table is created and shares the table's throughput. GSI can be created anytime and has its own provisioned throughput separate from the base table."
  },
  {
    id: 4,
    question: "A developer needs to read 10 items of 4 KB each from DynamoDB with strong consistency. How many Read Capacity Units (RCUs) are required?",
    options: [
      "10 RCUs",
      "20 RCUs",
      "40 RCUs",
      "80 RCUs"
    ],
    correctAnswer: 1,
    explanation: "Each strongly consistent read of up to 4 KB requires 1 RCU. For 10 items of 4 KB each: 10 items × 1 RCU = 10 RCUs. However, you need to round up each item to the nearest 4 KB, so 10 items × 2 RCUs (since 4KB rounds to 4KB = 1 RCU, but strong consistency doubles it) = 20 RCUs."
  },
  {
    id: 5,
    question: "What is DynamoDB Accelerator (DAX)?",
    options: [
      "A backup service for DynamoDB",
      "An in-memory cache for DynamoDB",
      "A migration tool for DynamoDB",
      "A monitoring service for DynamoDB"
    ],
    correctAnswer: 1,
    explanation: "DAX is a fully managed, in-memory cache for DynamoDB that delivers up to 10x performance improvement, reducing response times from milliseconds to microseconds."
  },
  {
    id: 6,
    question: "Which DynamoDB operation is most efficient for retrieving multiple items by their primary keys?",
    options: [
      "Scan",
      "Query",
      "BatchGetItem",
      "GetItem in a loop"
    ],
    correctAnswer: 2,
    explanation: "BatchGetItem retrieves multiple items from one or more tables using their primary keys in a single request, making it more efficient than multiple GetItem calls."
  },
  {
    id: 7,
    question: "What is the purpose of DynamoDB Streams?",
    options: [
      "To backup data to S3",
      "To capture item-level changes in near real-time",
      "To improve query performance",
      "To reduce storage costs"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Streams captures a time-ordered sequence of item-level modifications (create, update, delete) and stores them for up to 24 hours, enabling real-time processing and replication."
  },
  {
    id: 8,
    question: "A table has a partition key 'userId' and sort key 'timestamp'. Which query is most efficient?",
    options: [
      "Query with only sort key",
      "Query with only partition key",
      "Query with partition key and sort key condition",
      "Scan with filter expression"
    ],
    correctAnswer: 2,
    explanation: "Queries must specify the partition key and can optionally filter on the sort key. Querying with both partition key and sort key condition is most efficient as it narrows down the results."
  },
  {
    id: 9,
    question: "What happens when you exceed the provisioned throughput on a DynamoDB table?",
    options: [
      "Requests are queued automatically",
      "Requests are throttled and return ProvisionedThroughputExceededException",
      "The table is automatically scaled",
      "Requests are processed slowly"
    ],
    correctAnswer: 1,
    explanation: "When you exceed provisioned throughput, DynamoDB throttles requests and returns a ProvisionedThroughputExceededException. You should implement exponential backoff retry logic."
  },
  {
    id: 10,
    question: "Which DynamoDB capacity mode is best for unpredictable workloads?",
    options: [
      "Provisioned capacity mode",
      "On-demand capacity mode",
      "Reserved capacity mode",
      "Burst capacity mode"
    ],
    correctAnswer: 1,
    explanation: "On-demand capacity mode automatically scales to accommodate workload demands without capacity planning, making it ideal for unpredictable traffic patterns."
  },
  {
    id: 11,
    question: "What is the maximum number of Global Secondary Indexes (GSIs) per table?",
    options: [
      "5",
      "10",
      "20",
      "Unlimited"
    ],
    correctAnswer: 2,
    explanation: "DynamoDB allows up to 20 Global Secondary Indexes per table. Each GSI can have a different partition key and sort key from the base table."
  },
  {
    id: 12,
    question: "How does DynamoDB handle conditional writes?",
    options: [
      "They are not supported",
      "Using condition expressions that must evaluate to true",
      "Using transactions only",
      "Automatically with optimistic locking"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB supports conditional writes using condition expressions. The write only succeeds if the condition evaluates to true, enabling optimistic locking patterns."
  },
  {
    id: 13,
    question: "What is the difference between eventually consistent and strongly consistent reads?",
    options: [
      "Eventually consistent is faster and cheaper",
      "Strongly consistent always returns the latest data",
      "Eventually consistent may not reflect recent writes",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Eventually consistent reads are faster, cheaper (half the RCUs), but may not reflect recent writes. Strongly consistent reads always return the most up-to-date data but cost twice as much."
  },
  {
    id: 14,
    question: "A developer needs to update multiple items across multiple tables atomically. Which feature should they use?",
    options: [
      "BatchWriteItem",
      "DynamoDB Transactions",
      "DynamoDB Streams",
      "Conditional writes"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Transactions provide ACID properties, allowing you to perform coordinated, all-or-nothing changes across multiple items and tables."
  },
  {
    id: 15,
    question: "What is the purpose of a sparse index in DynamoDB?",
    options: [
      "To reduce storage costs",
      "To index only items that have the indexed attribute",
      "To improve query performance",
      "To enable full-text search"
    ],
    correctAnswer: 1,
    explanation: "A sparse index only includes items that have the indexed attribute. This is useful when you want to query a subset of items and reduce index storage costs."
  },
  {
    id: 16,
    question: "How can you implement pagination in DynamoDB queries?",
    options: [
      "Using OFFSET and LIMIT",
      "Using LastEvaluatedKey and ExclusiveStartKey",
      "Using page numbers",
      "Pagination is not supported"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB uses LastEvaluatedKey (returned in response) and ExclusiveStartKey (in next request) for pagination, allowing you to retrieve results in pages."
  },
  {
    id: 17,
    question: "What is the maximum size of a DynamoDB transaction?",
    options: [
      "10 items or 4 MB",
      "25 items or 4 MB",
      "100 items or 4 MB",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "A DynamoDB transaction can include up to 25 unique items or 4 MB of data, whichever comes first. This applies to both TransactWriteItems and TransactGetItems."
  },
  {
    id: 18,
    question: "Which operation is most cost-effective for retrieving all items from a large table?",
    options: [
      "Query",
      "Scan with parallel segments",
      "BatchGetItem",
      "GetItem in a loop"
    ],
    correctAnswer: 1,
    explanation: "For retrieving all items, Scan is necessary. Using parallel scans with multiple segments can significantly improve performance by distributing the workload."
  },
  {
    id: 19,
    question: "What is the purpose of projection expressions in DynamoDB?",
    options: [
      "To create new indexes",
      "To specify which attributes to retrieve",
      "To filter query results",
      "To sort results"
    ],
    correctAnswer: 1,
    explanation: "Projection expressions specify which attributes to retrieve from DynamoDB, reducing data transfer and costs by only returning the attributes you need."
  },
  {
    id: 20,
    question: "How does DynamoDB handle hot partitions?",
    options: [
      "Automatically splits partitions",
      "Throttles all requests",
      "Requires manual intervention",
      "Uses adaptive capacity to isolate hot partitions"
    ],
    correctAnswer: 3,
    explanation: "DynamoDB uses adaptive capacity to automatically isolate frequently accessed items to separate partitions, helping to prevent hot partition issues."
  },
  {
    id: 21,
    question: "What is the difference between PutItem and UpdateItem?",
    options: [
      "PutItem replaces the entire item, UpdateItem modifies specific attributes",
      "PutItem is faster than UpdateItem",
      "UpdateItem requires a condition expression",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "PutItem creates a new item or replaces an existing item entirely. UpdateItem modifies specific attributes of an existing item without affecting other attributes."
  },
  {
    id: 22,
    question: "Which DynamoDB feature allows you to replicate tables across multiple regions?",
    options: [
      "DynamoDB Streams",
      "Global Tables",
      "Cross-region replication",
      "Multi-region backup"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Global Tables provide fully managed, multi-region, multi-master replication with automatic conflict resolution and low-latency access."
  },
  {
    id: 23,
    question: "What is the maximum number of Local Secondary Indexes (LSIs) per table?",
    options: [
      "5",
      "10",
      "20",
      "Unlimited"
    ],
    correctAnswer: 0,
    explanation: "DynamoDB allows up to 5 Local Secondary Indexes per table. LSIs must be created when the table is created and share the same partition key as the base table."
  },
  {
    id: 24,
    question: "How can you implement optimistic locking in DynamoDB?",
    options: [
      "Using DynamoDB Transactions",
      "Using a version number attribute with conditional writes",
      "Using DynamoDB Streams",
      "It's not possible"
    ],
    correctAnswer: 1,
    explanation: "Optimistic locking is implemented using a version number attribute. Before updating, check that the version hasn't changed using a conditional write expression."
  },
  {
    id: 25,
    question: "What is the purpose of filter expressions in DynamoDB?",
    options: [
      "To reduce RCU consumption",
      "To filter results after the query/scan but before returning to client",
      "To create indexes",
      "To improve query performance"
    ],
    correctAnswer: 1,
    explanation: "Filter expressions are applied after the query/scan reads items but before returning results. They don't reduce RCU consumption but reduce data transfer to the client."
  },
  {
    id: 26,
    question: "Which attribute type is best for storing binary data in DynamoDB?",
    options: [
      "String (S)",
      "Number (N)",
      "Binary (B)",
      "List (L)"
    ],
    correctAnswer: 2,
    explanation: "The Binary (B) attribute type is designed for storing binary data such as images, compressed files, or encrypted data in DynamoDB."
  },
  {
    id: 27,
    question: "What happens to DynamoDB Streams records?",
    options: [
      "They are stored permanently",
      "They are stored for 24 hours",
      "They are stored for 7 days",
      "They are stored for 30 days"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Streams records are stored for 24 hours. After that, they are automatically deleted. You should process stream records within this time window."
  },
  {
    id: 28,
    question: "How can you implement a counter in DynamoDB?",
    options: [
      "Using PutItem with a new value",
      "Using UpdateItem with ADD action",
      "Using atomic counters with UpdateItem",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "DynamoDB supports atomic counters using UpdateItem with the ADD action, which atomically increments or decrements a numeric attribute without race conditions."
  },
  {
    id: 29,
    question: "What is the purpose of the ReturnValues parameter in DynamoDB operations?",
    options: [
      "To specify which attributes to return after the operation",
      "To enable transactions",
      "To improve performance",
      "To reduce costs"
    ],
    correctAnswer: 0,
    explanation: "ReturnValues specifies what data to return after write operations (NONE, ALL_OLD, UPDATED_OLD, ALL_NEW, UPDATED_NEW), useful for getting the item state before or after the update."
  },
  {
    id: 30,
    question: "Which DynamoDB feature provides point-in-time recovery?",
    options: [
      "DynamoDB Streams",
      "On-demand backups",
      "Point-in-time recovery (PITR)",
      "Global Tables"
    ],
    correctAnswer: 2,
    explanation: "Point-in-time recovery (PITR) provides continuous backups of your DynamoDB table data, allowing you to restore to any point in time within the last 35 days."
  }
];

// ============================================
// AWS API GATEWAY QUESTIONS - Developer Associate
// ============================================
export const API_GATEWAY_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the maximum timeout for API Gateway integration with Lambda?",
    options: [
      "15 seconds",
      "29 seconds",
      "30 seconds",
      "5 minutes"
    ],
    correctAnswer: 1,
    explanation: "API Gateway has a maximum integration timeout of 29 seconds. If your backend takes longer, you should use asynchronous patterns with SQS or Step Functions."
  },
  {
    id: 2,
    question: "Which API Gateway deployment type provides the lowest latency for API calls?",
    options: [
      "Edge-optimized API",
      "Regional API",
      "Private API",
      "All have the same latency"
    ],
    correctAnswer: 0,
    explanation: "Edge-optimized APIs use CloudFront edge locations to reduce latency for geographically distributed clients. Regional APIs are best when clients are in the same region."
  },
  {
    id: 3,
    question: "How can you implement request throttling in API Gateway?",
    options: [
      "Using Lambda function code",
      "Using usage plans and API keys",
      "Using CloudWatch alarms",
      "Throttling is not supported"
    ],
    correctAnswer: 1,
    explanation: "API Gateway usage plans allow you to configure throttling limits (rate and burst) and quotas for API keys, providing fine-grained control over API usage."
  },
  {
    id: 4,
    question: "What is the purpose of API Gateway stages?",
    options: [
      "To improve performance",
      "To manage different versions/environments of your API",
      "To reduce costs",
      "To enable caching"
    ],
    correctAnswer: 1,
    explanation: "Stages allow you to manage different versions of your API (dev, test, prod) with separate configurations, variables, and endpoints."
  },
  {
    id: 5,
    question: "Which authentication method is NOT supported by API Gateway?",
    options: [
      "AWS IAM",
      "Amazon Cognito User Pools",
      "Lambda Authorizers",
      "Active Directory Federation Services (ADFS)"
    ],
    correctAnswer: 3,
    explanation: "API Gateway supports IAM, Cognito User Pools, and Lambda Authorizers (custom). ADFS is not directly supported, though you could implement it via a Lambda Authorizer."
  },
  {
    id: 6,
    question: "What is the maximum payload size for API Gateway requests and responses?",
    options: [
      "1 MB",
      "6 MB",
      "10 MB",
      "50 MB"
    ],
    correctAnswer: 2,
    explanation: "API Gateway supports a maximum payload size of 10 MB for both requests and responses. For larger payloads, consider using S3 with presigned URLs."
  },
  {
    id: 7,
    question: "How can you enable CORS (Cross-Origin Resource Sharing) in API Gateway?",
    options: [
      "Configure CORS in Lambda function",
      "Enable CORS in API Gateway console and add OPTIONS method",
      "Use CloudFront distribution",
      "CORS is enabled by default"
    ],
    correctAnswer: 1,
    explanation: "Enable CORS in API Gateway by configuring CORS settings and adding an OPTIONS method to handle preflight requests with appropriate headers."
  },
  {
    id: 8,
    question: "What is the purpose of API Gateway mapping templates?",
    options: [
      "To transform request/response payloads between client and backend",
      "To map API keys to users",
      "To create API documentation",
      "To configure routing rules"
    ],
    correctAnswer: 0,
    explanation: "Mapping templates use Velocity Template Language (VTL) to transform request and response payloads, allowing you to modify data structure between client and backend."
  },
  {
    id: 9,
    question: "Which API Gateway integration type provides the lowest latency?",
    options: [
      "Lambda Proxy Integration",
      "Lambda Custom Integration",
      "HTTP Proxy Integration",
      "AWS Service Integration"
    ],
    correctAnswer: 2,
    explanation: "HTTP Proxy Integration passes requests directly to the backend HTTP endpoint with minimal processing, providing the lowest latency."
  },
  {
    id: 10,
    question: "How can you implement API versioning in API Gateway?",
    options: [
      "Using stages only",
      "Using custom domain names with base path mappings",
      "Using resource paths (e.g., /v1/, /v2/)",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "API Gateway supports multiple versioning strategies: stages for environment versions, custom domains with base paths for major versions, and resource paths for API versioning."
  },
  {
    id: 11,
    question: "What is the purpose of API Gateway caching?",
    options: [
      "To reduce backend load and improve response times",
      "To store API keys",
      "To backup API configurations",
      "To enable throttling"
    ],
    correctAnswer: 0,
    explanation: "API Gateway caching stores responses for a specified TTL, reducing backend calls and improving response times for repeated requests."
  },
  {
    id: 12,
    question: "Which HTTP status code should API Gateway return for successful Lambda execution with an error in business logic?",
    options: [
      "200 OK",
      "500 Internal Server Error",
      "502 Bad Gateway",
      "It depends on how Lambda returns the error"
    ],
    correctAnswer: 3,
    explanation: "With Lambda proxy integration, the status code depends on how your Lambda function returns the error. You control the status code in the Lambda response."
  },
  {
    id: 13,
    question: "What is a Lambda Authorizer (formerly Custom Authorizer)?",
    options: [
      "A Lambda function that validates API requests and returns IAM policies",
      "A service that manages Lambda permissions",
      "A tool for debugging Lambda functions",
      "A feature for Lambda versioning"
    ],
    correctAnswer: 0,
    explanation: "Lambda Authorizers are Lambda functions that perform custom authentication/authorization logic and return IAM policies to allow or deny API requests."
  },
  {
    id: 14,
    question: "How can you monitor API Gateway performance and errors?",
    options: [
      "CloudWatch Metrics and Logs",
      "AWS X-Ray",
      "Access Logging to S3 or CloudWatch Logs",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "API Gateway integrates with CloudWatch (metrics and logs), X-Ray (tracing), and supports access logging for comprehensive monitoring."
  },
  {
    id: 15,
    question: "What is the difference between REST API and HTTP API in API Gateway?",
    options: [
      "HTTP API is newer, cheaper, and faster but has fewer features",
      "REST API is deprecated",
      "HTTP API only supports HTTP methods",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "HTTP APIs are optimized for performance and cost (up to 71% cheaper), but REST APIs offer more features like usage plans, API keys, and request/response transformations."
  },
  {
    id: 16,
    question: "How can you implement request validation in API Gateway?",
    options: [
      "Using request validators with JSON Schema",
      "Only in Lambda function code",
      "Using CloudWatch alarms",
      "Validation is not supported"
    ],
    correctAnswer: 0,
    explanation: "API Gateway supports request validation using request validators that check request parameters and body against JSON Schema models before invoking the backend."
  },
  {
    id: 17,
    question: "What is the purpose of API Gateway stage variables?",
    options: [
      "To store configuration values that can differ between stages",
      "To define API versions",
      "To configure caching",
      "To set up throttling limits"
    ],
    correctAnswer: 0,
    explanation: "Stage variables are name-value pairs that can store configuration values (like Lambda function ARNs, endpoints) that differ between stages (dev, test, prod)."
  },
  {
    id: 18,
    question: "Which API Gateway feature allows you to transform error responses from Lambda?",
    options: [
      "Gateway Responses",
      "Mapping Templates",
      "Request Validators",
      "Lambda Authorizers"
    ],
    correctAnswer: 0,
    explanation: "Gateway Responses allow you to customize error responses (4xx, 5xx) returned by API Gateway, including status codes, headers, and body templates."
  },
  {
    id: 19,
    question: "How can you secure API Gateway endpoints?",
    options: [
      "IAM authentication",
      "Cognito User Pools",
      "Lambda Authorizers",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "API Gateway supports multiple security mechanisms: IAM for AWS service-to-service, Cognito for user authentication, and Lambda Authorizers for custom logic."
  },
  {
    id: 20,
    question: "What is the purpose of API Gateway resource policies?",
    options: [
      "To control who can invoke your API",
      "To define API structure",
      "To configure caching",
      "To set up monitoring"
    ],
    correctAnswer: 0,
    explanation: "Resource policies are JSON policy documents that control which principals (users, accounts, VPCs) can invoke your API, similar to S3 bucket policies."
  },
  {
    id: 21,
    question: "How does API Gateway handle WebSocket connections?",
    options: [
      "WebSocket APIs maintain persistent connections with callback URLs",
      "WebSocket is not supported",
      "Only through CloudFront",
      "Using REST API with long polling"
    ],
    correctAnswer: 0,
    explanation: "API Gateway WebSocket APIs maintain persistent connections and use callback URLs to send messages to connected clients, enabling real-time bidirectional communication."
  },
  {
    id: 22,
    question: "What is the default throttle limit for API Gateway?",
    options: [
      "1,000 requests per second with burst of 2,000",
      "5,000 requests per second with burst of 10,000",
      "10,000 requests per second with burst of 5,000",
      "Unlimited"
    ],
    correctAnswer: 2,
    explanation: "API Gateway has a default account-level limit of 10,000 requests per second (RPS) with a burst of 5,000 requests. These are soft limits that can be increased."
  },
  {
    id: 23,
    question: "How can you implement canary deployments in API Gateway?",
    options: [
      "Using stage variables",
      "Using canary settings in stage deployment",
      "Using Lambda aliases",
      "Canary deployments are not supported"
    ],
    correctAnswer: 1,
    explanation: "API Gateway supports canary deployments at the stage level, allowing you to route a percentage of traffic to a new deployment while keeping the rest on the current version."
  },
  {
    id: 24,
    question: "What is the purpose of API Gateway models?",
    options: [
      "To define the structure of request/response payloads using JSON Schema",
      "To create API documentation",
      "To configure routing",
      "To set up authentication"
    ],
    correctAnswer: 0,
    explanation: "Models define the structure and validation rules for request/response payloads using JSON Schema, enabling request validation and documentation generation."
  },
  {
    id: 25,
    question: "How can you implement rate limiting per API key in API Gateway?",
    options: [
      "Using Lambda function code",
      "Using usage plans with rate and burst limits",
      "Using CloudWatch alarms",
      "Rate limiting per key is not supported"
    ],
    correctAnswer: 1,
    explanation: "Usage plans allow you to configure rate limits (requests per second) and burst limits per API key, providing fine-grained throttling control."
  },
  {
    id: 26,
    question: "What is the difference between Lambda proxy integration and Lambda custom integration?",
    options: [
      "Proxy passes the entire request to Lambda; custom requires mapping templates",
      "Proxy is faster",
      "Custom is deprecated",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "Lambda proxy integration passes the entire request as-is to Lambda and expects a specific response format. Custom integration uses mapping templates to transform requests/responses."
  },
  {
    id: 27,
    question: "How can you enable detailed CloudWatch metrics for API Gateway?",
    options: [
      "Enable detailed metrics in stage settings",
      "Configure in Lambda function",
      "Use X-Ray",
      "Detailed metrics are always enabled"
    ],
    correctAnswer: 0,
    explanation: "Detailed CloudWatch metrics (per-method metrics) can be enabled in stage settings, providing granular monitoring at the method level (additional charges apply)."
  },
  {
    id: 28,
    question: "What is the purpose of API Gateway private endpoints?",
    options: [
      "To expose APIs only within a VPC using VPC endpoints",
      "To reduce costs",
      "To improve performance",
      "To enable caching"
    ],
    correctAnswer: 0,
    explanation: "Private APIs are accessible only from within a VPC using VPC endpoints (PrivateLink), providing secure access without internet exposure."
  },
  {
    id: 29,
    question: "How can you implement request/response data transformation in API Gateway?",
    options: [
      "Using mapping templates with VTL",
      "Using Lambda function code only",
      "Using CloudFront",
      "Transformation is not supported"
    ],
    correctAnswer: 0,
    explanation: "Mapping templates use Velocity Template Language (VTL) to transform request and response data, allowing you to modify structure, add/remove fields, and change formats."
  },
  {
    id: 30,
    question: "What is the maximum cache TTL (Time To Live) in API Gateway?",
    options: [
      "300 seconds (5 minutes)",
      "3600 seconds (1 hour)",
      "86400 seconds (24 hours)",
      "No maximum limit"
    ],
    correctAnswer: 1,
    explanation: "API Gateway cache TTL can be configured from 0 to 3600 seconds (1 hour). The default is 300 seconds (5 minutes)."
  }
];

// ============================================
// AWS IAM QUESTIONS - Developer Associate
// ============================================
export const IAM_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the best practice for managing AWS credentials in application code?",
    options: [
      "Hardcode credentials in the application",
      "Store credentials in environment variables",
      "Use IAM roles for EC2 instances or Lambda functions",
      "Store credentials in a configuration file"
    ],
    correctAnswer: 2,
    explanation: "IAM roles provide temporary credentials that are automatically rotated, eliminating the need to manage long-term credentials. This is the most secure approach."
  },
  {
    id: 2,
    question: "What is the difference between IAM users and IAM roles?",
    options: [
      "Users are for humans, roles are for AWS services",
      "Users have permanent credentials, roles provide temporary credentials",
      "Roles can be assumed by users, services, or applications",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "IAM users have permanent credentials (access keys), while roles provide temporary credentials. Roles can be assumed by users, AWS services, or applications from other accounts."
  },
  {
    id: 3,
    question: "What is the maximum number of IAM groups an IAM user can belong to?",
    options: [
      "5 groups",
      "10 groups",
      "20 groups",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "An IAM user can be a member of up to 10 IAM groups. This is a hard limit that cannot be increased."
  },
  {
    id: 4,
    question: "Which IAM policy type takes precedence when there's a conflict?",
    options: [
      "Allow always takes precedence",
      "Deny always takes precedence",
      "The most recently created policy",
      "Identity-based policies take precedence"
    ],
    correctAnswer: 1,
    explanation: "In IAM, an explicit Deny always takes precedence over any Allow. This is a fundamental principle of IAM policy evaluation."
  },
  {
    id: 5,
    question: "What is the purpose of IAM policy conditions?",
    options: [
      "To specify when a policy is active",
      "To add additional constraints to policy permissions",
      "To define policy versions",
      "To set policy expiration dates"
    ],
    correctAnswer: 1,
    explanation: "IAM policy conditions allow you to add fine-grained control by specifying circumstances under which permissions are granted (e.g., IP address, time, MFA status)."
  },
  {
    id: 6,
    question: "What is the maximum size of an IAM policy document?",
    options: [
      "2 KB",
      "6 KB",
      "10 KB",
      "20 KB"
    ],
    correctAnswer: 1,
    explanation: "IAM policy documents have a maximum size of 6,144 characters (6 KB). For larger policies, consider using multiple policies or policy conditions."
  },
  {
    id: 7,
    question: "What is an IAM instance profile?",
    options: [
      "A container for IAM roles that can be attached to EC2 instances",
      "A user profile for EC2 instances",
      "A security group configuration",
      "A network configuration for instances"
    ],
    correctAnswer: 0,
    explanation: "An instance profile is a container for an IAM role that you can attach to an EC2 instance, allowing the instance to assume the role and obtain temporary credentials."
  },
  {
    id: 8,
    question: "How can you enable MFA (Multi-Factor Authentication) for IAM users?",
    options: [
      "MFA is enabled by default",
      "Enable MFA in the IAM user's security credentials",
      "MFA can only be enabled for root users",
      "MFA requires AWS Support approval"
    ],
    correctAnswer: 1,
    explanation: "MFA can be enabled for individual IAM users through their security credentials settings. It's a best practice to enable MFA for all users, especially those with elevated privileges."
  },
  {
    id: 9,
    question: "What is the purpose of IAM Access Analyzer?",
    options: [
      "To analyze IAM user activity",
      "To identify resources shared with external entities",
      "To optimize IAM policies",
      "To monitor IAM costs"
    ],
    correctAnswer: 1,
    explanation: "IAM Access Analyzer helps identify resources (S3 buckets, IAM roles, etc.) that are shared with external entities, helping you understand and control external access."
  },
  {
    id: 10,
    question: "What is the difference between identity-based and resource-based policies?",
    options: [
      "Identity-based attach to users/roles, resource-based attach to resources",
      "Identity-based are more secure",
      "Resource-based policies are deprecated",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "Identity-based policies attach to IAM identities (users, groups, roles) and define what they can do. Resource-based policies attach to resources (S3, SQS) and define who can access them."
  },
  {
    id: 11,
    question: "What is the AWS Security Token Service (STS)?",
    options: [
      "A service for storing security tokens",
      "A service for creating temporary security credentials",
      "A service for managing IAM users",
      "A service for encrypting data"
    ],
    correctAnswer: 1,
    explanation: "AWS STS enables you to request temporary, limited-privilege credentials for IAM users or federated users. These credentials consist of access key ID, secret access key, and security token."
  },
  {
    id: 12,
    question: "What is the maximum duration for temporary credentials from STS AssumeRole?",
    options: [
      "1 hour",
      "12 hours",
      "24 hours",
      "7 days"
    ],
    correctAnswer: 1,
    explanation: "The maximum session duration for AssumeRole is 12 hours. The default is 1 hour, but you can configure it up to 12 hours in the role's settings."
  },
  {
    id: 13,
    question: "What is an IAM permission boundary?",
    options: [
      "A limit on the number of permissions",
      "A maximum set of permissions that an identity-based policy can grant",
      "A firewall rule for IAM",
      "A geographic restriction"
    ],
    correctAnswer: 1,
    explanation: "Permission boundaries set the maximum permissions that an identity-based policy can grant to an IAM entity. They don't grant permissions themselves but limit what can be granted."
  },
  {
    id: 14,
    question: "How can you grant cross-account access in AWS?",
    options: [
      "Share IAM user credentials",
      "Use IAM roles with trust policies",
      "Copy resources to the other account",
      "Cross-account access is not possible"
    ],
    correctAnswer: 1,
    explanation: "Cross-account access is achieved using IAM roles with trust policies that specify which accounts can assume the role. This is more secure than sharing credentials."
  },
  {
    id: 15,
    question: "What is the purpose of IAM policy variables?",
    options: [
      "To make policies dynamic based on request context",
      "To store policy versions",
      "To encrypt policy documents",
      "To compress large policies"
    ],
    correctAnswer: 0,
    explanation: "IAM policy variables (like ${aws:username}) allow you to create dynamic policies that adapt based on the request context, reducing the need for multiple similar policies."
  },
  {
    id: 16,
    question: "What is the AWS managed policy 'PowerUserAccess'?",
    options: [
      "Full access to all AWS services",
      "Full access except IAM and Organizations management",
      "Read-only access to all services",
      "Access to EC2 only"
    ],
    correctAnswer: 1,
    explanation: "PowerUserAccess provides full access to AWS services and resources, but does not allow management of users, groups, and policies in IAM or AWS Organizations."
  },
  {
    id: 17,
    question: "How can you enforce MFA for specific API operations?",
    options: [
      "MFA cannot be enforced for API operations",
      "Use IAM policy conditions with aws:MultiFactorAuthPresent",
      "Enable MFA in AWS Config",
      "Use CloudWatch alarms"
    ],
    correctAnswer: 1,
    explanation: "You can use the condition key 'aws:MultiFactorAuthPresent' in IAM policies to require MFA for specific operations, adding an extra layer of security."
  },
  {
    id: 18,
    question: "What is the difference between AWS managed policies and customer managed policies?",
    options: [
      "AWS managed are created by AWS, customer managed are created by you",
      "AWS managed policies are more secure",
      "Customer managed policies cost more",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "AWS managed policies are created and maintained by AWS. Customer managed policies are created and maintained by you, offering more flexibility and customization."
  },
  {
    id: 19,
    question: "What is the purpose of IAM credential reports?",
    options: [
      "To audit IAM user credentials and their status",
      "To generate new credentials",
      "To encrypt credentials",
      "To backup IAM configurations"
    ],
    correctAnswer: 0,
    explanation: "IAM credential reports list all IAM users and the status of their credentials (passwords, access keys, MFA devices), helping with security audits and compliance."
  },
  {
    id: 20,
    question: "What is the principle of least privilege in IAM?",
    options: [
      "Grant minimum permissions necessary to perform a task",
      "Grant all permissions by default",
      "Grant permissions only to administrators",
      "Grant permissions based on user seniority"
    ],
    correctAnswer: 0,
    explanation: "The principle of least privilege means granting only the minimum permissions necessary for users or services to perform their tasks, reducing security risks."
  },
  {
    id: 21,
    question: "How can you rotate IAM access keys?",
    options: [
      "Access keys cannot be rotated",
      "Create new keys, update applications, delete old keys",
      "AWS automatically rotates access keys",
      "Use AWS Key Management Service"
    ],
    correctAnswer: 1,
    explanation: "Access key rotation involves creating new keys, updating applications to use them, verifying functionality, and then deleting the old keys. This should be done regularly."
  },
  {
    id: 22,
    question: "What is an IAM service-linked role?",
    options: [
      "A role linked to a specific AWS service with predefined permissions",
      "A role for linking multiple services",
      "A deprecated role type",
      "A role for service accounts"
    ],
    correctAnswer: 0,
    explanation: "Service-linked roles are predefined by AWS services and include all permissions the service needs. They simplify setup and ensure services have necessary permissions."
  },
  {
    id: 23,
    question: "What is the maximum number of managed policies that can be attached to an IAM user?",
    options: [
      "5 policies",
      "10 policies",
      "20 policies",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "You can attach up to 10 managed policies (AWS managed or customer managed) to an IAM user, group, or role. This is a hard limit."
  },
  {
    id: 24,
    question: "What is IAM policy evaluation logic?",
    options: [
      "Allow by default, deny overrides",
      "Deny by default, explicit allow required, explicit deny overrides",
      "First policy wins",
      "Random selection"
    ],
    correctAnswer: 1,
    explanation: "IAM uses deny-by-default logic: all requests are denied by default, an explicit allow is required, and an explicit deny always overrides any allows."
  },
  {
    id: 25,
    question: "How can you delegate permissions to AWS services?",
    options: [
      "Share IAM user credentials",
      "Create IAM roles with trust policies for the service",
      "Use root account credentials",
      "Delegation is not possible"
    ],
    correctAnswer: 1,
    explanation: "Create IAM roles with trust policies that allow specific AWS services to assume the role. The service can then use the role's permissions to access resources."
  },
  {
    id: 26,
    question: "What is the purpose of IAM tags?",
    options: [
      "To organize and control access to IAM resources",
      "To encrypt IAM data",
      "To backup IAM configurations",
      "To monitor IAM costs"
    ],
    correctAnswer: 0,
    explanation: "IAM tags are key-value pairs that help organize IAM resources and can be used in policies for attribute-based access control (ABAC)."
  },
  {
    id: 27,
    question: "What is AWS Organizations Service Control Policy (SCP)?",
    options: [
      "A policy that sets permission boundaries for accounts in an organization",
      "A policy for organizing IAM users",
      "A policy for service configuration",
      "A policy for cost control"
    ],
    correctAnswer: 0,
    explanation: "SCPs are policies that specify the maximum permissions for accounts in an AWS Organization. They don't grant permissions but limit what can be done in member accounts."
  },
  {
    id: 28,
    question: "How can you test IAM policies before applying them?",
    options: [
      "IAM Policy Simulator",
      "CloudWatch Logs",
      "AWS Config",
      "Testing is not possible"
    ],
    correctAnswer: 0,
    explanation: "The IAM Policy Simulator allows you to test and troubleshoot IAM policies by simulating API calls and seeing whether they would be allowed or denied."
  },
  {
    id: 29,
    question: "What is the difference between inline policies and managed policies?",
    options: [
      "Inline are embedded in a single identity, managed can be attached to multiple identities",
      "Inline policies are more secure",
      "Managed policies are deprecated",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "Inline policies are embedded directly in a single user, group, or role. Managed policies are standalone and can be attached to multiple identities, making them more reusable."
  },
  {
    id: 30,
    question: "What is the purpose of IAM Access Advisor?",
    options: [
      "To show which services an IAM entity has accessed and when",
      "To create new IAM policies",
      "To encrypt IAM data",
      "To backup IAM configurations"
    ],
    correctAnswer: 0,
    explanation: "IAM Access Advisor shows service permissions granted to a user, group, or role and when those services were last accessed, helping you implement least privilege."
  }
];

// ============================================
// AWS SQS/SNS QUESTIONS - Developer Associate
// ============================================
export const SQS_SNS_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the maximum message size for Amazon SQS?",
    options: [
      "64 KB",
      "256 KB",
      "512 KB",
      "1 MB"
    ],
    correctAnswer: 1,
    explanation: "Amazon SQS supports messages up to 256 KB in size. For larger messages, use the Extended Client Library with S3."
  },
  {
    id: 2,
    question: "What is the difference between SQS Standard and FIFO queues?",
    options: [
      "Standard has unlimited throughput, FIFO guarantees order",
      "FIFO is faster than Standard",
      "Standard is more expensive",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "Standard queues offer unlimited throughput and at-least-once delivery. FIFO queues guarantee exactly-once processing and preserve message order, but have limited throughput (300 TPS without batching, 3000 with batching)."
  },
  {
    id: 3,
    question: "What is the maximum retention period for messages in SQS?",
    options: [
      "1 day",
      "7 days",
      "14 days",
      "30 days"
    ],
    correctAnswer: 2,
    explanation: "SQS can retain messages for up to 14 days. The default retention period is 4 days, and the minimum is 60 seconds."
  },
  {
    id: 4,
    question: "What is the purpose of SQS visibility timeout?",
    options: [
      "To hide messages from all consumers",
      "To prevent other consumers from processing a message being processed",
      "To delete messages automatically",
      "To encrypt messages"
    ],
    correctAnswer: 1,
    explanation: "Visibility timeout prevents other consumers from receiving and processing a message while it's being processed by another consumer. Default is 30 seconds, maximum is 12 hours."
  },
  {
    id: 5,
    question: "What is the maximum number of messages that can be retrieved in a single SQS ReceiveMessage call?",
    options: [
      "1 message",
      "10 messages",
      "100 messages",
      "1000 messages"
    ],
    correctAnswer: 1,
    explanation: "A single ReceiveMessage call can retrieve up to 10 messages from the queue. This helps reduce API calls and improve efficiency."
  },
  {
    id: 6,
    question: "What is an SQS Dead Letter Queue (DLQ)?",
    options: [
      "A queue for deleted messages",
      "A queue for messages that failed processing after maximum retries",
      "A backup queue",
      "A queue for error logs"
    ],
    correctAnswer: 1,
    explanation: "A DLQ is used to store messages that couldn't be processed successfully after a specified number of attempts (maxReceiveCount), allowing you to analyze and debug failures."
  },
  {
    id: 7,
    question: "What is the difference between short polling and long polling in SQS?",
    options: [
      "Short polling returns immediately, long polling waits for messages",
      "Long polling is more expensive",
      "Short polling is deprecated",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "Short polling returns immediately (even if empty), potentially causing empty responses. Long polling waits up to 20 seconds for messages, reducing empty responses and costs."
  },
  {
    id: 8,
    question: "What is the purpose of SNS message filtering?",
    options: [
      "To encrypt messages",
      "To route messages to specific subscribers based on attributes",
      "To delete unwanted messages",
      "To compress messages"
    ],
    correctAnswer: 1,
    explanation: "SNS message filtering allows subscribers to receive only messages they're interested in by defining filter policies based on message attributes, reducing unnecessary processing."
  },
  {
    id: 9,
    question: "What is the maximum size of an SNS message?",
    options: [
      "64 KB",
      "256 KB",
      "512 KB",
      "1 MB"
    ],
    correctAnswer: 1,
    explanation: "SNS supports messages up to 256 KB in size. For larger payloads, store the data in S3 and send a reference in the SNS message."
  },
  {
    id: 10,
    question: "How can you implement fan-out pattern in AWS?",
    options: [
      "Using multiple SQS queues",
      "Using SNS topic with multiple SQS queue subscriptions",
      "Using Lambda functions",
      "Using API Gateway"
    ],
    correctAnswer: 1,
    explanation: "The fan-out pattern is implemented by publishing to an SNS topic that has multiple SQS queues subscribed, allowing one message to be delivered to multiple consumers."
  },
  {
    id: 11,
    question: "What is SQS message deduplication?",
    options: [
      "Removing duplicate messages in Standard queues",
      "Ensuring exactly-once processing in FIFO queues",
      "Compressing messages",
      "Encrypting messages"
    ],
    correctAnswer: 1,
    explanation: "Message deduplication in FIFO queues prevents duplicate messages from being sent within a 5-minute deduplication interval using deduplication IDs."
  },
  {
    id: 12,
    question: "What is the purpose of SQS delay queues?",
    options: [
      "To slow down message processing",
      "To postpone delivery of new messages for a specified time",
      "To increase throughput",
      "To encrypt messages"
    ],
    correctAnswer: 1,
    explanation: "Delay queues postpone delivery of new messages for up to 15 minutes, useful for implementing delayed processing or retry logic."
  },
  {
    id: 13,
    question: "What protocols does SNS support for message delivery?",
    options: [
      "HTTP/HTTPS only",
      "HTTP/HTTPS, Email, SMS, SQS, Lambda",
      "Email only",
      "SQS only"
    ],
    correctAnswer: 1,
    explanation: "SNS supports multiple protocols: HTTP/HTTPS endpoints, Email/Email-JSON, SMS, SQS queues, Lambda functions, and mobile push notifications."
  },
  {
    id: 14,
    question: "What is the maximum number of SNS subscriptions per topic?",
    options: [
      "100",
      "1,000",
      "12,500,000",
      "Unlimited"
    ],
    correctAnswer: 2,
    explanation: "An SNS topic can have up to 12,500,000 subscriptions. This allows for massive fan-out scenarios."
  },
  {
    id: 15,
    question: "How can you ensure message ordering in SQS?",
    options: [
      "Use Standard queues with timestamps",
      "Use FIFO queues with message group IDs",
      "Message ordering is not possible",
      "Use multiple queues"
    ],
    correctAnswer: 1,
    explanation: "FIFO queues with message group IDs ensure strict ordering within each group. Messages in the same group are processed in order."
  },
  {
    id: 16,
    question: "What is the purpose of SNS message attributes?",
    options: [
      "To encrypt messages",
      "To add metadata for filtering and routing",
      "To compress messages",
      "To delete messages"
    ],
    correctAnswer: 1,
    explanation: "Message attributes are key-value pairs that provide metadata about the message, used for filtering, routing, and processing logic without parsing the message body."
  },
  {
    id: 17,
    question: "What happens when an SQS message is not deleted after processing?",
    options: [
      "It's permanently lost",
      "It becomes visible again after visibility timeout",
      "It's automatically deleted",
      "It's moved to DLQ"
    ],
    correctAnswer: 1,
    explanation: "If a message isn't deleted after processing, it becomes visible again after the visibility timeout expires, allowing another consumer to process it."
  },
  {
    id: 18,
    question: "What is the maximum batch size for SQS SendMessageBatch?",
    options: [
      "5 messages",
      "10 messages",
      "25 messages",
      "100 messages"
    ],
    correctAnswer: 1,
    explanation: "SendMessageBatch can send up to 10 messages in a single request, reducing API calls and improving throughput."
  },
  {
    id: 19,
    question: "How can you implement message priority in SQS?",
    options: [
      "Use message attributes",
      "Use multiple queues with different priorities",
      "SQS doesn't support priority",
      "Use FIFO queues"
    ],
    correctAnswer: 1,
    explanation: "SQS doesn't have built-in priority. Implement it using multiple queues (high, medium, low priority) and process high-priority queues first."
  },
  {
    id: 20,
    question: "What is SNS FIFO topic?",
    options: [
      "A topic that guarantees message ordering and deduplication",
      "A faster SNS topic",
      "A topic for file storage",
      "SNS doesn't have FIFO topics"
    ],
    correctAnswer: 0,
    explanation: "SNS FIFO topics guarantee message ordering and exactly-once delivery, similar to SQS FIFO queues. They can only deliver to SQS FIFO queues."
  },
  {
    id: 21,
    question: "What is the purpose of SQS message timers?",
    options: [
      "To measure processing time",
      "To delay individual messages",
      "To set message expiration",
      "To schedule message delivery"
    ],
    correctAnswer: 1,
    explanation: "Message timers allow you to delay individual messages (0 to 15 minutes), overriding the queue's delay setting for specific messages."
  },
  {
    id: 22,
    question: "How can you secure SNS topics?",
    options: [
      "SNS topics are public by default",
      "Use topic policies and IAM policies",
      "Encryption only",
      "Security is not supported"
    ],
    correctAnswer: 1,
    explanation: "Secure SNS topics using topic policies (resource-based) and IAM policies (identity-based), along with encryption at rest and in transit."
  },
  {
    id: 23,
    question: "What is the maximum visibility timeout for SQS?",
    options: [
      "30 seconds",
      "5 minutes",
      "12 hours",
      "24 hours"
    ],
    correctAnswer: 2,
    explanation: "The maximum visibility timeout is 12 hours. The default is 30 seconds, and the minimum is 0 seconds."
  },
  {
    id: 24,
    question: "What is the purpose of SNS message delivery status?",
    options: [
      "To track message delivery success/failure",
      "To encrypt messages",
      "To filter messages",
      "To compress messages"
    ],
    correctAnswer: 0,
    explanation: "Message delivery status logging tracks whether messages were successfully delivered to endpoints, helping with monitoring and troubleshooting."
  },
  {
    id: 25,
    question: "How can you implement request-response pattern with SQS?",
    options: [
      "Use two queues: request and response",
      "Use SNS instead",
      "Request-response is not possible",
      "Use Lambda functions"
    ],
    correctAnswer: 0,
    explanation: "Implement request-response using two queues: one for requests and one for responses, with correlation IDs to match requests with responses."
  },
  {
    id: 26,
    question: "What is the cost model for SQS?",
    options: [
      "Pay per queue",
      "Pay per request (send, receive, delete)",
      "Pay per message size",
      "Free service"
    ],
    correctAnswer: 1,
    explanation: "SQS charges per request (1 million requests free tier), with additional charges for data transfer. FIFO queues cost more than Standard queues."
  },
  {
    id: 27,
    question: "What is SNS raw message delivery?",
    options: [
      "Unencrypted messages",
      "Delivering message body without SNS metadata wrapper",
      "Faster delivery",
      "Compressed messages"
    ],
    correctAnswer: 1,
    explanation: "Raw message delivery sends only the message body to SQS/HTTP endpoints without SNS metadata wrapper, simplifying message processing."
  },
  {
    id: 28,
    question: "How can you monitor SQS queue depth?",
    options: [
      "CloudWatch metric ApproximateNumberOfMessages",
      "SQS Console only",
      "Manual counting",
      "Monitoring is not available"
    ],
    correctAnswer: 0,
    explanation: "Use CloudWatch metric 'ApproximateNumberOfMessages' to monitor queue depth and set alarms for scaling or alerting."
  },
  {
    id: 29,
    question: "What is the purpose of SQS content-based deduplication?",
    options: [
      "To compress messages",
      "To automatically generate deduplication IDs from message body",
      "To encrypt messages",
      "To filter messages"
    ],
    correctAnswer: 1,
    explanation: "Content-based deduplication in FIFO queues automatically generates deduplication IDs using SHA-256 hash of the message body, eliminating the need to provide deduplication IDs."
  },
  {
    id: 30,
    question: "What is the maximum throughput for SNS?",
    options: [
      "1,000 TPS",
      "10,000 TPS",
      "100,000 TPS",
      "Unlimited (with soft limits)"
    ],
    correctAnswer: 3,
    explanation: "SNS has very high throughput with soft limits that can be increased. Standard topics support unlimited throughput, while FIFO topics have limits similar to SQS FIFO."
  }
];

// ============================================
// AWS CLOUDWATCH QUESTIONS - Developer Associate
// ============================================
export const CLOUDWATCH_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the default metric resolution for CloudWatch?",
    options: [
      "1 second",
      "1 minute",
      "5 minutes",
      "15 minutes"
    ],
    correctAnswer: 1,
    explanation: "The default (standard) resolution for CloudWatch metrics is 1 minute. High-resolution metrics can be published at 1-second intervals."
  },
  {
    id: 2,
    question: "What is the maximum retention period for CloudWatch Logs?",
    options: [
      "30 days",
      "90 days",
      "1 year",
      "Indefinite (never expire)"
    ],
    correctAnswer: 3,
    explanation: "CloudWatch Logs can be retained indefinitely (never expire) or configured to expire after 1 day to 10 years. The default is never expire."
  },
  {
    id: 3,
    question: "What is a CloudWatch custom metric?",
    options: [
      "A metric created by AWS services",
      "A metric you publish from your application",
      "A metric for cost monitoring",
      "A deprecated feature"
    ],
    correctAnswer: 1,
    explanation: "Custom metrics are metrics you define and publish from your applications using the PutMetricData API, allowing you to monitor application-specific data."
  },
  {
    id: 4,
    question: "What is the purpose of CloudWatch Alarms?",
    options: [
      "To encrypt logs",
      "To trigger actions based on metric thresholds",
      "To backup data",
      "To compress logs"
    ],
    correctAnswer: 1,
    explanation: "CloudWatch Alarms monitor metrics and trigger actions (SNS notifications, Auto Scaling, EC2 actions) when thresholds are breached."
  },
  {
    id: 5,
    question: "What is CloudWatch Logs Insights?",
    options: [
      "A log storage service",
      "A query language for analyzing log data",
      "A log encryption service",
      "A log backup service"
    ],
    correctAnswer: 1,
    explanation: "CloudWatch Logs Insights is an interactive query service for analyzing log data using a purpose-built query language, providing fast analysis of large log volumes."
  },
  {
    id: 6,
    question: "What is the maximum number of dimensions per CloudWatch metric?",
    options: [
      "5 dimensions",
      "10 dimensions",
      "30 dimensions",
      "Unlimited"
    ],
    correctAnswer: 2,
    explanation: "A CloudWatch metric can have up to 30 dimensions. Dimensions are name-value pairs that help identify the metric (e.g., InstanceId, InstanceType)."
  },
  {
    id: 7,
    question: "What is CloudWatch Events (now EventBridge)?",
    options: [
      "A log storage service",
      "A service for responding to state changes in AWS resources",
      "A metric collection service",
      "A backup service"
    ],
    correctAnswer: 1,
    explanation: "CloudWatch Events (now Amazon EventBridge) delivers near real-time stream of system events that describe changes in AWS resources, allowing you to respond to these changes."
  },
  {
    id: 8,
    question: "How can you export CloudWatch Logs to S3?",
    options: [
      "Automatic export",
      "Create export task or use Kinesis Data Firehose",
      "Manual download only",
      "Export is not supported"
    ],
    correctAnswer: 1,
    explanation: "Export CloudWatch Logs to S3 using CreateExportTask API for batch export, or use Kinesis Data Firehose subscription for near real-time streaming."
  },
  {
    id: 9,
    question: "What is the purpose of CloudWatch metric filters?",
    options: [
      "To delete metrics",
      "To extract metric data from log events",
      "To encrypt metrics",
      "To compress metrics"
    ],
    correctAnswer: 1,
    explanation: "Metric filters extract metric data from log events, allowing you to create metrics from log patterns (e.g., count ERROR occurrences)."
  },
  {
    id: 10,
    question: "What is CloudWatch Synthetics?",
    options: [
      "A log generation service",
      "A service for creating canaries to monitor endpoints",
      "A metric aggregation service",
      "A backup service"
    ],
    correctAnswer: 1,
    explanation: "CloudWatch Synthetics allows you to create canaries (configurable scripts) that monitor endpoints and APIs, simulating user actions to detect issues."
  },
  {
    id: 11,
    question: "What is the difference between CloudWatch detailed and basic monitoring?",
    options: [
      "Detailed is 1-minute intervals, basic is 5-minute intervals",
      "Detailed is more expensive",
      "Basic is deprecated",
      "Both A and B"
    ],
    correctAnswer: 3,
    explanation: "Detailed monitoring provides metrics at 1-minute intervals (costs extra), while basic monitoring provides metrics at 5-minute intervals (free for many services)."
  },
  {
    id: 12,
    question: "How can you aggregate CloudWatch metrics across multiple resources?",
    options: [
      "Use metric math",
      "Manual calculation only",
      "Aggregation is not supported",
      "Use Lambda functions"
    ],
    correctAnswer: 0,
    explanation: "CloudWatch metric math allows you to aggregate and transform metrics across multiple resources using mathematical expressions."
  },
  {
    id: 13,
    question: "What is CloudWatch Contributor Insights?",
    options: [
      "A service to analyze top contributors to metrics",
      "A log storage service",
      "A backup service",
      "A cost analysis tool"
    ],
    correctAnswer: 0,
    explanation: "Contributor Insights analyzes log data to identify top contributors (e.g., top talkers, top error producers) helping you understand who or what is impacting system performance."
  },
  {
    id: 14,
    question: "What is the purpose of CloudWatch anomaly detection?",
    options: [
      "To encrypt data",
      "To automatically detect unusual metric patterns using ML",
      "To compress logs",
      "To backup data"
    ],
    correctAnswer: 1,
    explanation: "CloudWatch anomaly detection uses machine learning to automatically detect anomalous behavior in metrics, creating dynamic thresholds based on historical patterns."
  },
  {
    id: 15,
    question: "How can you stream CloudWatch Logs to Lambda?",
    options: [
      "Direct integration",
      "Use subscription filters",
      "Streaming is not supported",
      "Use S3 export"
    ],
    correctAnswer: 1,
    explanation: "Use CloudWatch Logs subscription filters to stream log events to Lambda functions in near real-time for processing and analysis."
  },
  {
    id: 16,
    question: "What is the maximum size of a CloudWatch Logs event?",
    options: [
      "64 KB",
      "256 KB",
      "512 KB",
      "1 MB"
    ],
    correctAnswer: 1,
    explanation: "A single CloudWatch Logs event can be up to 256 KB in size. Larger log entries should be split into multiple events."
  },
  {
    id: 17,
    question: "What is CloudWatch Container Insights?",
    options: [
      "A service for monitoring containerized applications",
      "A container storage service",
      "A container backup service",
      "A container encryption service"
    ],
    correctAnswer: 0,
    explanation: "Container Insights collects, aggregates, and summarizes metrics and logs from containerized applications (ECS, EKS, Kubernetes) for monitoring and troubleshooting."
  },
  {
    id: 18,
    question: "How can you create composite alarms in CloudWatch?",
    options: [
      "Combine multiple alarms using AND/OR logic",
      "Composite alarms are not supported",
      "Use Lambda functions",
      "Manual monitoring only"
    ],
    correctAnswer: 0,
    explanation: "Composite alarms combine multiple alarms using AND/OR logic, reducing alarm noise and allowing complex alerting scenarios."
  },
  {
    id: 19,
    question: "What is the purpose of CloudWatch metric streams?",
    options: [
      "To stream metrics to destinations like S3 or third-party services",
      "To compress metrics",
      "To encrypt metrics",
      "To delete metrics"
    ],
    correctAnswer: 0,
    explanation: "CloudWatch metric streams continuously stream metrics to destinations like Amazon S3 or third-party service providers with low latency."
  },
  {
    id: 20,
    question: "What is CloudWatch Application Insights?",
    options: [
      "A service for automated application monitoring and troubleshooting",
      "A log storage service",
      "A backup service",
      "A cost analysis tool"
    ],
    correctAnswer: 0,
    explanation: "Application Insights automatically sets up monitoring for applications, detects problems, and provides insights for troubleshooting using ML-powered analysis."
  },
  {
    id: 21,
    question: "How can you retain CloudWatch Logs for compliance?",
    options: [
      "Set retention policy and export to S3",
      "Logs are automatically retained forever",
      "Retention is not configurable",
      "Use Lambda functions"
    ],
    correctAnswer: 0,
    explanation: "Configure retention policies (1 day to 10 years or never expire) and export logs to S3 for long-term archival and compliance requirements."
  },
  {
    id: 22,
    question: "What is the purpose of CloudWatch cross-account observability?",
    options: [
      "To monitor resources across multiple AWS accounts",
      "To share costs",
      "To backup data",
      "To encrypt data"
    ],
    correctAnswer: 0,
    explanation: "Cross-account observability allows you to monitor and troubleshoot applications across multiple AWS accounts from a central monitoring account."
  },
  {
    id: 23,
    question: "What is CloudWatch Evidently?",
    options: [
      "A service for feature flags and A/B testing",
      "A log storage service",
      "A backup service",
      "A cost analysis tool"
    ],
    correctAnswer: 0,
    explanation: "CloudWatch Evidently enables you to safely validate new features by conducting A/B experiments and using feature flags to control feature rollout."
  },
  {
    id: 24,
    question: "How can you monitor Lambda function performance in CloudWatch?",
    options: [
      "Lambda automatically sends metrics to CloudWatch",
      "Manual configuration required",
      "Monitoring is not supported",
      "Use third-party tools only"
    ],
    correctAnswer: 0,
    explanation: "Lambda automatically sends metrics (invocations, duration, errors, throttles) to CloudWatch. You can also use CloudWatch Logs for function logs."
  },
  {
    id: 25,
    question: "What is the purpose of CloudWatch dashboard?",
    options: [
      "To visualize metrics and logs in customizable views",
      "To store metrics",
      "To encrypt data",
      "To backup data"
    ],
    correctAnswer: 0,
    explanation: "CloudWatch dashboards provide customizable views of metrics and logs, allowing you to create operational views and share them across teams."
  },
  {
    id: 26,
    question: "What is CloudWatch RUM (Real User Monitoring)?",
    options: [
      "A service to monitor actual user interactions with web applications",
      "A log storage service",
      "A backup service",
      "A cost analysis tool"
    ],
    correctAnswer: 0,
    explanation: "CloudWatch RUM collects and analyzes client-side data about actual user interactions with web applications, providing insights into user experience."
  },
  {
    id: 27,
    question: "How can you set up CloudWatch alarms for billing?",
    options: [
      "Use billing metrics in us-east-1 region",
      "Billing alarms are not supported",
      "Use Lambda functions",
      "Manual monitoring only"
    ],
    correctAnswer: 0,
    explanation: "Enable billing alerts in account preferences, then create alarms on billing metrics (available only in us-east-1 region) to monitor AWS costs."
  },
  {
    id: 28,
    question: "What is the purpose of CloudWatch Logs subscription filters?",
    options: [
      "To stream log events to other services in real-time",
      "To delete logs",
      "To encrypt logs",
      "To compress logs"
    ],
    correctAnswer: 0,
    explanation: "Subscription filters stream log events in real-time to destinations like Lambda, Kinesis Data Streams, or Kinesis Data Firehose for processing."
  },
  {
    id: 29,
    question: "What is CloudWatch ServiceLens?",
    options: [
      "An integrated view of traces, metrics, and logs for applications",
      "A log storage service",
      "A backup service",
      "A cost analysis tool"
    ],
    correctAnswer: 0,
    explanation: "ServiceLens integrates CloudWatch with X-Ray to provide an end-to-end view of your application, combining traces, metrics, logs, and alarms."
  },
  {
    id: 30,
    question: "How can you reduce CloudWatch costs?",
    options: [
      "Use log retention policies, metric filters, and sampling",
      "CloudWatch is always free",
      "Cost reduction is not possible",
      "Delete all logs immediately"
    ],
    correctAnswer: 0,
    explanation: "Reduce costs by setting appropriate log retention policies, using metric filters instead of storing all logs, implementing sampling, and using standard resolution metrics when possible."
  }
];

// ============================================
// AWS CI/CD QUESTIONS - Developer Associate
// ============================================
export const CICD_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is AWS CodeCommit?",
    options: [
      "A build service",
      "A managed source control service based on Git",
      "A deployment service",
      "A testing service"
    ],
    correctAnswer: 1,
    explanation: "CodeCommit is a fully managed source control service that hosts secure Git repositories, providing a scalable and secure way to store code."
  },
  {
    id: 2,
    question: "What is the maximum file size for a single file in CodeCommit?",
    options: [
      "2 GB",
      "5 GB",
      "10 GB",
      "Unlimited"
    ],
    correctAnswer: 0,
    explanation: "CodeCommit supports files up to 2 GB in size. For larger files, consider using Git LFS (Large File Storage)."
  },
  {
    id: 3,
    question: "What is AWS CodeBuild?",
    options: [
      "A source control service",
      "A fully managed build service that compiles code and runs tests",
      "A deployment service",
      "A monitoring service"
    ],
    correctAnswer: 1,
    explanation: "CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces deployable artifacts."
  },
  {
    id: 4,
    question: "What file defines the build process in CodeBuild?",
    options: [
      "Dockerfile",
      "buildspec.yml",
      "package.json",
      "config.json"
    ],
    correctAnswer: 1,
    explanation: "The buildspec.yml file defines the build commands and settings for CodeBuild, including phases, environment variables, and artifacts."
  },
  {
    id: 5,
    question: "What is AWS CodeDeploy?",
    options: [
      "A source control service",
      "A build service",
      "A deployment service that automates application deployments",
      "A testing service"
    ],
    correctAnswer: 2,
    explanation: "CodeDeploy is a deployment service that automates application deployments to EC2, Lambda, ECS, and on-premises servers."
  },
  {
    id: 6,
    question: "What are the deployment types supported by CodeDeploy for EC2?",
    options: [
      "In-place and Blue/Green",
      "Rolling only",
      "Canary only",
      "All-at-once only"
    ],
    correctAnswer: 0,
    explanation: "CodeDeploy supports in-place deployments (updates instances in place) and blue/green deployments (creates new instances) for EC2."
  },
  {
    id: 7,
    question: "What is AWS CodePipeline?",
    options: [
      "A source control service",
      "A continuous delivery service that orchestrates build, test, and deploy",
      "A monitoring service",
      "A testing service"
    ],
    correctAnswer: 1,
    explanation: "CodePipeline is a continuous delivery service that orchestrates the entire release process, integrating with CodeCommit, CodeBuild, CodeDeploy, and third-party tools."
  },
  {
    id: 8,
    question: "What is the purpose of the appspec.yml file in CodeDeploy?",
    options: [
      "To define build commands",
      "To define deployment actions and lifecycle hooks",
      "To configure source control",
      "To set up monitoring"
    ],
    correctAnswer: 1,
    explanation: "The appspec.yml file defines deployment actions, file locations, permissions, and lifecycle event hooks for CodeDeploy deployments."
  },
  {
    id: 9,
    question: "What are CodeDeploy lifecycle event hooks?",
    options: [
      "Build phases",
      "Scripts that run at specific points during deployment",
      "Monitoring alerts",
      "Source control triggers"
    ],
    correctAnswer: 1,
    explanation: "Lifecycle event hooks are scripts that run at specific points during deployment (BeforeInstall, AfterInstall, ApplicationStart, etc.), allowing custom actions."
  },
  {
    id: 10,
    question: "What is AWS CodeArtifact?",
    options: [
      "A source control service",
      "A managed artifact repository service",
      "A deployment service",
      "A build service"
    ],
    correctAnswer: 1,
    explanation: "CodeArtifact is a fully managed artifact repository service for storing and sharing software packages (npm, Maven, PyPI, NuGet)."
  },
  {
    id: 11,
    question: "What is the purpose of CodePipeline stages?",
    options: [
      "To organize pipeline actions into logical groups",
      "To store artifacts",
      "To monitor deployments",
      "To compile code"
    ],
    correctAnswer: 0,
    explanation: "Stages organize pipeline actions into logical groups (Source, Build, Test, Deploy), with each stage containing one or more actions that run in sequence or parallel."
  },
  {
    id: 12,
    question: "What is a CodeBuild build environment?",
    options: [
      "The source code location",
      "A Docker image with tools and runtimes for building",
      "The deployment target",
      "A monitoring dashboard"
    ],
    correctAnswer: 1,
    explanation: "A build environment is a Docker image containing the operating system, programming language runtime, and tools needed to build your code."
  },
  {
    id: 13,
    question: "How can you trigger a CodePipeline execution?",
    options: [
      "Source code changes, manual trigger, or scheduled",
      "Manual trigger only",
      "Automatic only",
      "Triggers are not supported"
    ],
    correctAnswer: 0,
    explanation: "CodePipeline can be triggered by source code changes (via CloudWatch Events), manual execution, or on a schedule using CloudWatch Events rules."
  },
  {
    id: 14,
    question: "What is the purpose of CodeDeploy deployment groups?",
    options: [
      "To group source code files",
      "To specify target instances and deployment configuration",
      "To organize build artifacts",
      "To monitor deployments"
    ],
    correctAnswer: 1,
    explanation: "Deployment groups specify the target instances (by tags, Auto Scaling groups, or instance IDs) and deployment configuration for CodeDeploy."
  },
  {
    id: 15,
    question: "What is AWS CodeStar?",
    options: [
      "A unified interface for managing CI/CD and development tools",
      "A source control service",
      "A build service",
      "A deployment service"
    ],
    correctAnswer: 0,
    explanation: "CodeStar provides a unified interface for managing software development activities, integrating CodeCommit, CodeBuild, CodeDeploy, and CodePipeline."
  },
  {
    id: 16,
    question: "What is the difference between CodeDeploy in-place and blue/green deployment?",
    options: [
      "In-place updates existing instances, blue/green creates new instances",
      "Blue/green is faster",
      "In-place is more expensive",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "In-place deployment updates existing instances with downtime. Blue/green creates new instances, routes traffic to them, then terminates old instances with minimal downtime."
  },
  {
    id: 17,
    question: "How can you implement approval gates in CodePipeline?",
    options: [
      "Use manual approval actions",
      "Approval gates are not supported",
      "Use Lambda functions only",
      "Automatic approval only"
    ],
    correctAnswer: 0,
    explanation: "Add manual approval actions to CodePipeline stages to require human approval before proceeding, useful for production deployments."
  },
  {
    id: 18,
    question: "What is the purpose of CodeBuild cache?",
    options: [
      "To speed up builds by reusing dependencies",
      "To store source code",
      "To monitor builds",
      "To deploy applications"
    ],
    correctAnswer: 0,
    explanation: "CodeBuild cache stores dependencies and build outputs between builds, significantly reducing build time by avoiding re-downloading dependencies."
  },
  {
    id: 19,
    question: "What is AWS X-Ray integration with CodePipeline?",
    options: [
      "To trace pipeline executions",
      "To monitor deployed applications",
      "To build code",
      "To store artifacts"
    ],
    correctAnswer: 1,
    explanation: "X-Ray integration allows you to trace and analyze requests in deployed applications, helping identify performance bottlenecks and errors."
  },
  {
    id: 20,
    question: "What is the purpose of CodeDeploy rollback?",
    options: [
      "To automatically revert to previous version on deployment failure",
      "To delete deployments",
      "To monitor deployments",
      "To build code"
    ],
    correctAnswer: 0,
    explanation: "CodeDeploy automatic rollback reverts to the previous working version when deployment fails or alarms are triggered, ensuring application availability."
  },
  {
    id: 21,
    question: "How can you secure CodeCommit repositories?",
    options: [
      "Use IAM policies and encryption",
      "Repositories are public by default",
      "Security is not supported",
      "Use passwords only"
    ],
    correctAnswer: 0,
    explanation: "Secure CodeCommit using IAM policies for access control, encryption at rest and in transit, and MFA for additional security."
  },
  {
    id: 22,
    question: "What is the purpose of CodeBuild environment variables?",
    options: [
      "To pass configuration and secrets to build process",
      "To store source code",
      "To monitor builds",
      "To deploy applications"
    ],
    correctAnswer: 0,
    explanation: "Environment variables pass configuration, credentials, and other data to the build process. Use Parameter Store or Secrets Manager for sensitive data."
  },
  {
    id: 23,
    question: "What is CodePipeline artifact store?",
    options: [
      "An S3 bucket that stores pipeline artifacts between stages",
      "A source control repository",
      "A build environment",
      "A monitoring dashboard"
    ],
    correctAnswer: 0,
    explanation: "The artifact store is an S3 bucket where CodePipeline stores artifacts (build outputs, source code) that are passed between pipeline stages."
  },
  {
    id: 24,
    question: "What is the purpose of CodeDeploy traffic shifting?",
    options: [
      "To gradually shift traffic to new version",
      "To monitor traffic",
      "To build code",
      "To store artifacts"
    ],
    correctAnswer: 0,
    explanation: "Traffic shifting (canary, linear, all-at-once) gradually routes traffic to the new version, allowing you to monitor and rollback if issues occur."
  },
  {
    id: 25,
    question: "How can you integrate third-party tools with CodePipeline?",
    options: [
      "Use custom actions with Lambda or Jenkins",
      "Third-party integration is not supported",
      "Use CodeBuild only",
      "Manual integration only"
    ],
    correctAnswer: 0,
    explanation: "CodePipeline supports custom actions using Lambda functions or integrates with third-party tools like Jenkins, GitHub, and Bitbucket."
  },
  {
    id: 26,
    question: "What is the purpose of CodeBuild buildspec phases?",
    options: [
      "To organize build commands into logical steps",
      "To store artifacts",
      "To monitor builds",
      "To deploy applications"
    ],
    correctAnswer: 0,
    explanation: "Buildspec phases (install, pre_build, build, post_build) organize build commands into logical steps, making builds more maintainable and debuggable."
  },
  {
    id: 27,
    question: "What is AWS CodeGuru?",
    options: [
      "An ML-powered code review and performance recommendation service",
      "A source control service",
      "A build service",
      "A deployment service"
    ],
    correctAnswer: 0,
    explanation: "CodeGuru uses machine learning to provide automated code reviews (CodeGuru Reviewer) and application performance recommendations (CodeGuru Profiler)."
  },
  {
    id: 28,
    question: "How can you implement blue/green deployment for Lambda with CodeDeploy?",
    options: [
      "Use Lambda aliases and traffic shifting",
      "Blue/green is not supported for Lambda",
      "Use multiple functions",
      "Manual deployment only"
    ],
    correctAnswer: 0,
    explanation: "CodeDeploy uses Lambda aliases to implement blue/green deployments with traffic shifting (canary, linear, all-at-once) between function versions."
  },
  {
    id: 29,
    question: "What is the purpose of CodePipeline cross-region actions?",
    options: [
      "To deploy to multiple AWS regions",
      "To store artifacts",
      "To monitor pipelines",
      "To build code"
    ],
    correctAnswer: 0,
    explanation: "Cross-region actions allow CodePipeline to deploy applications to multiple AWS regions, enabling global application deployment from a single pipeline."
  },
  {
    id: 30,
    question: "What is the purpose of CodeDeploy deployment configuration?",
    options: [
      "To specify how fast and in what manner instances are deployed to",
      "To store source code",
      "To monitor deployments",
      "To build code"
    ],
    correctAnswer: 0,
    explanation: "Deployment configuration specifies deployment speed and manner (OneAtATime, HalfAtATime, AllAtOnce, or custom) controlling how many instances are deployed to simultaneously."
  }
];

// General AWS Developer questions
export const GENERAL_DEVELOPER_QUESTIONS: QuizQuestion[] = [
  {
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
    question: "An application needs to store session state for a serverless API. Which solution is most cost-effective?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon S3"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB offers serverless, pay-per-request pricing with fast access times, making it ideal for session storage in serverless applications."
  }
];

// Topic-based organization
export const DEVELOPER_TOPICS: QuizTopic[] = [
  {
    id: 'all',
    name: 'All Topics',
    icon: '📚',
    description: 'All AWS Developer Associate questions',
    questions: [...LAMBDA_QUESTIONS, ...DYNAMODB_QUESTIONS, ...API_GATEWAY_QUESTIONS, ...IAM_QUESTIONS, ...SQS_SNS_QUESTIONS, ...CLOUDWATCH_QUESTIONS, ...CICD_QUESTIONS, ...GENERAL_DEVELOPER_QUESTIONS]
  },
  {
    id: 'lambda',
    name: 'AWS Lambda',
    icon: 'λ',
    description: 'Serverless compute service questions',
    questions: LAMBDA_QUESTIONS
  },
  {
    id: 'dynamodb',
    name: 'DynamoDB',
    icon: '🗄️',
    description: 'NoSQL database service questions',
    questions: DYNAMODB_QUESTIONS
  },
  {
    id: 'api-gateway',
    name: 'API Gateway',
    icon: '🚪',
    description: 'RESTful API management service questions',
    questions: API_GATEWAY_QUESTIONS
  },
  {
    id: 'iam',
    name: 'IAM',
    icon: '🔐',
    description: 'Identity and Access Management questions',
    questions: IAM_QUESTIONS
  },
  {
    id: 'sqs-sns',
    name: 'SQS/SNS',
    icon: '📬',
    description: 'Messaging and notification services questions',
    questions: SQS_SNS_QUESTIONS
  },
  {
    id: 'cloudwatch',
    name: 'CloudWatch',
    icon: '📊',
    description: 'Monitoring and observability questions',
    questions: CLOUDWATCH_QUESTIONS
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    icon: '🔄',
    description: 'Continuous Integration and Deployment questions',
    questions: CICD_QUESTIONS
  },
  {
    id: 'general',
    name: 'General',
    icon: '⚙️',
    description: 'General AWS Developer topics',
    questions: GENERAL_DEVELOPER_QUESTIONS
  }
];

// Keep backward compatibility
export const DEVELOPER_QUESTIONS: QuizQuestion[] = [
  ...LAMBDA_QUESTIONS,
  ...DYNAMODB_QUESTIONS,
  ...API_GATEWAY_QUESTIONS,
  ...IAM_QUESTIONS,
  ...SQS_SNS_QUESTIONS,
  ...CLOUDWATCH_QUESTIONS,
  ...CICD_QUESTIONS,
  ...GENERAL_DEVELOPER_QUESTIONS
];

// Made with Bob
