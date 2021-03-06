"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../services/index");
const router = express_1.default.Router();
router.get('/', (_, res) => {
    res.send("Hello world!");
});
router.get('/crypto/:symbol', index_1.getPriceOfTicket);
exports.default = router;
