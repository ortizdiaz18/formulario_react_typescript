import{Request, Response} from "express"
export const textos : string [] = [];

export const addText =(req: Request, res:Response)=>{
  const {text} = req.body;
  textos.push(text);
  res.send(textos) ;
}

export const getTexts = (req: Request,res: Response)=>{
  textos.length>0? res.send(textos):res.json({msg:"No hay textos creados"})

}



