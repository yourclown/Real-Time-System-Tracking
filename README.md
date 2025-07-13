MachineWise Web Dashboard
A straightforward web dashboard for monitoring simulated machine sensor data and status in real-time. This application demonstrates a full-stack approach with a Node.js + Express backend providing mock sensor data and a React.js frontend for visualization and status determination.

✨ Features
Real-time Sensor Monitoring: Displays simulated data for current, voltage, temperature, and vibration.

Automated Data Refresh: Frontend fetches new sensor data every 5 seconds.

Intelligent Machine Status: Determines machine health ("Healthy," "Warning," or "Critical") based on temperature and vibration thresholds.

Color-Coded Status Alerts: Visual warnings for quick identification of machine status (Green: Healthy, Yellow: Warning, Red: Critical).

Separated Frontend & Backend: Clear architectural separation for maintainability and scalability.

🚀 Tech Stack
Backend:

Node.js: JavaScript runtime environment.

Express.js: Fast, unopinionated, minimalist web framework for Node.js.

Frontend:

React.js: JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

📁 Project Structure
machinewise-dashboard/
├── backend/
│   ├── server.js             # Node.js Express backend server
│   └── package.json          # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.js            # Main React application component
│   │   ├── index.css         # Global CSS (Tailwind imports)
│   │   └── ... (other React components)
│   ├── public/
│   │   └── index.html        # Frontend HTML entry point
│   ├── package.json          # Frontend dependencies
│   └── tailwind.config.js    # Tailwind CSS configuration
├── .gitignore
├── README.md                 # This file
└── package.json              # (Optional) Monorepo root package.json if applicable

⚙️ Setup and Installation
Follow these steps to get the MachineWise Web Dashboard up and running on your local machine.

1. Clone the Repository
git clone <repository-url>
cd machinewise-dashboard

2. Install Backend Dependencies
Navigate into the backend directory and install the necessary Node.js packages:

cd backend
npm install

3. Install Frontend Dependencies
Navigate into the frontend directory and install the necessary Node.js packages:

cd ../frontend
npm install

▶️ Running the Application
You will need two separate terminal windows for the backend and frontend.

1. Start the Backend Server
In your first terminal, from the backend directory, run the server:

cd backend
node server.js

The backend server will start on http://localhost:3001.

2. Start the Frontend React App
In your second terminal, from the frontend directory, start the React development server:

cd frontend
npm start

The frontend application will start on http://localhost:3000 and should automatically open in your browser.

🌐 Access the Dashboard
Once both the backend and frontend are running, open your web browser and navigate to:

http://localhost:3000

The dashboard will display the simulated sensor data, updating every 5 seconds, along with the calculated machine status.

💡 Design Choices & Future Enhancements
Frontend Status Logic: The machine status logic is intentionally implemented in the frontend to keep the backend lightweight and focused solely on data provision.

Mock Data: Simulated random data is used for simplicity in this demonstration. In a production environment, this would be replaced with real-time sensor data feeds (e.g., from IoT devices, MQTT brokers, or dedicated data streams).

Separation of Concerns: The clear separation between frontend and backend allows for independent development, scaling, and deployment.



