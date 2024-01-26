const PaymentSchema = require('../models/PaymentSchema.repository');

const PaymentController = {
  async createPayment(req, res) {
    try {
      const newPayment = await PaymentSchema.createPayment(req.body);
      res.status(201).json(newPayment);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el pagooooo', error: error.message });
    }
  },

  async getPaymentsByUserId(req, res) {
    try {
      const { userId } = req.body;
      const payments = await PaymentSchema.findPaymentsByUserId(userId);
      if (payments.length === 0) {
        return res.status(404).json({ message: 'No se encontraron pagos para este usuario' });
      }
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener pagos', error: error.message });
    }
  },

  async getPaymentsByMonth(req, res) {
    try {
      // Obtener la fecha de los parámetros de consulta en lugar del cuerpo
      const { month } = req.query;

      // Comprueba si la fecha se proporcionó
      if (!month) {
        console.log(month);
        return res.status(400).json({ message: 'Fecha no proporcionada' });
      }

      const payments = await PaymentSchema.findPaymentsByMonth(month);
      console.log(payments);

      if (payments.length === 0) {
        return res.status(404).json({ message: 'No se encontraron pagos para este mes y año' });
      }

      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener pagos', error: error.message });
    }
  }
,

  async getAllPayments(req, res) {
    try {
        const payments = await PaymentSchema.findAllPayments();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pagos', error: error.message });
    }
}
};

module.exports = PaymentController;
