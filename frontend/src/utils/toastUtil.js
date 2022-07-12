const showSuccessToast = (toast, message) =>
  toast({
    title: message,
    status: "success",
    isClosable: true,
  });

const showErrorToast = (toast, message) =>
  toast({
    title: message,
    status: "error",
    isClosable: true,
  });

export { showSuccessToast, showErrorToast };
