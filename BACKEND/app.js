const { connect } = require('./connections/mongodb.connection');
const { usersRouter } = require('./routes/user.routes');
const {quequeRouter} = require('./routes/queque.routes')
const {PaymentRouter} = require('./routes/PaymentSchema.routes')
const { app } = require('./app/express');
const PORT = 3000;

async function main() {
   
  await connect();
  
  app.use('/users', usersRouter);
  app.use('/issue', quequeRouter);
  app.use('/payment', PaymentRouter);
  
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

main().catch((err) => {
  console.error(err);
});