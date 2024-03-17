import express from "express";
const app = express();

const users = [
  {
    name: "Rajeev",
    age: 29,
  },
  {
    name: "dummy",
    age: 21,
  },
];

app.use(express.json());
app.get("/users", (req, res, next) => {
  if (users.length > 0) {
    res.json({ status: 201, message: "Users are found", data: users });
  } else {
    res.json({ status: 404, message: "Users are found", data: null });
  }
});

app.get("/user", (req, res, next) => {
    console.log(req.body);
  const user = users.find((item) => {
    return item.name === "Rajeev";
  });
  if (user) res.json({ status: 201, message: "User is found", data: user });
  else res.json({ status: 404, message: "User not found", data: null });
});

app.post("/postUser", (req, res, next) => {
  const user = { name: "new", age: 19 };
  if (user) {
    users.push(user);
    res.json({ status: 201, message: "User saved successfully", data: user });
  } else {
    res.json({ status: 500, message: "User not saved", data: null });
  }
});

app.get('/example', (req, res, next) => {
  try {
    // Your code that might throw an error
    throw new Error('Something went wrong');
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

app.use((req, res, next) => {
  console.log('calling interbetween');
  next();
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Again Server Error');
})

app.listen(3000, () => {
  console.log("server is listening");
});
