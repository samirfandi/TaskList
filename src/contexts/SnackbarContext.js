import { createContext, useState } from "react";
import { useContext } from "react";

// Material UI
import MySnackbar from "../components/MySnackbar.js";

const SnackbarContext = createContext([]);

export const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  function showHideSnackbar(message) {
    setMessage(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <SnackbarContext.Provider value={{ showHideSnackbar }}>
      <MySnackbar message={message} snackbarState={open} />
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
