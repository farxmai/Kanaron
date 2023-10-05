import "./App.css";
import theme from "./theme";
import { Suspense } from "react";
import { persistedStore, store } from "store/store";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider, Notifier } from "providers/SnackbarProvider";
import { AuthProvider } from "providers/AuthProvider";
import { Router } from "router/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={null}>
        <ReduxProvider store={store}>
          <PersistGate persistor={persistedStore} loading={null}>
            <SnackbarProvider>
              <Notifier />
              <AuthProvider>
                <BrowserRouter>
                  <Router />
                </BrowserRouter>
              </AuthProvider>
            </SnackbarProvider>
          </PersistGate>
        </ReduxProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
