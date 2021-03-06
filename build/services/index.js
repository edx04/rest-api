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
exports.getPriceOfTicket = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const url = "https://api.binance.com/api/v3/trades?symbol=";
const getPriceOfTicket = (req, res) => {
    const ticket = req.params.symbol;
    const symbol = ticket.toUpperCase() + 'USDT';
    (0, cross_fetch_1.default)(url + symbol).then((response) => __awaiter(void 0, void 0, void 0, function* () {
        if (response.status == 400) {
            res.status(response.status).send("Invalid symbol");
        }
        else if (response.status > 400) {
            res.status(response.status).send("Bad response from server");
        }
        else {
            const data = yield response.json();
            const price = data[0]['price'];
            res.status(200).json({ "price": price });
        }
    }));
};
exports.getPriceOfTicket = getPriceOfTicket;
module.exports = { getPriceOfTicket: exports.getPriceOfTicket };
