import React, { useRef } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ModalForm = ({ isOpen, onClose, title, name, submitHandler }) => {
  const initialRef = useRef(null);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => submitHandler(values);

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      size={"lg"}
      onCloseComplete={reset}
    >
      <ModalOverlay />
      <ModalContent sx={{ height: "60vh" }}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ height: "85%" }}>
            <FormControl isInvalid={errors[name]} sx={{ height: "100%" }}>
              <Textarea
                id={name}
                size="sm"
                sx={{ height: "100%" }}
                ref={initialRef}
                placeholder="Here is a sample placeholder"
                {...register(name, {
                  required: `${name} is required`,
                })}
              />
              <FormErrorMessage>
                {errors[name] && errors[name].message}
              </FormErrorMessage>
            </FormControl>
            <Box sx={{ mt: 4, float: "right" }}>
              <Button
                mr={3}
                colorScheme="blue"
                isLoading={isSubmitting}
                type="submit"
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
