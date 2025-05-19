import { Request, Response } from "express";
import { WebpayPlus, Options, IntegrationApiKeys, Environment } from "transbank-sdk";
import Pago from "../models/pagos";

const transaction = new WebpayPlus.Transaction(
    new Options(
        '597055555532', // Código de comercio de prueba
        IntegrationApiKeys.WEBPAY,
        Environment.Integration
    )
);

export const iniciarTransaccion = async (req: Request, res: Response) => {
    const { amount, sessionId, buyOrder, returnUrl } = req.body;


    try {
        const response = await transaction.create(buyOrder, sessionId, amount, returnUrl);
        const { token, url } = response;

        console.log("Transacción iniciada", response);
        res.send(`
    <html>
    <body onload="document.forms['transbank-form'].submit()">
      <form name="transbank-form" method="POST" action="${url}">
        <input type="hidden" name="token_ws" value="${token}" />
      </form>
    </body>
  </html>`
        )
    } catch (error) {
        console.error("Error al iniciar transacción", error);
        res.status(500).json({ error: "Error al iniciar transacción" });
    }
};

export const confirmarPago = async (req: Request, res: Response) => {
    const token = req.body.token_ws;
    try {
        const result = await transaction.commit(token);
        console.log("resultado del pago ",result)

        await Pago.create({
            buyOrder: result.buy_order,
            amount: result.amount,
            status: result.status,
            cardDetail: result.card_detail?.card_number || null,
            transactionDate: result.transaction_date,
            authorizationCode: result.authorization_code || null
          });
       


    } catch (error) {
        console.error("Error al confirmar el pago", error);
    }
};
export const  guardarPago = async (req: Request, res: Response) => {
    const token =req.query.token_ws as string;
    try {
        const result = await transaction.commit(token);

        await Pago.create({
            buyOrder: result.buy_order,
            amount: result.amount,
            status: result.status,
            cardDetail: result.card_detail?.card_number || null,
            transactionDate: result.transaction_date,
            authorizationCode: result.authorization_code || null
          });
          console.log("pago confirmado", result);
          res.redirect("/pagoexitoso.html");
       


    }catch(error){
        console.error(error);
    }

};
