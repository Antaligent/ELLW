const mongoose = require('mongoose');

// Define el esquema de pago
const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  date: Date,
  isPaid: Boolean,
  month: Number
});

// Crea el modelo de Mongoose para los pagos
const Payment = mongoose.model('Payment', PaymentSchema);

const PaymentRepository = {
  // Crea un nuevo pago
  async createPayment(paymentData) {
    const payment = new Payment(paymentData);
    await payment.save();
    return payment;
  },

  // Encuentra pagos por ID de usuario
  async findPaymentsByUserId(userId) {
    return Payment.find({ userId: userId });
  },

  // Encuentra pagos por mes y año
  async findPaymentsByMonth(month) {
    // Extraer el mes directamente de la cadena de fecha
    console.log(month);

    // Buscar en la base de datos usando el campo 'month'
    const paymentsInMonth = await Payment.find({ month }).lean();
    console.log(paymentsInMonth);

    return paymentsInMonth;
}
,

  async findAllPayments() {
    return Payment.find({});
}
};

module.exports = PaymentRepository;
