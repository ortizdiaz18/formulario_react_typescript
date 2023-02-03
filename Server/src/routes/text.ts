import express from 'express';
import {addText, getTexts} from '../controllers/text.service'
const router = express.Router();

router.get("/getTexts",getTexts)
router.post("/addText", addText)

module.exports=router;
