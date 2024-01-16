import restClient from "./restClient";

class ClientService {
    private baseUrl = 'clients'

    async getClients() {
        const response = await restClient.get(this.baseUrl);
        return response.data;
    }

    async addClient(clientData: any) {
        const response = await restClient.post(this.baseUrl, clientData);
        return response.data;
    }

    async updateClient(clientData: any) {
        const url = `${this.baseUrl}/${clientData.id}`;
        const response = await restClient.put(url, clientData);
        return response.data;
    }

    async deleteClient(id: string) {
        const url = `${this.baseUrl}/${id}`;
        const response = await restClient.delete(url);
        return response.data;
    }
}

export default new ClientService();
