import { allCodes } from "../../codes"

const handleReq = (req, res) => {
    res.json(allCodes())
}

export default handleReq
