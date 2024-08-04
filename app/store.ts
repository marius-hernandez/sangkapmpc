import { Session } from "@supabase/supabase-js";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
    session: Session | null;
    fullname: string;
    username: string;
    email: string;
    role: string;
};

type UserStore = User & {
    setUser: (user: User) => void;
    resetUser:()=>void
};

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            session: null,
            fullname: '',
            username: '',
            email: '',
            role: '',
            setUser: (user) => {
                set({
                    session: user.session,
                    fullname: user.fullname,
                    username: user.username,
                    email: user.email,
                    role: user.role
                });
            },
            resetUser:()=>{
                set({
                    session: null,
                    fullname: '',
                    username: '',
                    email: '',
                    role: ''
                });
            }
        }),
        {
            name: "user-storage", // Name of the item in the storage
            // storage: () => localStorage, // You can also use sessionStorage or any custom storage
        }
    )
);