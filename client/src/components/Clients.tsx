import React, { useEffect, useState } from 'react';
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell
} from "@nextui-org/react";
import clientService from '../services/clientService';

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            const clients = await clientService.getClients();
            setClients(clients);
        };

        fetchClients();
    }, []);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell>Nom</TableCell>
                    <TableCell>Prenom</TableCell>
                    <TableCell>Email</TableCell>
                    {/* Add more table cells for other client properties */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {clients.map((client: any) => (
                    <TableRow key={client.id}>
                        <TableCell>{client.nom}</TableCell>
                        <TableCell>{client.prenom}</TableCell>
                        <TableCell>{client.email}</TableCell>
                        {/* Add more table cells for other client properties */}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Clients;