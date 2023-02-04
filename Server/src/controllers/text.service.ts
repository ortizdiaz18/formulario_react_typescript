import{Request, Response} from "express"
export const textos : string [] = [];

export const addText =(req: Request, res:Response)=>{
  const {text} = req.body;
  textos.push(text);
  res.json({msg:"Se ha creado tu nota con exito"}) ;
}

export const getTexts = (req: Request,res: Response)=>{
  textos.length>0? res.json({txt:textos,msg:"Estos son todas tus notas"}):res.json({txt:[],msg:"No tienes ninguna nota en tu bloc, crea tus notas y no olvides nada!"})

}

export const deleteText = (req: Request,res: Response)=>{
  let {index} = req.params;
  textos.splice(parseInt(index),1)
  res.json({msg:"Se ha eliminado la nota con exito"}) ;

}



