import { NestFactory } from '@nestjs/core';
import mongoose, { Error } from 'mongoose';
import { AppModule } from './app.module';
import dotenv from 'dotenv';

dotenv.config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/crs-main');
    console.log('connected to MongoDB!');
  } catch (error) {
    throw new Error(error);
  }
};

const port = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  await connectToMongoDB();
  console.log(`Server started at port: ${port}`);
}
bootstrap();
