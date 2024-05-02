import Notification from "../integration/notification";

 const NotificationService = {
  /**
   * Asynchronously retrieves a Boleto payment notification using the provided token.
   *
   * @param {string} token - The token used to retrieve the Boleto payment notification.
   * @return {Promise<any>} A Promise that resolves to the retrieved Boleto payment notification.
   * @throws {Error} If an error occurs during the retrieval process.
   */
  async Boleto (token: string): Promise<any> {
    try {
      const pesquisa = await Notification(token)
      return pesquisa
    } catch (error) {
      throw error;
    }
  },

  /**
   * Asynchronously retrieves a Credito payment notification using the provided token.
   *
   * @param {string} token - The token used to retrieve the Credito payment notification.
   * @return {Promise<any>} A Promise that resolves to the retrieved Credito payment notification.
   * @throws {Error} If an error occurs during the retrieval process.
   */
  async Credito (token: string): Promise<any> {
    try {
      const pesquisa = await Notification(token)
      return pesquisa
    } catch (error) {
      throw error;
    }
  },
 }

 export default NotificationService