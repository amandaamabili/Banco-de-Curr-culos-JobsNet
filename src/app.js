import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import api from './routes';
import swaggerUi from 'swagger-ui-express'
const swaggerFile = require("../swagger_output.json");

import {connectToMongo} from "./config";

dotenv.config({
    path: "src/.env",
});

const port = process.env.PORT || 3000;
const contextPath = process.env.CONTEXT_PATH || "";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(`/${contextPath}/api`, api);

app.use(`/${contextPath}/swagger`, swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get(`/${contextPath}`, (req, res) => {
    res.redirect(`${contextPath}/swagger`);
});
app.get(`/${contextPath}/health`, ((req, res) =>
    {
        res.status(200).send({message:"JobsNet is running!!!"})
    }
))

connectToMongo().then(() => {
    app.listen(port, () => {
        console.info(`JobsNET listening on :${port}${contextPath}!`);
    });
})
