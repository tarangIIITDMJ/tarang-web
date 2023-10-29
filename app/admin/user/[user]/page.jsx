"use client"
import ValidateAuth from "@/app/components/ValidateAuth";
import axios from "axios";
import { useEffect, useState } from "react";

export default function User({ params: { user } }) {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        // try {
        //   const response = await axios.get("https://api.tarangfest.com/api/admin/user", {withCredentials: true});
        //   console.log(response);
        //   if (response.status == 200) {
        //     setUsers(response.data.users);
        //   } else {
        //     console.log(response);
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
      };
    useEffect(()=>{
        getUsers();
    },[])
    return <ValidateAuth>
        {user}
    </ValidateAuth>
}