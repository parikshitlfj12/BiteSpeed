import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarContext = createContext();

// Custom hook to use the Snackbar context
export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

// Snackbar Provider component
export const SnackbarProvider = ({ children }) => {
  const [snackbarData, setSnackbarData] = useState({
    isOpen: false,
    message: "",
    status: "success",
  });

  const openSnackbar = (message, status = "success") => {
    setSnackbarData({
      isOpen: true,
      message,
      status,
    });
  };

  const closeSnackbar = () => {
    setSnackbarData({ ...snackbarData, isOpen: false });
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
      <Snackbar
        open={snackbarData.isOpen}
        autoHideDuration={2000}
        onClose={closeSnackbar}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbarData.status}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarData.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
