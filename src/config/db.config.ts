import mongoose from 'mongoose';
import { DBConfig } from '../utils/consts';

export class DBDriver {
  
  public connect = async () => {
    try {
      mongoose.connection
        .on('error', e => {
          console.error(`connection error:`, e);  // Mongoose error message output
        })
        .once('open', () => {
          console.log(`DB connected`);  // Once a connection is initiated
        });
    
      await mongoose.connect(
        `mongodb://${DBConfig.user}:${DBConfig.pass}@${DBConfig.url}:${DBConfig.port}/${DBConfig.databaseName}`, 
        // 'mongodb://mongo:27017',
        {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
      
    } catch (e) {
      console.error(`exception while connecting to mongoDB:`, e);
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
