const express = require("express");

const app = express();

const PORT = 3000;

let data = [
  {
    title: "Bohemian Rhapsody",
    year: 1975,
    id: 1,
  },
  {
    title: "Like a Rolling Stone",
    year: 1965,
    id: 2,
  },
  {
    title: "Imagine",
    year: 1971,
    id: 3,
  },
  {
    title: "Smells Like Teen Spirit",
    year: 1991,
    id: 4,
  },
  {
    title: "What's Going On",
    year: 1971,
    id: 5,
  },
];

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("<h1>HOME</h1>");
});

app.get("/api/songs", (req, res, next) => {
  let sortedData = [...data];
  const sortBy = req.query.sortBy;
  const order = req.query.order;

  if (sortBy && order) {
    sortedData.sort((a, b) => {
      if (order === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else if (order === "desc") {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  res.json(sortedData);
});
app.post("/api/songs", (req, res, next) => {
  const body = req.body;
  if (body.title && body.year && body.id) {
    data.push(body);
    res.status(201).send("All right");
  } else {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/api/songs/:id", (req, res, next) => {
  const id = Number(req.params.id);
  data = data.filter((song) => song.id !== id);
  res.status(201).send("All right");
});

app.put("/api/songs/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = data.findIndex((song) => song.id === id);

  if (index === -1) {
    res.status(400).send("Not Found");
  } else {
    data[index] = body;
    res.send("All right");
  }
});

app.listen(PORT);
