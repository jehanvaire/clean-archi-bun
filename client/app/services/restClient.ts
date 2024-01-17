class RestClient {
    private baseUrl = 'http://localhost:5000/'

    async get(url: string): Promise<any> {
        const response = await fetch(this.baseUrl + url);
        const data = await response.json();
        console.log("data", data);
        return data;
    }

    async post(url: string, body: any): Promise<any> {
        const response = await fetch(this.baseUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    }

    async put(url: string, body: any): Promise<any> {
        const response = await fetch(this.baseUrl + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    }

    async delete(url: string): Promise<any> {
        const response = await fetch(this.baseUrl + url, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    }
}

export default new RestClient();