import { FC } from "react";
import { useAuth } from "hooks/useAuth";
import { ProviderProps } from "providers";

export const AuthProvider: FC<ProviderProps> = ({ children }) => {
  const { isLoading } = useAuth();

  if (isLoading) return null;
  return <>{children}</>;
};
