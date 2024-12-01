import mongoose from "mongoose";

let cachedConnection = null;

export const connectToDb = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const connectionUrl = process.env.DATABASE_URL.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
    const connect = await mongoose.connect(connectionUrl);
    cachedConnection = connect.connection;
    console.log("Database connection established");

    return cachedConnection;
  } catch (error) {
    console.log("Error : ", error);

    throw error;
  }
};
