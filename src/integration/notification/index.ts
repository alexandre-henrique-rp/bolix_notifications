import EfiPay from 'sdk-typescript-apis-efi';
import options from '../Authenticate';


export default async function Notification(Token: string): Promise<any> {
  try {
    const params = {
      token: Token,
    };

    const efipay = new EfiPay(options);
    const BoletoPaymentCreate = await efipay.getNotification(params);

    return BoletoPaymentCreate;
  }
  catch (error) {
    console.log(error)
    throw {
      nome: error.nome,
      message: error.message || 'Erro interno do servidor',
      chave: error.erros[0].chave || '',
      caminho: error.erros[0].caminho || '',
      explicacao: error.erros[0].mensagem || '',
    };
  }
}