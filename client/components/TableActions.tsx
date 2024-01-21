"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
} from "@nextui-org/react";
import { EditIcon } from "@/components/EditIcon";
import { DeleteIcon } from "@/components/DeleteIcon";
import { EyeIcon } from "@/components/EyeIcon";
import Accordeon from "./Accordeon";
import ModalSuppressionProps from "./ModalSuppressionProps";

interface ITableActionsProps {
  clients: any[];
  columns: any[];
  onDelete: (data: any) => void;
}

export default function TableActions({
  clients,
  columns,
  onDelete,
}: ITableActionsProps) {
  const [showModalSuppression, setShowModalSuppression] = React.useState(false);

  const [propToDelete, setPropToDelete] = React.useState<any>({});

  const handleClose = () => {
    setShowModalSuppression(false);
  };

  const deleteItemModal = React.useCallback((item: any) => {
    setPropToDelete(item);
    setShowModalSuppression(true);
  }, []);

  const deleteItem = React.useCallback((item: any) => {
    onDelete(item);
  }, []);

  const renderCell = React.useCallback((item: any, columnKey: any) => {
    let cellValue = item[columnKey];
    switch (columnKey) {
      case "name":
        cellValue = item.nom + " " + item.prenom;
        return (
          <div className="flex items-center gap-2 text-sm text-default-900">
            <User
              avatarProps={{
                radius: "lg",
                src: "https://media.istockphoto.com/id/1130884625/fr/vectoriel/ic%C3%B4ne-de-vecteur-de-membre-dutilisateur-pour-linterface-utilisateur-dui-ou-lapplication.jpg?s=612x612&w=0&k=20&c=CkeMorHWI4UwOmQ0zSpvJ-F8Lj_SAMjPJxcXwHS1po4=",
              }}
              description={item.mail}
              name={cellValue}
            />
          </div>
        );
      case "produits":
        return <Accordeon produits={item.produits}></Accordeon>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => deleteItemModal(item)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <Table aria-label="Example table with custom cells" className="w-full">
        <TableHeader columns={columns}>
          {(column: any) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={clients}>
          {(item: any) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {showModalSuppression && (
        <ModalSuppressionProps
          onClose={handleClose}
          onDelete={deleteItem} // changer
          isOpen={showModalSuppression}
          propToDelete={propToDelete}
        />
      )}
    </>
  );
}
