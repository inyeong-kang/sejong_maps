import express from "express";

const contentsRouter = express.Router();

contentsRouter.get("/where", (req, res) => {
  res.render("where");
});

contentsRouter.get("/findmap", (req, res) => {
  res.render("findmap");
});

contentsRouter.get("/chall", (req, res) => {
  res.render("chall/sjchall");
});

contentsRouter.get("/one", (req, res) => {
  res.render("chall/one");
});
contentsRouter.get("/two", (req, res) => {
  res.render("chall/two");
});
contentsRouter.get("/three", (req, res) => {
  res.render("chall/three");
});
contentsRouter.get("/four", (req, res) => {
  res.render("chall/four");
});

export default contentsRouter;
