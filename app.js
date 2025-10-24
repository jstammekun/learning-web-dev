import express from 'express';
const app = express();
const port = 8080;

// Middleware to let Express read JSON body:
app.use(express.json());

// ✅ GET endpoint (returns an object)
app.get('/info', (req, res) => {
  const data = {
    message: "Hello from GET!",
    time: new Date().toLocaleTimeString()
  };
  res.json(data); // respond as JSON
});

// ✅ POST endpoint (accepts parameters and returns a result)
app.post('/add', (req, res) => {
  const { a, b } = req.body; // extract parameters from JSON body

  // Perform an operation (addition)
  const result = Number(a) + Number(b);

  res.json({
    operation: "addition",
    a,
    b,
    result
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
