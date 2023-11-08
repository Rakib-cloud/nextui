"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { dataPost } from "@/app/utils/service";
export default function MyModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [date, setDate] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [problems, setProblems] = useState<string>("");

  const data = {
    date,
    name,
    phone,
    problems,
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Get an appointment
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Appointment Form
              </ModalHeader>
              <ModalBody>
                <p>Provide your valid details for book an appointment</p>
                <div className="mt-3">
                  <Input
                    type="date"
                    label="Date"
                    placeholder="Enter your name"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-2"
                  />
                  <Input
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2"
                  />
                  <Input
                    type="number"
                    label="phone"
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2"
                  />

                  <Textarea
                    label="Health Issues"
                    labelPlacement="inside"
                    placeholder="Enter your problems"
                    className="w-full mt-2"
                    value={problems}
                    onChange={(e) => setProblems(e.target.value)}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    dataPost("appointments", data);
                    onClose();
                  }}
                >
                  Book
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
