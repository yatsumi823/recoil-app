
'use client'
import AddTask from "@/components/AddTask";
import InputTask from "@/components/InputTask";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="">
      <InputTask />
      <AddTask />
    </main>
  );
}
