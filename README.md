# Hope for Communities NGO Website

## Project Overview

Hope for Communities NGO is a responsive static website developed to demonstrate a cost-effective cloud hosting solution for non-governmental organizations (NGOs) in Nigeria.

The website is hosted on **Amazon S3** and delivered securely through **Amazon CloudFront (CDN)** using HTTPS to provide fast, reliable, and globally accessible content.

---

## Problem Statement

Many NGOs require an affordable, secure, and highly available website to showcase their mission, programs, and community impact without maintaining expensive web servers.

This project demonstrates how AWS cloud services can provide an efficient and scalable hosting solution.

---

## Features

- Responsive website design
- Hero banner
- About section
- Programs section
- Impact statistics
- Image gallery
- Contact information
- Google Maps integration
- Static website hosting with Amazon S3
- Global content delivery using Amazon CloudFront
- HTTPS support
- Cost-optimized cloud architecture

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Amazon S3
- Amazon CloudFront
- AWS CloudFormation (Infrastructure as Code)

---

## AWS Architecture

```
Users
   │
   ▼
Amazon CloudFront (CDN)
   │
   ▼
Amazon S3 Static Website Hosting
   │
   ▼
HTML • CSS • JavaScript • Images
```

---

## Infrastructure as Code (IaC)

This project includes an AWS CloudFormation template (`cloudformation.yaml`) that defines the cloud infrastructure required to host the website.

Resources included:

- Amazon S3 Bucket
- S3 Bucket Policy
- Amazon CloudFront Distribution
- Website Outputs

---

## Cost Optimization

This solution minimizes cloud costs by:

- Hosting static content on Amazon S3
- Using Amazon CloudFront caching
- Eliminating the need for virtual servers
- Reducing bandwidth usage
- Delivering HTTPS securely through CloudFront
- Using AWS Free Tier eligible services where applicable

---

## Deployment Steps

1. Create an Amazon S3 bucket.
2. Upload website files.
3. Enable Static Website Hosting.
4. Create an Amazon CloudFront Distribution.
5. Configure CloudFront to use the S3 website endpoint.
6. Upload website updates as needed.
7. Create a CloudFront invalidation after updates.
8. Access the website using the CloudFront HTTPS URL.

---

## Project Structure

```
Hope-For-Communities-NGO-Website/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── architecture.md
├── Architecture.pdf
├── cost-note.md
├── cloudformation.yaml
├── logo.png
├── hero.png
├── community.png
├── education.jpg
├── healthcare.png
├── gallery1.png
├── gallery2.png
└── gallery3.png
```

---

## Live Demo

**CloudFront URL**

Paste your CloudFront URL here.

**Amazon S3 Website URL**

Paste your S3 website endpoint here.

**GitHub Repository**

Paste your GitHub repository link here.

---

## Author

**Andrew Arthur**

Cloud Computing Project

2026
