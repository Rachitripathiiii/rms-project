const express = require("express");
const app = express();

console.log("ACTIVE SERVER FILE LOADED");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let applications = [];

app.post("/apply", (req, res) => {
  console.log("POST /apply route hit");

  const { name, email, phone, jobRole, message } = req.body;

  applications.push({
    name,
    email,
    phone,
    jobRole,
    message,
    submittedAt: new Date()
  });

  res.json({ message: "Application submitted successfully!" });
});

app.get("/applications", (req, res) => {
  console.log("GET /applications route hit");
  res.json(applications);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

