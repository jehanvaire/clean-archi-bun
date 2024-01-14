import RestClient from "./RestClient";

class ClientService {
    public async getClients(): Promise<any> {
        return await RestClient.get('/clients');
    }
}
   
export default new ClientService();