Moonarch Frontend Developer Take-Home
Time Allotted: 1-2 hour (See time rules for more details)
Candidates may use any frameworks or tools (we want to see how you use AI tools efficiently in your workflow), but must screen-record the entire process.

1. Overview & Objectives
The goal of this exercise is to assess your ability to rapidly build a small, production-grade dashboard application that:
Consumes real APIs and displays data in interactive charts


Provides basic customization, filtering and visualization of data


Demonstrates clean, maintainable code structure and thoughtful UX/UI design
You may take some time before the one hour starts to plan out how you will do things and even what AI tools may produce given the prompt. However, you then must start from a blank slate when you begin recording and 60 minutes to finish. Feel free to explain your thinking or show any planning you did beforehand. You may use any frontend stack (e.g. React, Vue, Angular) and any charting library (e.g. Chart.js, Recharts, D3). 
Time Rules: Ideally it is completed in an hour. However, if it takes a bit longer to complete your masterpiece, continue and finish. Videos greater than 1.5hrs will be accepted but judged more harshly. Do not exceed 2 hrs.
Share your thoughts and show your talent.

2. Setup & API Details
The charts and any visual elements MUST pull the data from a real API (No hardcoded values).The API you choose is your choice, some options include:
https://www.alphavantage.co/documentation/
https://rapidapi.com/apidojo/api/yahoo-finance1/details
https://pokeapi.co/
https://datausa.io/api/data?drilldowns=Nation&measures=Population
This section is extremely important, make sure it is clear where this integration is happening in your code.

3. Required Features
Data Fetch & State Management


Fetch on app load (or on demand via a “Refresh” button).


Handle loading and error states.


Dashboard Layout


Minimum four different ways to visualize data
Data Table: Tabular view of the API data beneath the charts, with sortable columns.
A way to add more/new plots
A nav style side bar (does not have to lead to anything in specific)

Responsive Design & Accessibility


Layout adapts gracefully from mobile (≤ 480px) to desktop (≥ 1024px).


Code Quality & Documentation


Project structured into reusable components/modules.


Include brief comments or a README with setup instructions and any assumptions.

4. Style Examples








5. Bonus (if time permits)
Download: “Export CSV” button to download the currently filtered dataset.


Unit Tests: Basic tests for data-fetching logic or a key UI component.

6. Deliverables
Code Repository


Push your code to a public GitHub/GitLab repo.


Include clear setup and run instructions in the README.


Screen Recording


You may share the MP4 via an unlisted Youtube, Google Drive or whatever storage platform works best for you
OBS is a free software that allows you to screen record
Do not edit or make cuts in the video
Video (MP4) capturing:
Environment setup (e.g., npm install, npm start)


API integration and fetching logic


Building and customizing charts


Brief walkthrough of your finished app

Final Overview
Ensure at the end of the video you give a full scroll through of the completed app and show off what you’ve designed


Live Demo (Optional)


If you deploy to Codesandbox, Vercel, Netlify, etc., include the URL.

7. Evaluation Criteria
Category
What We’re Looking For
Functionality
All required features implemented; handles edge cases
Code Organization
Modular, readable, maintainable, with appropriate folder structure
UX / UI Design
Intuitive controls; clear data visualization; responsive
Performance
Efficient rendering, minimal re-renders, lazy loading where needed
Attention to Detail
Error handling, loading states, accessibility considerations
Creativity
Thoughtful component reuse, bonus features, polishing


Good luck! We look forward to seeing your approach to building a robust, user-friendly dashboard under time constraints.
