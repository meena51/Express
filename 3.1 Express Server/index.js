
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
  res.send("Hello World");
});
app.get("/about", (req,res)=>{
  res.send("<h1>Meena </h1>");
});

app.get("/contact",(req,res)=>{
  res.send("<h1>Contact Me</h1><p>Phone: 123456</p>")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
