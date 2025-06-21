
"use client";
import styled from 'styled-components';
import SplineCompo from './SplineCompo';

const LandingPageContainer = styled.div`
  background-image: url('/image/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  min-height: 100vh;
  width: 100%;
`;


const Landing = () => {
  return (
    <div>
    <LandingPageContainer>
        
        <div className='overflow-hidden'>
            <header className='flex flex-row '>
            <h1 className='text-amber-100 text-2xl m-5 ml-15 '>StoreROOM</h1>
            <nav className='flex justify-center items-center w-full py-4'>
                <div className='flex space-x-4'>
                <a href="#" className='text-amber-100 px-3 py-2 hover:text-blue-600'>Home</a>
                <a href="#" className='text-amber-100 px-3 py-2 hover:text-blue-600'>About</a>
                <a href="#" className='text-amber-100 px-3 py-2 hover:text-blue-600'>Contact</a>
            </div>
            </nav>
            <div className='flex items-center justify-center'>
            <button className='bg-gray-600 flex items-center text-white justify-center mt-2 mr-5 pt-2 pb-2 pl-4 pr-4 rounded hover:bg-gray-400 transition duration-300 cursor-pointer'>
                Signup
            </button>
            
            <button className='bg-gray-600 text-white justify-center  mt-2 mr-5 pt-2 pb-2 pl-4 pr-4 rounded hover:bg-gray-400 transition duration-300 cursor-pointer'>
                Login
            </button>
            </div>
        </header>
        <div className='flex'>
            
            <div className='flex flex-col  justify-center h-screen w-1/2 ml-10 mr-10'>
                <h1 className='text-4xl text-white font-bold mb-4'>Welcome to StoreROOM</h1>
            <p className='text-lg text-white mb-8'>Your one-stop solution for all your storage needs.</p>
             <div className='flex  flex-row items-left justify-left space-x-4'>
            <button className='bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300'>
                Get Started →
            </button>
            </div>
            </div>

            <div className='flex flex-col items-right justify-right h-screen w-full scale-150 mt-50 ml-5'>
                <SplineCompo />
            </div>

        </div>
         
            
        </div>

           
    </LandingPageContainer>
    <footer className='bg-gray-800 w-full text-white py-4 m-0'>
         <div className='container mx-auto text-center'>
            <p>&copy; 2025 StoreROOM. All rights reserved.</p>
        </div>
    </footer>
    </div>
  );
};

export default Landing;
