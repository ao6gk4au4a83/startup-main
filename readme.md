# 7 New World Wonders Quiz Game

## Project Description

### Elevator Pitch

Engage in a thrilling journey around the globe with our "7 New World Wonders Quiz Game"! Designed for enthusiasts of history, culture, and travel, this game challenges players to test their knowledge about the seven new wonders of the world. Experience a fun and educational way to explore these magnificent sites, right from your phone.

### Game Design
<img src="https://static.vecteezy.com/system/resources/previews/006/140/088/original/design-of-quiz-in-gradient-color-question-and-answers-template-quiz-game-in-tv-show-vector.jpg"/>


The game includes a user-friendly interface with vibrant graphics that represent each of the seven wonders. Players will navigate through a series of questions, with each question delving into fascinating facts and trivia about these iconic landmarks.

#### Key Visuals

- Interactive map showing the locations of the wonders.
- High-quality images and videos of each wonder.
- Engaging and informative question format.

### Key Features

- **Interactive Quiz Format**: Multiple-choice and true/false questions to test players' knowledge.
- **Learning Mode**: Informative snippets and facts about each wonder.
- **Score Tracking**: Players can track their progress and scores.
- **Social Sharing**: Ability to share scores and challenge friends.
- **Regular Updates**: New questions and facts added regularly.

### Technologies

We are leveraging the following technologies:

- **HTML & CSS**: For structuring and styling the game's interface.
- **JavaScript**: To create interactive elements and handle game logic.
- **React**: For building a dynamic, single-page application.
- **Node.js**: Backend server for handling user data and scores.
- **MongoDB**: To store user profiles and game data.
- **WebSocket**: For real-time updates and multiplayer functionalities.

## HTML deliverable

Focused on constructing the foundational structure of the application using HTML.

- **HTML Page Design**: Created two distinct HTML pages for enabling user login and facilitating the voting process.
- **Navigation Links**: Integrated automatic redirection from the login to the voting page, with each voting option linked for straightforward selection.
- **Textual Content**: Described each voting choice with clear textual elements.
- **Image Integration**: Currently, image inclusion is pending and will be addressed in future updates.
- **Login Functionality**: Designed with a user-friendly input box and a submit button for the login process.
- **Database Connection**: Dynamically displayed voting choices, sourced directly from the database.
- **Real-Time Data with WebSocket**: Implemented WebSocket to reflect the live count of voting results.

## CSS deliverable

This deliverable involved enhancing the visual appeal and user experience of the application through CSS.

- **Layout Design**: Meticulously styled the header, footer, and main content body for a cohesive look.
- **Navigation Aesthetics**: Improved the navigation elements by removing underlines and applying a new color scheme to anchor elements.
- **Responsive Design**: Ensured the application is fully responsive, providing an optimal viewing experience across all device sizes and window dimensions.
- **Visual Harmony**: Focused on creating a visually appealing interface with balanced contrast and whitespace.
- **Typography Consistency**: Applied uniform fonts throughout the application to maintain consistency in text presentation.
- **Image Styling**: Planning to style images upon their future integration into the application.

## JavaScript deliverable

This deliverable focused on implementing core functionalities using JavaScript to ensure the application operates effectively for an individual user. Additionally, placeholders for future enhancements were integrated.

- **User Login**: Enhanced the login process such that pressing 'Enter' or clicking the login button redirects the user to the voting page.
- **Vote Count Display**: Temporarily utilizing local storage to display voting counts, with plans to transition to database-driven data retrieval.
- **Simulated Real-Time Updates**: Employed `setInterval` function for mock-updating random vote counts. This feature is set to evolve into real-time updates using WebSocket communications.
- **Dynamic Application Logic**: Implemented logic that alters highlight and ranking numbers based on user interactions and selections.

## Service deliverable

This phase involved the addition of backend endpoints crucial for handling the vote receiving and total counting processes.

- **Node.js/Express HTTP Service Implementation**: Successfully set up and deployed the Node.js/Express HTTP service.
- **Frontend Static Middleware**: Implemented static middleware to serve frontend assets effectively.
- **Third-Party Endpoint Integration**: Future plans to incorporate calls to third-party endpoints, pending implementation.
- **Development of Backend Service Endpoints**: Established essential backend endpoints, including a placeholder for user login and persistence on the server, alongside endpoints dedicated to handling voting processes.
- **Frontend-Backend Communication**: Achieved communication between the frontend and backend services using the `fetch` function for data exchange.

## DB deliverable

This deliverable was focused on establishing a robust database solution for storing application data, specifically user votes.

- **MongoDB Atlas Setup**: Successfully created and configured a MongoDB Atlas database for the application.
- **Endpoint Development for Data Processing**: Enhanced existing stubbed endpoints to process and transmit data to the MongoDB database.
- **Data Storage in MongoDB**: Achieved the objective of reliably storing application data, including user votes, within the MongoDB database.
## Login deliverable

This deliverable focused on integrating user authentication functionality to link votes with individual user accounts.

- **User Registration Process**: Implemented a feature for creating new user accounts in the database, enabling new users to participate in the voting process.
- **Vote Association with Existing Users**: Developed logic to store and associate votes with existing user accounts, ensuring user-specific vote tracking.
- **Credential Storage in MongoDB**: Utilized MongoDB to securely store user credentials along with their voting data.
- **Frontend Voting Restrictions**: Established a mechanism where voting is only enabled post-login, currently enforced through frontend logic with plans for backend integration.
## WebSocket deliverable


This deliverable was centered around implementing WebSocket technology to enable real-time updates of voting data in the frontend.

- **WebSocket Connection on Backend**: Successfully established a backend setup that listens for WebSocket connections.
- **WebSocket Integration in Frontend**: Implemented the functionality for the frontend to initiate and maintain WebSocket connections.
- **Real-Time Data Transmission**: Achieved seamless data transmission over the WebSocket connection, ensuring timely updates.
- **Live Vote Display**: Enabled the dynamic display of user votes in real-time on the frontend, a feature that significantly enhances user experience and interaction.
## React deliverable


Despite the initial plan to use React, this deliverable involved transitioning the application to Vue, following approval to utilize existing expertise in Vue over React.

- **Application Bundling and Transpilation**: Successfully completed the setup for bundling and transpiling the application using Vue-specific tools.
- **Vue Components Development**: Created distinct Vue components for key functionalities, including the login interface, voting list, and individual vote interactions.
- **Vue Router Implementation**: Integrated Vue Router to manage seamless navigation between the login and voting components.
- **State Management with Vue**: Adapted Vue's class property mechanism for tracking and managing vote state changes, offering an alternative to React's `useState` hook.


