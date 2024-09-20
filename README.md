# Traffic Light Control App


Traffic Light Control App - Documentation
Overview
The Traffic Light Control App is a simple simulation of a traffic control system that visually represents the functioning of traffic lights. Users can manually start and reset the traffic light cycle through the provided controls, simulating the transitions between red, yellow, and green lights. This app can be used for educational purposes or as a demonstration of basic UI functionality.

Tech Stack
Frontend Framework: React.js
Styling: CSS/Chakra UI
Deployment: Netlify
Installation/Setup Instructions
To run the app locally, follow these steps:

Clone the repository:

bash
Copy code
git clone [repository-link]
cd traffic-light-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Key Features
Traffic Light Simulation: Displays a simulation of a traffic light system that can be controlled manually.
Start and Reset Controls: The traffic light sequence doesn't start automatically. Users need to press the Start button to begin the sequence and can use the Reset button to stop the current cycle and restart from the beginning.
Testing
Currently, no tests have been implemented for this app.

Known Issues/Limitations
The timing intervals for the lights are static and cannot be configured through the UI.
No automated tests are implemented for the app’s functionality.
Future Enhancements
Pause Button: Introduce a pause feature to allow users to temporarily halt the light cycle.
Configurable Timers: Allow users to adjust the duration for each light (red, yellow, green) through a settings menu.
Pedestrian Light Addition: Add a pedestrian signal system that works in sync with the traffic lights.
Manual Light Control: Enable users to manually cycle through the light states.
