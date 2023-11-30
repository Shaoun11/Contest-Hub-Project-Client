import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";



const useAdmin = () => {
    const { user, loader } = useContext(Authcontext);
 
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loader,
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axios.get(`https://12-server-site-assignment.vercel.app/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;