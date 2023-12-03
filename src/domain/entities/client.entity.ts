export interface IClient {
    id?: number;
    nom: string;
    prenom: string;
    mail: string;
}

export class Client {
    id: number;
    nom: string;
    prenom: string;
    mail: string;

    constructor(client: IClient) {
        this.id = client.id || 0;
        this.nom = client.nom;
        this.prenom = client.prenom;
        this.mail = client.mail;
    }
}