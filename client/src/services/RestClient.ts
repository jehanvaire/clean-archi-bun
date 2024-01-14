class RestClient {
    private baseUrl = 'http://localhost:5000';
   
    public async get<T>(path: string, params?: Record<string, unknown>): Promise<T> {
      const url = `${this.baseUrl}${path}`;
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    }
   
    public async post<T>(path: string, body: unknown): Promise<T> {
      const url = `${this.baseUrl}${path}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    }
   
}

export default new RestClient();