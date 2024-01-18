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
import clientService from "@/app/services/clientService";

interface ModalCreationUserProps {
  isOpen: boolean;
  onClose: () => void;
  onUserCreated: () => void;
}

export default function ModalCreationUser({
  isOpen,
  onClose,
  onUserCreated,
}: ModalCreationUserProps & { onUserCreated: () => void }) {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");

  const createClient = () => {
    clientService.addClient({ nom, prenom, mail }).then((data) => {
      console.log(data);
      onClose();
      onUserCreated();
    });
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
              Créer un utilisateur
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                placeholder="Nom"
                variant="bordered"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <Input
                autoFocus
                placeholder="Prenom"
                variant="bordered"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
              <Input
                autoFocus
                placeholder="Mail"
                variant="bordered"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={createClient}>
                Sign in
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
