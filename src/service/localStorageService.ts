import { useState, useEffect } from "react";

type UserDetails = {
  email: string;
  _id: string;
};

export default function useLocalStorage(key: string) {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    const storedDetails = localStorage.getItem(key);
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }
  }, [key]);

  const saveUserDetails = (details: UserDetails) => {
    localStorage.setItem(key, JSON.stringify(details));
    setUserDetails(details);
  };

  const clearUserDetails = () => {
    localStorage.removeItem(key);
    setUserDetails(null);
  };

  return {
    userDetails,
    saveUserDetails,
    clearUserDetails,
  };
}
