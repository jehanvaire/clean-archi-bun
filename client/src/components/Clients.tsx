import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
} from "@nextui-org/react";
import clientService from "../services/clientService";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    clientService.getClients().then((clients) => {
      if (clients) {
        console.log(clients);
        setClients(clients);
      } else {
        console.error("Clients is undefined");
      }
    });
  }, []);

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Nom</TableColumn>
        <TableColumn>Prenom</TableColumn>
        <TableColumn>Email</TableColumn>
      </TableHeader>
      <TableBody>
        {clients.map((client: any) => (
          <TableRow key={client.id}>
            <TableCell align="center">{client.nom}</TableCell>
            <TableCell align="center">{client.prenom}</TableCell>
            <TableCell align="center">{client.mail}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Clients;
