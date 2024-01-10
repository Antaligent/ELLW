const { connect } = require('./connections/mongodb.connection');
const { usersRouter } = require('./routes/user.routes');
const { app } = require('./app/express');
const PORT = 3000;

async function main() {
   
  await connect();
  
  app.use('/users', usersRouter);
  
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

main().catch((err) => {
  console.error(err);
});