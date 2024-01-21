"use client";
import React from "react";
import clientsService from "../services/clientService";
import TableActions from "@/components/TableActions";
import { Button } from "@nextui-org/react";
import { title } from "@/components/primitives";
import ModalCreationProps from "@/components/ModalCreationProps";

const columns = [
  { name: "USER", uid: "name" },
  { name: "ACTIONS", uid: "actions" },
];

const modalContent = [
  { input: "text", name: "Nom" },
  { input: "text", name: "Prénom" },
  { input: "email", name: "Email" },
];

const typeProps = "utilisateur";

async function getClients() {
  return await clientsService.getClients();
}

export default function Clients() {
  const [clients, setClients] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);

  async function refreshClients(values: any) {
    await clientsService.addClient({
      nom: values.Nom,
      prenom: values.Prénom,
      mail: values.Email,
    });
    setClients(await clientsService.getClients());
    setModalOpen(false);
  }

  async function deleteClient(item: any) {
    await clientsService.deleteClient(item.id);
    setClients(await clientsService.getClients());
  }

  React.useEffect(() => {
    getClients().then((data) => {
      setClients(data);
      setLoading(false);
    });
  }, []);

  async function createClient() {
    setModalOpen(true);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className={title()}>Clients</h1>
      <div className="flex justify-end" style={{ marginTop: "1rem" }}>
        {" "}
        {/* Add flex justify-end classes */}
        <Button color="primary" onClick={createClient}>
          Create client
        </Button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <TableActions
          clients={clients}
          columns={columns}
          onDelete={deleteClient}
        />
      </div>

      {modalOpen && (
        <ModalCreationProps
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          typeProps={typeProps}
          modalContent={modalContent}
          onData={refreshClients}
        />
      )}
    </>
  );
}
