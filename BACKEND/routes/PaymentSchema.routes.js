const express = require('express');
const PaymentController = require('../controllers/payment.controller');

const router = express.Router();

// Asegúrate de tener instalado y configurado el middleware para parsear el body
router.use(express.json());

// Ruta para crear un nuevo pago
router.post('/', PaymentController.createPayment);

// Ruta modificada para obtener pagos por ID de usuario a través del body
router.get('/user', PaymentController.getPaymentsByUserId);

// Ruta modificada para obtener pagos por mes y año a través del body
router.get('/month', PaymentController.getPaymentsByMonth);

router.get('/', PaymentController.getAllPayments);

module.exports.PaymentRouter = router;
