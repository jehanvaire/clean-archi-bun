import React, { useEffect, useState } from 'react';
import clientsService from '../services/clientsService';


const ClientList: React.FC = () => {
    const [clients, setClients] = useState<any[]>([]);
   
    useEffect(() => {
      clientsService.getClients().then(setClients);
    }, []);
    return (
        <div>
          <h2>Client List</h2>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.nom}</td>
                  <td>{client.prenom}</td>
                  <td>{client.mail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
     };
     
     export default ClientList;
     