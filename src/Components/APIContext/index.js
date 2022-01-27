import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import baseUrl from "../../Utils/API";

const APIContext = createContext();

const initialState = {
    listedBooks: [],
    maxPages: 0
}

const initialPagination = {
    page: 1,
    totalPages: ''
}
export const Context = ({ children }) => {
    const [apiData, setApiData] = useState(initialState);
    const [user, setUser] = useState([]);
    const [isSigned, setIsSigned] = useState(false);
    const [pagination, setPagination] = useState(initialPagination);


    const Login = async (email, password) => {
        const response = await axios.post(`${baseUrl}auth/sign-in`, {
            email, password
        })

        if (response.status === 200) {
            setUser({ data: response.data, auth: response.headers.authorization })
            setIsSigned(true)
        }
    }

    const Logout = () => {
        setUser([]);
        setIsSigned(false)
    }

    const getListaDeLivros = async (page) => {
        let amount = 10;

        const response = await axios.get(`${baseUrl}books?page=${page}&amount=${amount}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${user.auth}`
            }
        })
        setApiData((prevState) => ({
            ...prevState,
            listedBooks: response.data,

        }))
        setPagination({
            page: response.data.page,
            totalPages: response.data.totalPages
        })

    }

    return (
        <APIContext.Provider value={{ user, pagination, setPagination, apiData, isSigned, Login, Logout, getListaDeLivros }}>
            {children}
        </APIContext.Provider>
    )
}

export const useMyContext = () => {
    const { user, pagination, setPagination, apiData, isSigned, Login, Logout, getListaDeLivros } = useContext(APIContext);

    return { user, pagination, setPagination, apiData, isSigned, Login, Logout, getListaDeLivros };
}