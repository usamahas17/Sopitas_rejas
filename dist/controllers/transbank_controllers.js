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
exports.guardarPago = exports.confirmarPago = exports.iniciarTransaccion = void 0;
const transbank_sdk_1 = require("transbank-sdk");
const pagos_1 = __importDefault(require("../models/pagos"));
const transaction = new transbank_sdk_1.WebpayPlus.Transaction(new transbank_sdk_1.Options('597055555532', // Código de comercio de prueba
transbank_sdk_1.IntegrationApiKeys.WEBPAY, transbank_sdk_1.Environment.Integration));
const iniciarTransaccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount, sessionId, buyOrder, returnUrl } = req.body;
    try {
        const response = yield transaction.create(buyOrder, sessionId, amount, returnUrl);
        const { token, url } = response;
        console.log("Transacción iniciada", response);
        res.send(`
    <html>
    <body onload="document.forms['transbank-form'].submit()">
      <form name="transbank-form" method="POST" action="${url}">
        <input type="hidden" name="token_ws" value="${token}" />
      </form>
    </body>
  </html>`);
    }
    catch (error) {
        console.error("Error al iniciar transacción", error);
        res.status(500).json({ error: "Error al iniciar transacción" });
    }
});
exports.iniciarTransaccion = iniciarTransaccion;
const confirmarPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = req.body.token_ws;
    try {
        const result = yield transaction.commit(token);
        console.log("resultado del pago ", result);
        yield pagos_1.default.create({
            buyOrder: result.buy_order,
            amount: result.amount,
            status: result.status,
            cardDetail: ((_a = result.card_detail) === null || _a === void 0 ? void 0 : _a.card_number) || null,
            transactionDate: result.transaction_date,
            authorizationCode: result.authorization_code || null
        });
    }
    catch (error) {
        console.error("Error al confirmar el pago", error);
    }
});
exports.confirmarPago = confirmarPago;
const guardarPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = req.query.token_ws;
    try {
        const result = yield transaction.commit(token);
        yield pagos_1.default.create({
            buyOrder: result.buy_order,
            amount: result.amount,
            status: result.status,
            cardDetail: ((_a = result.card_detail) === null || _a === void 0 ? void 0 : _a.card_number) || null,
            transactionDate: result.transaction_date,
            authorizationCode: result.authorization_code || null
        });
        console.log("pago confirmado", result);
        res.redirect("/pagoexitoso.html");
    }
    catch (error) {
        console.error(error);
    }
});
exports.guardarPago = guardarPago;
//# sourceMappingURL=transbank_controllers.js.map