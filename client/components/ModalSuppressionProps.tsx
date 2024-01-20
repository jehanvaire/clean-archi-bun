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
  typeProps: string;
  onClose: (data: any) => void;
}

export default function ModalSuppressionProps({
  isOpen,
  typeProps,
  onClose,
}: ModalSuppressionProps) {
  const deleteProp = () => {
    console.log("delete prop");
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
              Ajout {typeProps}
            </ModalHeader>
            {/* <ModalBody>
              {modalContent.map((item) => (
                <div className="flex flex-col gap-1" key={item.name}>
                  {renderInput(item)}
                </div>
              ))}
            </ModalBody> */}
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Annuler
              </Button>
              <Button color="primary" onPress={deleteProp}>
                Ajouter
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
