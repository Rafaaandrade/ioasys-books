import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import baseUrl from "../../Utils/API";

const APIContext = createContext();

const initialState = {
    listedBooks: [],
    bookDetails: {},
    maxPages: 0
}

const initialPagination = {
    page: 1,
    totalPages: ''
}

const initialUser = {
    data: [],
    auth: ''
}

export const Context = ({ children }) => {
    const [apiData, setApiData] = useState(initialState);
    const [user, setUser] = useState(initialUser);
    const [isSigned, setIsSigned] = useState(false);
    const [pagination, setPagination] = useState(initialPagination);
    const [error, setError] = useState()


    const Login = async (email, password) => {

        try {
            const response = await axios.post(`${baseUrl}auth/sign-in`, {
                email, password
            })
            setUser((prevState) => ({
                ...prevState,
                data: response.data,
                auth: response.headers.authorization
            }))
            setIsSigned(true)
            setError(false)
        } catch (error) {
            console.log(error)
            setError(true)
        }
        // localStorage.setItem('userData', JSON.stringify(response.data));
        // localStorage.setItem('user', response.headers.authorization);

    }

    // const getSession = () => {
    //     if (isSigned) {
    //         const userData = JSON.parse(localStorage.getItem('userData'));
    //         const userAuth = localStorage.getItem('user');

    //         if (userData === user.data && userAuth === user.auth) {
    //             setSession((prevState) => ({
    //                 ...prevState,
    //                 data: userData,
    //                 auth: userAuth
    //             }))
    //         }
    //     } else {
    //         Logout();
    //     }
    // }

    const Logout = () => {
        setUser([]);
        setIsSigned(false)
        // localStorage.clear();
    }

    // const refreshToken = async () => {
    //     // const token = JSON.parse(localStorage.getItem('user'));
    //     // const token = localStorage.getItem('user')
    //     // console.log('token', token)

    //     // if (isSigned) {
    //     //     const response = await axios.post(`${baseUrl}auth/refresh-token`, {
    //     //         headers: {
    //     //             "Content-type": "application/json;",
    //     //             'Authorization': `Bearer ${token}`
    //     //         }
    //     //     })

    //     //     console.log('response RefreshToken', response)

    //     // }

    // }

    const getListaDeLivros = async (page) => {
        let amount = 25;

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

    const getDetalhesLivro = async (id) => {

        const response = await axios.get(`${baseUrl}books/${id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${user.auth}`
            }
        })
        setApiData((prevState) => ({
            ...prevState,
            bookDetails: response.data
        }))
    }

    return (
        <APIContext.Provider value={{ user, pagination, setPagination, apiData, isSigned, Login, Logout, getListaDeLivros, getDetalhesLivro, error, setError }}>
            {children}
        </APIContext.Provider>
    )
}

export const useMyContext = () => {
    const { user, pagination, setPagination, apiData, isSigned, Login, Logout, getListaDeLivros, getDetalhesLivro, error, setError } = useContext(APIContext);

    return { user, pagination, setPagination, apiData, isSigned, Login, Logout, getListaDeLivros, getDetalhesLivro, error, setError };
}