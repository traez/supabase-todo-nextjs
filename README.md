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

This project focuses on building a feature-rich To-Do Application using Next.js and Supabase, providing users with an intuitive interface for managing their tasks effectively. The application allows users to add new tasks, toggle their completion status, delete individual tasks, and clear all tasks with ease. The user interface dynamically updates to reflect changes in real time, ensuring a seamless experience. Tasks are stored in a Supabase database, and state management is handled through React’s context API to ensure efficient data fetching and UI responsiveness.

User feedback is prioritized, with notifications for actions like successful task creation, deletion, or errors, ensuring transparency and guiding users through interactions. A confirmation prompt prevents accidental bulk deletions, while visually striking features like strikethroughs mark completed tasks. These core functionalities form the foundation of a simple yet effective task management tool, designed to improve daily productivity with room for future enhancements such as user authentication and advanced task filtering.

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/supabase-todo-nextjs](https://github.com/traez/supabase-todo-nextjs)
- Live Site URL: [https://supabase-todo-nextjs.vercel.app/](https://supabase-todo-nextjs.vercel.app/)

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
   
- **Simplified Backend Development with Supabase**  
With traditional providers, you handle everything manually — API endpoints, SQL queries, authentication, and security. This involves setting up a backend server (e.g., using Node.js, Django, or Laravel), defining API endpoints manually for each type of operation (GET, POST, PATCH, DELETE), and writing SQL queries inside these endpoints to interact with the database.  

    With Supabase, it's all automated — you just interact with the API or SDK. This is why Supabase significantly speeds up development.           
- **Understanding React Hydration**  
Hydration refers to the process in which React takes over the static HTML generated during server-side rendering (SSR) and "rehydrates" it into a fully interactive React application in the browser. Essentially, it's the step where React attaches event listeners and makes the static HTML interactive.   
- **Improving User Experience with Backend Sync**  
By calling `fetchData()` after deleting a task, you're ensuring that the component state is populated with the most up-to-date data from Supabase. This eliminates the need to manually filter tasks and keeps everything in sync with the backend. Unlike `window.location.reload()`, this method avoids a full page reload, which can be more efficient for user experience and performance.    
- **Optimistic UI Updates**  
Optimistically updating local state in the UI involves immediately reflecting changes in the user interface before receiving a server response. This improves user experience by making the app feel faster and more responsive. The local state is updated as if the server operation succeeded, and if the server request fails, the state is reverted to its original value, ensuring the UI is consistent with the actual data.  
  

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
