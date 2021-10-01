import express from "express";

const navsRouter = express.Router();

// global로 바꿔야함
navsRouter.get("/", (req, res) => {
  res.render("index");
});
navsRouter.get("/howtocome", (req, res) => {
  res.render("howtocome");
});
navsRouter.get("/tips", (req, res) => {
  res.render("tips");
});

navsRouter.get("/store", (req, res) => {
  res.render("tip/store");
});
navsRouter.get("/place", (req, res) => {
  res.render("tip/place");
});
navsRouter.get("/tmi", (req, res) => {
  res.render("tip/tmi");
});

navsRouter.get("/comments", (req, res) => {
  res.render("comments");
});

export default navsRouter;
