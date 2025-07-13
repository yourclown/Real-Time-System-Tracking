This straightforward MachineWise web dashboard was constructed using a Node.js + Express backend and a React.js frontend. Via a /api/sensors endpoint, the backend provides simulated sensor data (current, voltage, temperature, and vibration), which is produced at random for every request. Using useEffect and setInterval, the frontend retrieves this data every 5 seconds, shows it, and determines the machine status ("Healthy," "Warning," or "Critical") based on vibration (> 20 mm/s) and temperature (> 80°C). To act as a warning when thresholds are exceeded, the status is displayed using color-coded text (green, yellow, and red).

I implemented the status logic in the frontend to keep the backend light, used random mock data for simplicity, and separated the frontend and backend for clarity. I would substitute real sensor data for the mock data in a production-grade version.

src/App.js: Entry point for the React app.



src/index.css: Tailwind CSS configuration.



tailwind.config.js: Tailwind CSS setup file.



Install Backend Dependencies: Navigate to the backend folder and install dependencies:

cd backend
npm install



Install Frontend Dependencies: Navigate to the frontend folder and install dependencies:

cd ../frontend
npm install



Start the Backend: In the backend folder, run the server:

node server.js

The backend will run on http://localhost:3001.



Start the Frontend: In a separate terminal, navigate to the frontend folder and start the React app:

cd frontend
npm start

The frontend will run on http://localhost:3000 and open automatically in your browser.



Access the Dashboard: Open http://localhost:3000 in your browser to view the dashboard, which displays sensor data and machine status, updating every 5 seconds.