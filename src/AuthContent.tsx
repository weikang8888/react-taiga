import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  userEmail: string | null;
  userName: string | null;
  userPhoneNumber: string | null;
  login: (
    email?: string,
    name?: string,
    phoneNumber?: string,
    authToken?: string
  ) => void; // Update the type to match the implementation
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(() => {
    return localStorage.getItem("userEmail") || null;
  });
  const [userName, setUserName] = useState<string | null>(() => {
    return localStorage.getItem("userName") || null;
  });
  const [userPhoneNumber, setUserPhoneNumber] = useState<string | null>(() => {
    return localStorage.getItem("userPhoneNumber") || null;
  });

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("authToken");

    if (storedAuthToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (
    email: string,
    name: string,
    phoneNumber: string,
    authToken: string
  ) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setUserName(name);
    setUserPhoneNumber(phoneNumber);
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);
    localStorage.setItem("userPhoneNumber", phoneNumber);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userPhoneNumber");

    setIsLoggedIn(false);
    setUserEmail(null);
    setUserName(null);
    setUserPhoneNumber(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userEmail,
        userName,
        userPhoneNumber,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};