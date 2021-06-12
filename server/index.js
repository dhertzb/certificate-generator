import express from "express";
import router from "./routes.js";
const app = express();

const init = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router);
  app.listen(5555, () => {
    console.log("We are on!!");
  });
};

init();
