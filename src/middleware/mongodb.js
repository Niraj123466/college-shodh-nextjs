import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Check if the database is already connected
    if (mongoose.connection.readyState) {
      console.log('MongoDB already connected');
      return;
    }

    // Connect to the database
    await mongoose.connect("mongodb://localhost:27017/collegeShodh");

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
