import { Slide } from "@mui/material";
import { FC, useEffect } from "react";
import {
  SnackbarProvider as NotistackSnackbarProvider,
  SnackbarKey,
  useSnackbar,
} from "notistack";
import { NotificationType, removeSnackbar } from "store/slices/snackbarReducer";
import { useAppDispatch, useAppSelector } from "store/store";
import { ProviderProps } from "providers";

let displayed: any = [];

export const Notifier = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(
    (store) => store.snackbarReducer?.notifications || []
  );

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id?: SnackbarKey) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed.filter((key: SnackbarKey) => id !== key)];
  };

  useEffect(() => {
    notifications?.forEach(
      ({ key, message, options = {} }: NotificationType) => {
        enqueueSnackbar(message, {
          key,
          ...options,
          onExited: (event, myKey) => {
            dispatch(removeSnackbar(myKey));
            removeDisplayed(myKey);
          },
        });
        storeDisplayed(key);
      }
    );
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
};

export const SnackbarProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <NotistackSnackbarProvider
      maxSnack={5}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={(props) => <Slide {...props} direction="left" />}
    >
      {children}
    </NotistackSnackbarProvider>
  );
};
