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
        <div className="static flex -ml-10 mr-10 mt-16 sm:min-w-full">
            <span className="flex items-center absolute py-3 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-slate h-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </span>
            <form action="#" className="flex min-w-full ">
                <input name = "search" className= "h-20 pl-10 pr-2 text-gray-600 rounded-tl-full rounded-bl-full placeholder-slate focus:outline-none placeholder:italic focus:border-red-500 focus:ring-1 shadow-md md:w-screen" 
                type='text' placeholder='Search any past question... Use course code to search eg. 451 Eng Maths' />
                {/* school type */}
                <select 
                name = "school_type" className= "h-20 pl-2 pr-2  focus:outline-none focus:border-red-500 focus:ring-1 shadow-md" 
                type='text'>
                    <option value={value} className="p-2 tracking-widest italic text-gray-300">Choose Your School</option>
                    <option value="knust" className="tracking-widest">KNUST</option>
                    <option value="ug" className="tracking-widest">UG</option>
                    <option value="upsa" className="tracking-widest">UPSA</option>
                    <option value="ucc" className="tracking-widest">UCC</option>
                </select>
                <button onClick={logValue()} className="flex items-center px-4 bg-red-500 h-20 text-white rounded-br-full shadow-lg rounded-tr-full font-front-page-text-font tracking-wide text-lg ">Search</button>
            </form>
        </div>
    )
}

export default Search
