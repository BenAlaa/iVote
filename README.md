# iVote
This project will solidify your understanding of React and Redux while giving you a chance to express your creativity. You’ll practice improving the predictability of your application’s state; establish strict rules for getting, listening, and updating the store; and identify what state should live inside of Redux and what state should live inside of React components.

This is the final assessment project for Udacity's React & Redux course in egFWD Advanced Web Development Nanodegree.




## Development Tools
* Tailwind css:  [https://tailwindcss.com/docs] Rapidly build modern websites without ever leaving your HTML.

* React Icons: [https://react-icons.github.io/react-icons] Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
* React Toastify: [https://www.npmjs.com/package/react-toastify] 🎉 React-Toastify allows you to add notifications to your app with ease. No more nonsense!
* Redux DevTools
* Redux
* Redux-thunk
* Craco
* Redux Loading Bar




# Start up the application guide
In this section you setup and run the application step by step.

## 1. Install all the required dependencies and packages

In the project directory, you can run: 
### `npm install`

## 2. Start up the application

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.





# Test Creadintials

1. `email: sarah.edo@ivote.com`,  `password: 12345`
2. `email: tyler.mcginnis@ivote.com`,  `password: 12345`
3. `email: john.doe@ivote.com`,  `password: 12345`






## Project Overview
- In the "Would You Rather?" Project, you'll build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.



## App Functionality
- The person using your application should have a way of logging in as an existing user or create new user.
- Your application should work correctly regardless of which user is selected.
- Once the user logs in, the home page should be shown ['/home].


- We always want to make sure we know who the logged in user is, so information about the logged in user should appear on the page.
- If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown.
- The application allows the user to log out and log back in.


- Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root.
- The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).
- The unanswered questions should be shown by default, and the name of the logged in user should be visible on the page.


- What would be the point of seeing answered and unanswered polling questions if we couldn’t actually vote or see the results? Each polling question should link to the details of that poll.
- The details of each poll should be available at [questions/:question_id].


-When a poll is clicked on the home page, the following is shown:

  1. Text “Would You Rather”;
  2. Avatar of the user who posted the polling question; and
  3. Two options.


For answered polls, each of the two options contains the following:

  1. Text of the option;
  2. Number of people who voted for that option; and
  3. Percentage of people who voted for that option.
- The option selected by the logged-in user should be clearly marked.


- Since we want to make sure our application creates a good user experience, the application should show a 404 page if the user is trying to access a poll that does not exist.
- It should also display a navigation bar so that the user can easily navigate anywhere in the application.



- So what happens when someone votes in a poll? Upon voting in a poll, all of the information of an answered poll should be displayed. 
- The user’s response should be recorded and clearly visible on the poll details page. Users can only vote once per poll;
- they shouldn’t be allowed to change their answer after they’ve voted -- no cheating allowed! When the user comes back to the home page, the polling question should appear in the “Answered” column.




- It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions should be available at the /add route.
- The application should show the text “Would You Rather” and have a form for creating two options.
- Upon submitting the form, a new poll should be created, the user should be taken to the home page, and the new polling question should appear in the correct category on the home page.




- But how can we know how many questions each user has asked and answered? Let’s get some healthy competition going here! 
- The application should have a leaderboard that’s available at the [/leaderboard] route. Each entry on the leaderboard should contain the following:

    1. User’s name;
    1. User’s picture;
    3. Number of questions the user asked; and
    4. Number of questions the user answered





- Users should be ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered.
- The more questions you ask and answer, the higher up you move.

- The user should be able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll both from within the app and by typing in the address into the address bar.
- To make sure we’re showing the data that is relevant to the user, the application should require the user to be signed in order to access those pages.
