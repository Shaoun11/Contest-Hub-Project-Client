
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";

const useCart = () => {
    const { user} = useContext(Authcontext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axios.get(`https://12-server-site-assignment.vercel.app/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCart;