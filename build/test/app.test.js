"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
describe("GET /", () => {
    describe("correct return message", () => {
        test("should response with a 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default).get("/");
            expect(response.statusCode).toBe(200);
        }));
        test("should response with a hello world message", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default).get("/");
            expect(response.text).toEqual("Hello world!");
        }));
    });
});
describe("GET /crypto", () => {
    describe("given a valid crypto", () => {
        //should response with a 200 status code
        // should response with a hello world message
        test("should response with a 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default).get("/crypto/btc");
            expect(response.statusCode).toBe(200);
        }));
        test("should response with the price of the crypto", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default).get("/crypto/btc");
            expect(parseFloat(response.body.price)).toBeGreaterThanOrEqual(0);
        }));
    });
    describe("given a invalid crypto", () => {
        //should response with a 200 status code
        // should response with a hello world message
        test("should response with a 400 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default).get("/crypto/btl");
            expect(response.statusCode).toBe(400);
        }));
    });
});
