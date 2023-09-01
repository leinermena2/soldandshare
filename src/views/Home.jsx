import React, { useEffect, useContext } from "react";
import NavBarHome from "../components/NavBars/NavBarHome";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";

const Home = () => {
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    useEffect(() => {
        console.log(token);
    }, [ token ]); // Agrega un arreglo vacío de dependencias aquí

    useEffect(() => {
        try {
            // Aquí puedes poner el código relacionado con el componente
        } catch (error) {
            navigate('/login');
        }
    }, [navigate]); // Agrega navigate como dependencia aquí

    return (
        <>
            <NavBarHome />
        </>
    );
}

export default Home;
