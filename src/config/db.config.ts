import mongoose from 'mongoose';


const DBConfig = {
  user: 'admin',
  pass: '1234abcd',
  url: 'ds235417.mlab.com',
  port: 35417,
  databaseName: 'praypay',
};
export const CollectionsNames = {
  COUNTER: 'counter',
  DEBT: 'debt',
  MEMBER: 'member',
  PAYMENT: 'payment',
  ROLE: 'role',
  SYNAGOGUE: 'synagogue',
  USER: 'user'
};

export class DBDriver {
  
  public connect = async () => {
    try {
      await mongoose.connect(
        `mongodb://${DBConfig.user}:${DBConfig.pass}@${DBConfig.url}:${DBConfig.port}/${DBConfig.databaseName}`, {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
  
      mongoose.connection
        .on('error', e => {
          // Mongoose error message output
          console.error(`connection error:`, e);
          // console.error.bind(console, "connection error:"));
        })
        .once('open', () => {
          // Once a connection is initiated - do the following
          console.log(`DB connected`, mongoose.connection);
        });
    } catch (e) {
      console.error(`connection error:`, e);
    }
  }
}
// When the node process is terminated (Ctrl+c is pressed) , close the connection to the DB.
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});
