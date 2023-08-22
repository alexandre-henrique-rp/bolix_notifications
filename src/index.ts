import express, { json } from 'express';
import cors from 'cors'
import { BoletoRouter } from './routes';

const port: any  = process.env.PORT
const serverUrl = process.env.SERVE_CONSULT

const app = express();
app.use(json());
app.use(cors());
app.use(BoletoRouter);


app.listen(port, async function () { 
  console.log('🚀🚀🤖 servidor em execução 🤖🚀🚀')
  console.log(`🚀🚀🤖 ${serverUrl}${port} 🤖🚀🚀`)
});

export default app