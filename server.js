const express = require('express');
const app = express();
app.use(express.json());

// Validate inputs
function validateNumbers(num1, num2) {
    if (isNaN(num1)) {
        return { error: "Error!. num1 must be a number." };
    } else if (isNaN(num2)) {
        return { error: "Error!. num2 must be a number." };
    }
    return null;
}

// Addition
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  res.json({ result: num1 + num2 });
});

// Subtraction
app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  res.json({ result: num1 - num2 });
});

// Multiplication
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  res.json({ result: num1 * num2 });
});

// Division
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json(error);
  if (num2 === 0) return res.status(400).json({ error: "Cannot divide by zero." });
  res.json({ result: num1 / num2 });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

