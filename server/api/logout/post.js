import { removeCode } from "../../codes"

const handleReq = (req, res) => {
    if (!req.body.token) {
        res.status(500).json({ message: "Missing or invalid token" })
    }

    removeCode(req.body.token)
}

export default handleReq
