import React, { useState, useEffect } from "react";

function Dashboard() {
  const [sensorData, setSensorData] = useState({});
  const [status, setStatus] = useState("Healthy");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/sensors");
        const data = await response.json();
        setSensorData(data);

        // Calculate status
        const temp = data.temperature;
        const vib = data.vibration;
        if (temp > 80 && vib > 20) {
          setStatus("Critical");
        } else if (temp > 80 || vib > 20) {
          setStatus("Warning");
        } else {
          setStatus("Healthy");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const statusStyles = {
    Healthy: "bg-green-100 text-green-800 border-green-400",
    Warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
    Critical: "bg-red-100 text-red-800 border-red-400",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          MachineWise Sensor Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Current</h2>
            <p className="text-2xl font-bold text-blue-600">
              {sensorData.current?.toFixed(2)} A
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Voltage</h2>
            <p className="text-2xl font-bold text-blue-600">
              {sensorData.voltage?.toFixed(2)} V
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Temperature</h2>
            <p className="text-2xl font-bold text-blue-600">
              {sensorData.temperature?.toFixed(2)} °C
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Vibration</h2>
            <p className="text-2xl font-bold text-blue-600">
              {sensorData.vibration?.toFixed(2)} mm/s
            </p>
          </div>
        </div>
        <div
          className={`p-4 rounded-lg border-2 ${statusStyles[status]} text-center`}
        >
          <h2 className="text-xl font-bold">Machine Status: {status}</h2>
        </div>
        <footer className="mt-8 text-center text-gray-600">
          <p>Created by Ankit Prasad (A.P.)</p>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;
