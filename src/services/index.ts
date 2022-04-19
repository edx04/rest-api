import fetch from 'cross-fetch'
import { request, Request, Response } from 'express'
const url = "https://api.binance.com/api/v3/trades?symbol="

export const getPriceOfTicket =  (req:Request,res:Response) => {
  const ticket = req.params.symbol
  const symbol = ticket.toUpperCase() + 'USDT'
  fetch(url + symbol).then(async (response) => {
      if (response.status == 400) {
          res.status(response.status).send("Invalid symbol");
      } else if(response.status > 400){
          res.status(response.status).send("Bad response from server");
      } else {
        const data = await response.json();
        const price = data[0]['price']
        res.status(200).json({"price":price});
      }

    })

}

module.exports = { getPriceOfTicket }



