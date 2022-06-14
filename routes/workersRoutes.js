import express from "express"
import workersCtrl from "../controllers/workersCtrl.js"

const router = express.Router()

router.get("/getAllWorkers", workersCtrl.getAllWorkers)
router.get("/getOneWorker", workersCtrl.getOneWorker)
router.post("/postWorker", workersCtrl.postWorker)


export default router