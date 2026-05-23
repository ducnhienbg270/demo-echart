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

export const DEVELOPER_QUESTIONS: QuizQuestion[] = [
  ...LAMBDA_QUESTIONS,
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

// Made with Bob
