import express from "express";

const navsRouter = express.Router();

navsRouter.get('/', (req, res) => {
  res.render('index');
})

export default navsRouter;