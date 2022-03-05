import {useState, useEffect} from 'react';
import { Link } from "react-scroll"


function Search() {
    // values
    const [value, setValue] = useState("Choose School")
    
    function logValue() {
        console.log(value);
    }
    // function chooseSchool(){
    //     if(value === 'knust'){
    //         setValue = 'knust'
    //     }
    
    // useEffect(
    //     chooseSchool()
    // );
    



    return (
        <div className="relative flex mt-16">
            <span className="flex items-center absolute py-3 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-slate h-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </span>
            <form action="#" className="flex flex-col space-y-6 w-full items-center md:flex ">

                <input name="#" className="flex h-10 rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full md:flex " />
                <select className="flex h-10 p-2 bg-white text-gray-700 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg">
                    <option value="Choose School">Choose School</option>
                    <option value="knust">KNUST</option>
                    <option value="ucc">UCC</option>
                    <option value="upsa">UPSA</option>

                </select>
                <button type="submit" className="flex text-white bg-front-page-text-color px-4 py-2 rounded-lg md:flex-col">Search Past Questions</button>
           
            </form>
        </div>
    )
}

export default Search
