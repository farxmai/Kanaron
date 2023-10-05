import { createSlice } from '@reduxjs/toolkit'
import { SnackbarKey, SnackbarMessage, OptionsObject } from 'notistack'

export type NotificationType = {
  key?: SnackbarKey
  message: SnackbarMessage
  options?: OptionsObject
}

type InitialStateType = {
  notifications: NotificationType[]
}

const initialState: InitialStateType = { notifications: [] }

const slice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar: (state, { payload }) => {
      state.notifications.push({
        key: new Date().getTime() + Math.random(),
        ...payload,
        options: {
          ...payload?.options,
          variant: payload?.options?.variant || 'success',
        },
      })
    },
    closeSnackbar: (state, { payload }) => {
      state.notifications = state.notifications.map((notification) => {
        const shouldDismiss =
          !notification.key || notification.key === payload.key
        return shouldDismiss
          ? { ...notification, dismissed: true }
          : { ...notification }
      })
    },
    removeSnackbar: (state, { payload }) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.key !== payload
      )
    },
  },
})

export const { openSnackbar, closeSnackbar, removeSnackbar } = slice.actions

export default slice.reducer
