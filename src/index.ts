import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { BoletoRouter } from './routes';

const port: any  = process.env.SERVE_PORT
const serverUrl = process.env.SERVE_CONSULT

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(BoletoRouter);


app.listen(port, async function () { 
  console.log('🚀🚀🤖 servidor em execução 🤖🚀🚀')
  console.log(`🚀🚀🤖 ${serverUrl}${port} 🤖🚀🚀`)
});

export default app