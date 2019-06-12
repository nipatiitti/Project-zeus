import express from "express"

import token from "./token"
import logout from "./logout"
import loggedin from "./loggedin"

import handleReq from "./post"

const router = express.Router({ mergeParams: true })

router.use("/token", token)
router.use("/logout", logout)
router.use("/loggedin", loggedin)
router.post("/", (req, res) => handleReq(req, res))

export default router
