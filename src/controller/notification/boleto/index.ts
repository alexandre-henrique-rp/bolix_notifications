import NotificationService from "../../../service";



export const BoletoNotification = async (req: any, res: any) => {
  try {
    const requestToken = req.body.notification
    const consultToken = await NotificationService.Boleto(requestToken)
    return res.status(200).json(consultToken);
  } catch (error) {
    return res.status(500).json(error);
  }
}