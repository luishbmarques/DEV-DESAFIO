import { Router } from "express";
import { 
    createCalcado, 
    readAllCalcados, 
    updateCalcado, 
    deleteCalcado 
} from "./controllers/CalcadoController";

const router = Router();

router.post("/calcados", createCalcado);
router.get("/calcados", readAllCalcados);
router.patch("/calcados/:id", updateCalcado);
router.delete("/calcados/:id", deleteCalcado);

export default router;