import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to the database");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw new Error("Database connection failed");
  }
};

export default connect;
