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

async function bootstrap() {
  await connectToMongoDB();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
