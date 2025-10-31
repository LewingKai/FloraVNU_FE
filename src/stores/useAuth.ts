import accountApi from "@/services/axios/actions/account.action";
import { Account } from "@/types/account";
import { create } from "zustand";
import { clientRequest } from "@/services/axios/ClientRequest";

interface AuthState {
  isAuth: boolean | null;
  user: Account | null;
  login: () => void;
  logout: () => void;
  setUser: (user: Account) => void;
  fetchMe: () => Promise<void>;
}

const initialState: Pick<AuthState, "isAuth" | "user"> = {
  isAuth: null,
  user: null,
};

const useAuth = create<AuthState>((set, get) => ({
  ...initialState,

  login() {
    set({ isAuth: true });
  },

  logout() {
    clientRequest.removeAccessToken();
    localStorage.removeItem("user_id");
    set({ isAuth: false, user: null });
  },

  setUser(user: Account) {
    set({ user });
  },

  async fetchMe() {
    try {
      const userId = localStorage.getItem("user_id");

      if (userId) {
        const res = await accountApi.findAccountById(userId);
        set({ user: res.data, isAuth: true });
      }
    } catch (error) {
      console.log(error);
      get().logout();
    }
  },
}));

export default useAuth;
