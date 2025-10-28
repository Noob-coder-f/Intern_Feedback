import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("🔵 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URL);

    const db = mongoose.connection;

    db.on("error", (err) => {
      console.error("❌ DB connection error:", err);
    });

    db.once("open", () => {
      console.log("✅ Connected to old MongoDB DB");
    });


    const internsCollection = db.collection("interns");
    console.log("ℹ️ 'interns' collection ready:", internsCollection.collectionName);
  // fro checking to see if connection is working properly
    const sampleIntern = await internsCollection.findOne();
// console.log("👀 Sample intern document:", sampleIntern);


  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
