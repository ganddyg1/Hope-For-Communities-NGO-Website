# Hope for Communities NGO Website

## Project Overview

Hope for Communities NGO is a responsive static website developed to demonstrate a cost-effective cloud hosting solution for non-governmental organizations (NGOs) in Nigeria.

The website is hosted on Amazon S3 and distributed globally using Amazon CloudFront to provide fast, secure (HTTPS), and reliable access.

---

## Problem Statement

Many NGOs require an affordable, secure, and highly available website to share information about their mission, programs, and community impact without maintaining expensive servers.

This project demonstrates how AWS cloud services can provide an efficient solution.

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
- HTTPS delivery using Amazon CloudFront
- Static website hosting using Amazon S3

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Amazon S3
- Amazon CloudFront

---

## AWS Architecture

Users

↓

Amazon CloudFront (CDN)

↓

Amazon S3 Static Website Hosting

↓

HTML • CSS • JavaScript • Images

---

## Cost Optimization

This project minimizes cloud costs by:

- Hosting static files on Amazon S3
- Using Amazon CloudFront caching
- Eliminating the need for virtual servers
- Reducing bandwidth usage
- Providing HTTPS without managing certificates on a server

---

## Deployment Steps

1. Create an Amazon S3 bucket.
2. Upload website files.
3. Enable Static Website Hosting.
4. Create a CloudFront Distribution.
5. Configure CloudFront to use the S3 bucket.
6. Access the website using the CloudFront HTTPS URL.

---

## Website Sections

- Home
- About
- Programs
- Impact
- Gallery
- Contact
- Donate

---

## Project Structure

```
index.html
style.css
script.js
README.md

images/
│── hero.png
│── logo.png
│── community.png
│── education.jpg
│── healthcare.png
│── gallery1.png
│── gallery2.png
│── gallery3.png
```

---

## Live Demo

CloudFront URL:

(Add your CloudFront URL here)

S3 Website URL:

(Add your S3 Website URL here)

---

## Author

Andrew Arthur

Cloud Computing Project
2026
