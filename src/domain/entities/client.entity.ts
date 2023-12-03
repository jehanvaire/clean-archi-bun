export interface IClient {
    id?: string;
    nom: string;
    prenom: string;
    mail: string;
}

export class Client {
    id: string;
    nom: string;
    prenom: string;
    mail: string;

    constructor(client: IClient) {
        this.id = client.id || "";
        this.nom = client.nom;
        this.prenom = client.prenom;
        this.mail = client.mail;
    }
}