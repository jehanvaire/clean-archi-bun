"use client";
import React from "react";
import TableActions from "@/components/TableActions";
import { Button } from "@nextui-org/react";
import { title } from "@/components/primitives";
import factureService from "../services/factureService";

const columns = [
  { name: "NUMERO", uid: "id" },
  { name: "CLIENT", uid: "nom" },
  { name: "PRODUITS", uid: "produits" },
  { name: "ACTIONS", uid: "actions" },
];

async function getFactures() {
  return await factureService.getFactures();
}

export default function Factures() {
  const [factures, setFactures] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getFactures().then((data) => {
      setFactures(data);
      setLoading(false);
    });
  }, []);

  async function createFacture() {
    // Logic to create a client
    console.log("createFacture");
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className={title()}>Factures</h1>
      <div className="flex justify-end" style={{ marginTop: "1rem" }}>
        {" "}
        <Button color="primary" onClick={createFacture}>
          Create facture
        </Button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <TableActions clients={factures} columns={columns} />
      </div>
    </>
  );
}
