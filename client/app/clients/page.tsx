"use client";
import React from "react";
import clientsService from "../services/clientService";
import TableActions from "@/components/TableActions";
import { Button } from "@nextui-org/react";
import { title } from "@/components/primitives";

const columns = [
  { name: "USER", uid: "name" },
  { name: "ACTIONS", uid: "actions" },
];

async function getClients() {
  return await clientsService.getClients();
}

export default function Clients() {
  const [clients, setClients] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getClients().then((data) => {
      setClients(data);
      setLoading(false);
    });
  }, []);

  async function createClient() {
    // Logic to create a client
    console.log("createClient");
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
        <TableActions clients={clients} columns={columns} />
      </div>
    </>
  );
}
