# text-narrator
Text narrator using AWS lambda,Amazon polly and amazon S3
Project Overview
In my project, I have used Amazon Polly, a cloud-based text-to-speech service by AWS, to convert written text into lifelike speech.
The core component of the project is an AWS Lambda function, a serverless compute service that automatically runs our backend logic in response to specific events.
When a user submits text through a web interface or API, the Lambda function is triggered. It processes the input and sends it to Amazon Polly, which then synthesizes the text into speech using a selected voice and language.
The output audio is then stored in Amazon S3, making it easy to stream or download the narrated file.
This solution is highly scalable, cost-effective, and perfect for applications like e-learning platforms, voice-enabled apps, or automated announcements.
Tech Stack
●	Backend Language: node.js
●	Text-to-Speech API: AWS Polly
●	Deployment Platform: AWS lambda
●	Access Management: AWS IAM Roles and Policies
