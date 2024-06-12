import React from 'react';
import savings from '../../../public/piggy.svg';
import LinkButton from "../layout/LinkButton";

const Home = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen md:flex-row flex-col">
            <div className="mt-32 md:mt-0 w-1/2 flex flex-col items-center justify-center">
                <h1 className='text-lg text-center'>Bem vind@ ao <span className="text-2xl bg-yellow-500 rounded text-gray-800 px-2">ProjectManager!</span></h1>
                <p className='text-center'>Começe a gerenciar seu projeto agora mesmo!</p>
                <LinkButton to='/newproject' text='Criar Novo Projeto' className='bg-gray-800 text-white py-2 px-4 rounded my-4 hover:bg-black hover:text-yellow-500 ease-in duration-300' />
            </div>
            <div className="md:w-1/2 w-full h-full md:bg-gray-600 bg-gray-800 md:rounded-l-full rounded-t-[20%]  flex flex-col items-center justify-center md:mt-0 mt-8">
                <img className="w-64 h-64 md:w-96 md:h-96 mx-4" src={savings} alt="money-face" />
            </div>
        </div>
    );
};

export default Home;
