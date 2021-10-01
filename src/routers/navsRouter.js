import express from "express";

const navsRouter = express.Router();

navsRouter.get('/', (req, res) => {
  res.render('index');
})
navsRouter.get('/howtocome', (req, res) => {
  res.send('howtocome');
})
navsRouter.get('/tips', (req, res) => {
  res.send('tips');
})
navsRouter.get('/comments', (req, res) => {
  res.send('comments');
})


export default navsRouter;