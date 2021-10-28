const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51JnmBDCRgIFNDnmKGcMBbsuy7edjfh7h8FpKSA8qAo6DqV3h8SavJwwEijaDIcF315ePn18xj00IzAOPTSQgwEeZ00bcbVY8rP");

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({origin: true}));
app.use(express.json());

// ROUTES API
app.get("/", (request, response) => response.status(200).send("PRUEBA CORRECTA 200"));

eslint-disable-next-line 
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("PAGO RECIBIDO POR:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // Subunidades de moneda
    currency: "usd",
  });

  // Creado Correctamente
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LISTENER
exports.api = functions.https.onRequest(app);


// EJEMPLO DE SALIDA
// http://localhost:5001/challenge-21021/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


