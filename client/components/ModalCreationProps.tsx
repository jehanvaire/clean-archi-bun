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

interface ModalCreationProps {
  isOpen: boolean;
  onClose: (data: any) => void;
  modalContent: any[];
  typeProps: string;
  onData: (data: any) => void;
}

export default function ModalCreationProps({
  isOpen,
  onClose,
  typeProps,
  modalContent,
  onData,
}: ModalCreationProps) {

  const [values, setValues] = useState({} as any);

  const createProp = () => {
    onData(values);
  };

  const getInputValue = (name: string) => {
    const input = values[name];
    return input?.value;
  }

  const setInputValue = (name: string, value: string) => {
      setValues((prevValues: any) => ({ ...prevValues, [name]: value }));
  }

  const renderInput = React.useCallback((item: any) => {
    let cellValue = item.name;
    switch (item.input) {
      case "text":
        return (
          <Input
            type="text"
            key={item.name + item.input}
            placeholder={cellValue}
            variant="bordered"
            value={getInputValue(item.name)}
            onChange={(e) => setInputValue(item.name, e.target.value)}
          />
        );
      case "email":
        return (
          <Input
            type="email"
            key={item.name + "input"}
            placeholder={cellValue}
            variant="bordered"
            value={getInputValue(item.name)}
            onChange={(e) => setInputValue(item.name, e.target.value)}
          />
        );
      default:
        return cellValue;
    }
  }, []);

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
            <ModalBody>
              {modalContent.map((item) => (
                <div className="flex flex-col gap-1" key={item.name}>
                  {renderInput(item)}
                </div>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Annuler
              </Button>
              <Button color="primary" onPress={createProp}>
                Ajouter
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
