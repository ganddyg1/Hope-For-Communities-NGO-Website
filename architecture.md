# Architecture

The NGO website is hosted using Amazon S3 Static Website Hosting.

Amazon CloudFront is placed in front of the S3 bucket to provide:

* HTTPS encryption
* Faster loading through caching
* Lower latency
* Global content delivery

Flow:

&#x20;              Users

&#x20;                │

&#x20;                ▼

&#x20;       CloudFront (CDN)

&#x20; (Content Delivery Network)

&#x20;                │

&#x20;                ▼

&#x20;     Amazon S3 Static Website

&#x20;                │

&#x20;                ▼

&#x20;     HTML • CSS • JavaScript • Images

