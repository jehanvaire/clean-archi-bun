import restClient from "./restClient";

class FactureService {
    private baseUrl = 'factures'

    async getFactures() {
        const response = await restClient.get(this.baseUrl);
        // TODO : à optimiser
        for (const facture of response) {
            const client = facture.clientId;
            const clients = await restClient.get('clients');
            const clientName = clients.find((c: any) => c.id === client);
            facture.nom = clientName.nom;
            facture.id = facture.numero;
            delete facture.numero;
            delete facture.clientId;
        }

        return response;
    }

    async addFacture(clientData: any) {
        const response = await restClient.post(this.baseUrl, clientData);
        return response;
    }

    async updateFacture(clientData: any) {
        const url = `${this.baseUrl}/${clientData.id}`;
        const response = await restClient.put(url, clientData);
        return response;
    }

    async deleteFacture(id: string) {
        const url = `${this.baseUrl}/${id}`;
        const response = await restClient.delete(url);
        return response;
    }
}

export default new FactureService();