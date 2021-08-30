import mongoose from "mongoose";

export function connectToMongo() {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    const databaseURL = process.env.MONGODB_URI || "mongodb://localhost"
    return mongoose.connect(databaseURL).then(() => {
      console.info("Connected to Mongo");
      return resolve();
    }).catch(error => {
      console.error(error, "An error occurred when connecting to Mongo");
      return reject();
    });
  });
}
