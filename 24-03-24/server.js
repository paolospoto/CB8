require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/books");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/user");

const app = express();
const db = mongoose.connection;

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connessione con il database stabilita"));

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

//Per creare il login serve il middleware
const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return res.status(400).json({ message: "Token non valido" });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res
          .status(403)
          .json({ message: "Non hai i permessi per accedere" });
      req.user = user;
      next();
    });
  }
};

app.get("/", (req, res, next) => {
  res.send("<h1>Homepage</h1>");
});

app.get("/books", authToken, async (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  try {
    const count = await Book.countDocuments();
    const totalPages = Math.ceil(count / limit);

    const books = await Book.find().skip(skip).limit(limit);

    res.json({
      totalPages,
      currentPage: page,
      totalRecords: count,
      books,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/books/:id", authToken, async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/books", async (req, res, next) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Registrazione

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    const newUser = await user.save();
    res.status(201).json({ message: "Utente registrato", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Registrazione faillta" });
  }
});

//login

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (user === null)
    return res.status(400).json({ message: "Utente non trovato" });
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({ accessToken });
    }
  } catch (error) {
    console.error("errore", error);
    res.json({ message: "Non sei autorizzato" });
  }
});

app.delete("/books/:id", async (req, res, next) => {
  try {
    if (req.params.id === "all") {
      await Book.deleteMany();
      res.status(201).json({ message: "All books deleted" });
    } else {
      const book = await Book.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: "Book deleted" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/books/:id", async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      re.status(404).json({ message: "Book not found!" });
    } else {
      const { title, author, year } = req.body;

      if (title && author && year) {
        book.title = title;
        book.author = author;
        book.year = year;

        await book.save();
        res.status(201).json({ message: "Book correctly modified" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(8000);
