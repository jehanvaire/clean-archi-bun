import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Accordeon(props: any) {
  const { produits } = props;
  const allProduits = produits.map((produit: any) => {
    return produit.nom + " " + produit.prix + "€";
  });

  return (
    <Accordion isCompact>
      <AccordionItem key="1" title="Voir">
        {allProduits.map((produit: any) => (
          <div key={produit}>{produit}</div>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
