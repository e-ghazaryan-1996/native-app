import { AuthContext } from "@/context/AuthContext";
import { useStorageState } from "@/hooks/useStorageState";

interface ISessionProviderProps {
  children: React.ReactNode;
}

const SessionProvider: React.FC<ISessionProviderProps> = ({ children }) => {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: (userId: string) => {
          // Perform sign-in logic here
          setSession(userId);
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default SessionProvider;
