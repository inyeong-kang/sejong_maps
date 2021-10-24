import express from "express";

const contentsRouter = express.Router();

contentsRouter.get("/where", (req, res) => {
  res.render("where");
});

contentsRouter.get("/findmap", (req, res) => {
  res.render("findmap");
  const url_api = "//dapi.kakao.com/v2/maps/sdk.js?appkey=2e4c067991f6e629d5c32c833be84ab1";
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
