import express from "express"

import handleReq from "./get"

const router = express.Router({ mergeParams: true })

router.get("/", (req, res) => handleReq(req, res))

export default router
