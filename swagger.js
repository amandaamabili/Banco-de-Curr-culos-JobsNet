const dotenv = require("dotenv");
const swaggerAutogen = require("swagger-autogen")();
const baseFile = require("./swagger.json");

const outputFile = "./swagger_output.json";

const endpointsFiles = ["./src/routes.js"];

dotenv.config({
    path: ".env",
});

const contextPath = process.env.CONTEXT_PATH || "";

baseFile.basePath = `${contextPath}/api`;

swaggerAutogen(outputFile, endpointsFiles, baseFile);
