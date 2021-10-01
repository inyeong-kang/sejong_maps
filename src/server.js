import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import contentsRouter from "./routers/contentsRouter.js";
import navsRouter from "./routers/navsRouter.js";

const PORT = 5000;

const app = express();
const logger = morgan("dev");

// set view engine
app.set('view engine', 'ejs');
app.set('views', process.cwd() + "/src/views");
app.use(express.static(__dirname + '/public'));
app.use(logger);

// use Routers
app.use("/", globalRouter);
app.use("/contents", contentsRouter);
app.use("/navs", navsRouter);


const handleListening = () => 
console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);