const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Camden Health System</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8ff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .welcome-container {
          text-align: center;
          background-color: #ffffff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #2c3e50;
          font-size: 2.5em;
          margin-bottom: 20px;
        }
        p {
          color: #34495e;
          font-size: 1.2em;
        }
        .footer {
          margin-top: 30px;
          font-size: 0.9em;
          color: #777;
        }
      </style>
    </head>
    <body>
      <div class="welcome-container">
        <h1>Welcome to Camden Health System</h1>
        <p>Your trusted partner in healthcare innovation.</p>
        <div class="footer">
          This application is live by <strong>Muhammad Qasim, Sr. DevOps Engineer</strong>.
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});