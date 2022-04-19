import express from 'express'
import {getPriceOfTicket} from '../services/index'

const router = express.Router()

router.get('/',(_,res) => {
  res.send("Hello world!")
})

router.get('/crypto/:symbol',getPriceOfTicket
)

export default router
