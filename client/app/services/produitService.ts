import restClient from "./restClient";

class ProduitService {
    private baseUrl = 'produits'

    async getProduits() {
        const response = await restClient.get(this.baseUrl);
        return response;
    }

    async addProduit(clientData: any) {
        const response = await restClient.post(this.baseUrl, clientData);
        return response;
    }

    async updateProduit(clientData: any) {
        const url = `${this.baseUrl}/${clientData.id}`;
        const response = await restClient.put(url, clientData);
        return response;
    }

    async deleteProduit(id: string) {
        const url = `${this.baseUrl}/${id}`;
        const response = await restClient.delete(url);
        return response;
    }
}

export default new ProduitService();