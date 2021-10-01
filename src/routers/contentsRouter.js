import express from "express";

const contentsRouter = express.Router();

contentsRouter.get('/where', (req, res) => {
  res.send('where');
})
contentsRouter.get('/findmap', (req, res) => {
  res.send('findmap');
})
contentsRouter.get('/chall', (req, res) => {
  res.send('chall');
})

export default contentsRouter;