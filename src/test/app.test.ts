import app from '../app'
import request from "supertest";




describe("GET /", () => {
  describe("correct return message", () => {
    test("should response with a 200 status code", async () =>{
      const response = await request(app).get("/")
      expect(response.statusCode).toBe(200)
    })

    test("should response with a hello world message", async () =>{
      const response = await request(app).get("/")
      expect(response.text).toEqual("Hello world!")
    })

  })

})

describe("GET /crypto", () => {
  describe("given a valid crypto", () => {
    //should response with a 200 status code
    // should response with a hello world message
    test("should response with a 200 status code", async () =>{
      const response = await request(app).get("/crypto/btc")
      expect(response.statusCode).toBe(200)
    })

    test("should response with the price of the crypto", async () =>{
      const response = await request(app).get("/crypto/btc")
      expect(parseFloat(response.body.price)).toBeGreaterThanOrEqual(0)
    })

  })

  describe("given a invalid crypto", () => {
    //should response with a 200 status code
    // should response with a hello world message
    test("should response with a 400 status code", async () =>{
      const response = await request(app).get("/crypto/btl")
      expect(response.statusCode).toBe(400)
    })

  })

})




