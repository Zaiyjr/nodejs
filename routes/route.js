import {Insert} from '../controllers/test.js'
import express from 'express'
const router = express.Router()

const test = '/test'
router.post(`${test}/insert`,Insert)
export default router