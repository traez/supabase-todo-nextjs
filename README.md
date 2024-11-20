# Nextjs Fullstack App with PostgreSQL database powered by Supabase

To enhance my full-stack development skills, I am transitioning from using non-relational databases (MongoDB) to relational databases (PostgreSQL, MySQL), in alignment with industry best practices.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

The challenge for this project involved creating a dynamic product management system using Supabase as the backend to store and retrieve product data. The user stories included allowing users to create new products with a name and description, view a list of existing products from the database, and perform CRUD (Create, Read, Update, Delete) operations on individual products. Specifically, users can add new products, edit product details, and delete products, with all interactions being reflected in real-time on the frontend. A smooth user experience is ensured through the use of state management and the Supabase API for seamless integration with the database. Additionally, error handling and feedback are incorporated using toast notifications to inform users of the success or failure of their actions.

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/supabase-postgresql-crud](https://github.com/traez/supabase-postgresql-crud)
- Live Site URL: [https://supabase-postgresql-crud.vercel.app/](https://supabase-postgresql-crud.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Typescript
- Nodejs      
- Supabase    
- PostgreSQL       
- Sonner  
- Tailwind CSS      

### What I learned
   
- **Hybrid Approach: SQL and NoSQL Integration for Performance and Scalability**  
A hybrid approach combining SQL and NoSQL can optimize both performance and scalability. SQL serves as the primary, consistent source of truth for core data, ensuring data integrity and structured relationships. Meanwhile, specific data is mirrored in NoSQL for rapid access and flexibility. NoSQL excels in handling high-speed reads, caching, and unstructured data, making it ideal for features like activity feeds, real-time analytics, and high-traffic data caching. By strategically syncing SQL and NoSQL, applications can benefit from both long-term reliability and scalability for dynamic, user-facing features.        
- **Upcoming Changes to Supabase API Keys**  
Supabase will soon transition from using anon and service_role API keys to publishable and secret API keys. However, as of November 15, this change has not yet been implemented when setting up the project.  
- **Secure Database Access via Supabase Authentication Keys**  
You don’t need to use the database password directly in your app because Supabase provides authentication keys (Anon and Service Role) that securely access the database through the Supabase API. This design helps keep the database secure while still allowing public access for safe operations (via the Anon key) and controlled access to sensitive operations (via the Service Role key).  
- **Supabase Free Plan Limitations**  
Under the Supabase Free plan, you can have a maximum of 2 active projects at any given time. Projects are paused after 1 week of inactivity but can be manually paused and unpaused. Hacks, such as cron jobs, exist to bypass project pausing. A project that has been paused for over 90 days cannot be restored through the dashboard. However, the data remains intact and can be downloaded as a backup. Restarting a paused project only takes a few minutes. There is no specific time limit for using the Free plan, as long as you comply with the free-tier limits (e.g., 2 active projects, 1-week inactivity pause).   
- **Amazon RDS Free Tier: 12-Month Limitations and Hidden Charges**  
In contrast, the Amazon RDS Free Tier (which i used for MySQL) benefits are available only for 12 months after signing up for AWS. Additionally, they tend to charge monthly with hidden costs, as you must sign up with a debit card (similar to Google’s approach). 
- **Direct Database Interaction with Supabase SDK in Next.js**  
In a Next.js app using the Supabase SDK, CRUD functionality can bypass traditional API routes or server actions. The SDK allows direct interaction with the database via client-side or server-side calls. This is secure when used correctly with Supabase's built-in features, such as Row-Level Security (RLS) and token-based authentication, which enforce access control directly at the database level. This eliminates the need for custom API layers while maintaining security, especially in apps designed to leverage Supabase's real-time capabilities and client-friendly architecture.  

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Zeeofor Technologies](https://zeeofortech.vercel.app/)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs
