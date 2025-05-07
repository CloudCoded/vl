import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // ModalFooter,
} from "@heroui/modal";

export default function AppModal({
  title,
  children,
  size,
  isOpen,
  onClose,
  backdrop,
  scrollBehavior = "inside",
  isDismissable,
  hideCloseButton,
  headerClassNames,
  footer,
}: {
  title?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  children: React.ReactNode;
  size?:
    | "md"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
  isOpen: boolean;
  onClose: () => void;
  backdrop?: "opaque" | "blur" | "transparent";
  scrollBehavior?: "inside" | "outside";
  isDismissable?: boolean;
  hideCloseButton?: boolean;
  headerClassNames?: string;
}) {
  return (
    <>
      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        size={size}
        onClose={onClose}
        isDismissable={isDismissable}
        hideCloseButton={hideCloseButton}
        classNames={{
          header: headerClassNames,
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>{footer}</ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
