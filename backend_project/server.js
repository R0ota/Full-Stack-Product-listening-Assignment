const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use("/images", express.static(path.join(__dirname, "images")));

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  const filePath = path.join(__dirname, "products.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading products.json:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const products = JSON.parse(data);
    res.json(products);
  });
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
