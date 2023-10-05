export const useAuth = () => {
  return {
    isLoading: false,
    isAuthenticated: true,
    user: null,
    signOut: () => {},
  };
};
