import express from "express"

import token from "./token"
import logout from "./logout"
import loggedin from "./loggedin"

import handlePost from "./post"
import handleGet from "./get"

const router = express.Router({ mergeParams: true })

router.use("/token", token)
router.use("/logout", logout)
router.use("/loggedin", loggedin)

router.post("/", (req, res) => handlePost(req, res))
router.get("/", (req, res) => handleGet(req, res))

export default router
