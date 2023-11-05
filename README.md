# Typing Master

## Description deliverable

### Elevator pitch
Have you ever wanted to increase your typing speed? Typing Master is he ultimate online typing game that will turbocharge your typing skills while having a blast! Whether you're a seasoned typist looking to sharpen your speed or a newbie eager to learn, our game offers an exhilarating and educational experience.
### Design
![Screenshot 2023-09-23 192756](https://github.com/ao6gk4au4a83/startup/assets/108373757/03dc78be-6f5c-4c9d-8357-1257563b5278)

Here is a sequence diagram：

![1 1](https://github.com/ao6gk4au4a83/startup/assets/108373757/3f7a10b6-9ef7-4511-b87a-cf6caf80a1dd)

### Key features

Key features: 
- Secure login over Https 
- Ability to change the items in the game
- Results are persistently stored
- Ability to turn on/off the sound
### Technologies

- HTML: Ensuring the correct HTML structure for the application with two distinct HTML pages—one for login and another for voting, complete with hyperlinks to relevant artifacts.
- CSS: Implementing application styling to ensure an appealing appearance across various screen sizes. This involves using appropriate whitespace, color schemes, and achieving adequate contrast.
- JavaScript: Employing JavaScript to handle tasks such as user login, displaying choices, facilitating the voting process, presenting other users' votes, and making backend endpoint calls.
- Service: Establishing a backend service equipped with endpoints for essential functionalities, including user login, retrieving available choices, submitting votes, and checking vote statuses.
- DB: Utilizing a database to store user information, available choices, and recorded votes securely.
- Login: Implementing user registration and authentication processes, securely storing user credentials in the database, and restricting voting privileges to authenticated users only.
- WebSocket: Employing WebSocket technology to broadcast each user's votes to all other users in real-time.
- React: Converting the application to utilize the React web framework for enhanced functionality and user experience.
