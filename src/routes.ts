import express from 'express';
import NotificationControler from './controller/notification';



export const BoletoRouter = express.Router();

//Boleto 
//------------------------------------------------------------------------------

BoletoRouter.post('/boleto', NotificationControler.BoletoNotification );
BoletoRouter.post('/credito', );

