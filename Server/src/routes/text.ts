import express from 'express';
import {addText, getTexts, deleteText} from '../controllers/text.service'
const router = express.Router();

router.get("/getTexts",getTexts)
router.post("/addText", addText)
router.delete("/deleteText/:index", deleteText)

module.exports=router;
