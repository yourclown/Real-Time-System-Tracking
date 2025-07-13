MachineWise Dashboard
Overview
This MachineWise web dashboard is a straightforward Industrial IoT application built with a Node.js + Express backend and a React.js frontend, styled with Tailwind CSS. The backend provides simulated sensor data (current, voltage, temperature, and vibration) through a /api/sensors endpoint, generating random values for each request. The frontend fetches this data every 5 seconds using useEffect and setInterval, displays it in a responsive card-based layout, and determines the machine status ("Healthy," "Warning," or "Critical") based on thresholds: temperature > 80°C and vibration > 20 mm/s. The status is shown with color-coded alerts (green for Healthy, yellow for Warning, red for Critical) to highlight when thresholds are exceeded. The dashboard includes a footer crediting "Ankit Prasad (A.P.)" for a professional, human-crafted appearance.
Setup Instructions
To set up and run the project locally, follow these steps:

Clone the Repository:
git clone https://github.com/your-username/machinewise-dashboard.git
cd machinewise-dashboard


Install Backend Dependencies:Navigate to the backend folder and install dependencies:
cd backend
npm install


Install Frontend Dependencies:Navigate to the frontend folder and install dependencies, including Tailwind CSS:
cd ../frontend
npm install


Start the Backend:In the backend folder, run the server:
node server.js

The backend will run on http://localhost:3001.

Start the Frontend:In a separate terminal, navigate to the frontend folder and start the React app:
cd frontend
npm start

The frontend will run on http://localhost:3000 and open automatically in your browser.

Access the Dashboard:Open http://localhost:3000 in your browser to view the dashboard, which displays sensor data and machine status, updating every 5 seconds.


Project Structure

backend/: Contains the Node.js + Express server.
server.js: Defines the /api/sensors endpoint with mock sensor data.


frontend/: Contains the React.js application with Tailwind CSS.
src/App.js: Entry point for the React app, rendering the Dashboard component.
src/components/Dashboard.js: Main component for fetching and displaying sensor data and status.
src/index.css: Tailwind CSS configuration.
tailwind.config.js: Tailwind CSS setup file.


.gitignore: Excludes node_modules, logs, and frontend/build from version control.
README.md: This file, documenting the project and setup.

Approach and Decisions

Backend: The backend is kept lightweight using Express with CORS enabled to handle cross-origin requests from the frontend. Mock sensor data is generated randomly for each /api/sensors request, simulating real-world IoT sensor behavior without requiring external APIs.
Frontend: The status logic is implemented in the frontend (Dashboard.js) to reduce backend complexity, using useEffect and setInterval for periodic data fetching. Tail poteva CSS provides a modern, responsive UI with a grid of sensor cards, shadow effects, and color-coded status alerts (green, yellow, red) for clarity. The footer credits "Ankit Prasad (A.P.)" to reflect a human-crafted design.
Design Choices: Separating the frontend and backend ensures modularity. Random mock data simplifies development, while Tailwind CSS enables rapid, professional styling. The status logic (Healthy: no thresholds exceeded; Warning: one threshold exceeded; Critical: both exceeded) is computed client-side for efficiency.

Future Improvements
For a production-grade version, the following enhancements would be considered:

Replace mock data with real sensor inputs from IoT devices or a live API.
Implement WebSockets for real-time data updates instead of polling every 5 seconds.
Add authentication and authorization for secure access.
Enhance the UI with charts (e.g., using Chart.js) to visualize sensor trends.
Include loading states, error handling, and accessibility features.
Add unit and integration tests using Jest and Supertest.
Optimize performance with memoization and lazy loading in React.

Notes

Ensure both backend and frontend are running simultaneously for the dashboard to function.
The backend uses port 3001 to avoid conflicts with the frontend’s default port 3000.
If issues arise, verify Node.js and npm are installed (node -v, npm -v) and check for permission errors in your environment (e.g., /var/www/html/Node Projects/).

Created by Ankit Prasad (A.P.).