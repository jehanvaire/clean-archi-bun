import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

interface ModalSuppressionProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (data: any) => void;
  propToDelete: any;
}

export default function ModalSuppressionProps({
  isOpen,
  onClose,
  onDelete,
  propToDelete,
}: ModalSuppressionProps) {
  const deleteProp = () => {
    onDelete(propToDelete);
  };

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h1>Supprimer {propToDelete.id} ?</h1>
            </ModalHeader>
            {/* <ModalBody>
              {modalContent.map((item) => (
                <div className="flex flex-col gap-1" key={item.name}>
                  {renderInput(item)}
                </div>
              ))}
            </ModalBody> */}
            <ModalFooter>
              <Button color="default" variant="flat" onPress={onClose}>
                Annuler
              </Button>
              <Button color="danger" onPress={deleteProp}>
                Supprimer
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
