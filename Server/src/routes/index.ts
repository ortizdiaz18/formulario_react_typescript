import {Router, Require, Response} from 'express'
import {readdirSync} from 'fs'
const router = Router();
const pathRouter = `${__dirname}`

const removeExtension = (fileName:string) : string=> {
  return fileName.split(".").shift();

};

readdirSync(pathRouter).filter((file: string) => {
  const withOutExt = removeExtension(file);
  const skipe = ["index"].includes(withOutExt);


  if (!skipe) {
    router.use(`/${withOutExt}`, require(`./${withOutExt}`));
    console.log("---->", withOutExt);
  }
});


router.get("*", (req:Require, res:Response) => {
  res.status(404).send({ Error: "Not Found" });
});


export default router;
