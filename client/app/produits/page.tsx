"use client";
import React from "react";
import produitService from "../services/produitService";
import TableActions from "@/components/TableActions";
import { Button } from "@nextui-org/react";
import { title } from "@/components/primitives";

const columns = [
  { name: "NOM", uid: "nom" },
  { name: "PRIX", uid: "prix" },
  { name: "ACTIONS", uid: "actions" },
];

async function getProduits() {
  return await produitService.getProduits();
}

export default function Clients() {
  const [produits, setProduits] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProduits().then((data) => {
      setProduits(data);
      setLoading(false);
    });
  }, []);

  async function createProduit() {
    // Logic to create a client
    console.log("createProduit");
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className={title()}>Produits</h1>
      <div className="flex justify-end" style={{ marginTop: "1rem" }}>
        {" "}
        {/* Add flex justify-end classes */}
        <Button color="primary" onClick={createProduit}>
          Create Produit
        </Button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <TableActions clients={produits} columns={columns} />
      </div>
    </>
  );
}
