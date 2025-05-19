import express from "express"


import ContactRouter from "./contactPath.js";


const mainRouter=express.Router();


mainRouter.use("/contact",ContactRouter);

export default mainRouter;