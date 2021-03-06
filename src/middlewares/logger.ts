import { Request, Response, NextFunction } from "express";

import config from "../config";
const { appConfig } = config;

const logger = (req: Request, res: Response, next: NextFunction) => {
  if (appConfig.logging) {
    const time = new Date();
    console.log(
      "\n",
      `${req.method}  ${
        req.url
      }  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    );
  }

  next();
};

export default logger;
