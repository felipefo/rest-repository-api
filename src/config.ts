import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

const loadEnv = () => {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const envFilePath = path.resolve(__dirname, `../.env.${nodeEnv}`);

  if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath });
  } else {
    throw new Error(`.env file not found for environment: ${nodeEnv}   em ${envFilePath}` );
  }
};

loadEnv();

export const config = {
  nodeEnv: process.env.NODE_ENV,
  apiUrl: process.env.API_URL,
};

export default config;
