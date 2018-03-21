import express from 'express'

import handleDelete from './delete'
import handleAdd from './add'

const router = express.Router({mergeParams: true})

router.post('/delete', (req, res) => handleDelete(req, res))
router.post('/add', (req, res) => handleAdd(req, res))

export default router
