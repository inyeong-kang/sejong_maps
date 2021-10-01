import express from "express";
import morgan from "morgan";

const PORT = 5000;

const app = express();
const logger = morgan("dev");

const globalRouter = express.Router();

app.set('view engine', 'ejs');
app.set('views', process.cwd() + "/src/views");

app.use("/", globalRouter);
app.use(logger);

globalRouter.get('/', (req, res) => {
  res.render('index');
})

const handleListening = () => 
console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);