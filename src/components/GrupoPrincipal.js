import React from 'react';
import  Navbar  from '../components/Navbar'
import  Principal  from '../components/Principal'
import  Sidebar  from '../components/Sidebar'


const GrupoPrincipal = () => {
    return (
        <>
            <Navbar></Navbar>
            <Principal>
            </Principal>
            <Sidebar name="Alberto Gonzalez">
            </Sidebar>
        </>
    );
}

export default GrupoPrincipal;
