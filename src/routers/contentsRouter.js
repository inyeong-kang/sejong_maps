import express from "express";

const contentsRouter = express.Router();

contentsRouter.get("/where", (req, res) => {
  res.render("where");
});
contentsRouter.get("/findmap", (req, res) => {
  res.render("findmap");
});
contentsRouter.get("/chall", (req, res) => {
  res.render("chall");
});

export default contentsRouter;
