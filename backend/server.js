const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.get("/api/sensors", (req, res) => {
  const data = {
    current: Math.random() * 20,
    voltage: 200 + Math.random() * 40,
    temperature: 20 + Math.random() * 80,
    vibration: Math.random() * 30,
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
