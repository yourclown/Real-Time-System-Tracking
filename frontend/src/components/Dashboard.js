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

  const statusColor = {
    Healthy: "green",
    Warning: "yellow",
    Critical: "red",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Machine Sensor Dashboard</h1>
      <div>
        <p>Current: {sensorData.current?.toFixed(2)} A</p>
        <p>Voltage: {sensorData.voltage?.toFixed(2)} V</p>
        <p>Temperature: {sensorData.temperature?.toFixed(2)} °C</p>
        <p>Vibration: {sensorData.vibration?.toFixed(2)} mm/s</p>
      </div>
      <div>
        <h2>
          Status: <span style={{ color: statusColor[status] }}>{status}</span>
        </h2>
      </div>
      <h1>Developed by Ankit Prasad </h1>
    </div>
  );
}

export default Dashboard;
