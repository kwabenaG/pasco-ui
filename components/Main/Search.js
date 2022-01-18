

function Search() {
    return (
        <div className="flex -ml-10 mr-10 mt-16 sm:min-w-full">
            <spann className="flex items-center absolute py-3 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-slate h-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </spann>
            <form action="#" className="flex min-w-full sm:min-w-full">
                <input name = "search" className= "h-12 pl-10 pr-2 text-gray-600 rounded-tl-full rounded-bl-full min-w-full placeholder-slate focus:outline-none placeholder:italic focus:border-red-500 focus:ring-1 shadow-md" 
                type='text' placeholder='Search any past question... Use course code to search eg. 451 Eng Maths' />
                <button className="flex items-center px-4 bg-red-500 h-12 text-white rounded-br-full shadow-lg rounded-tr-full ">Search</button>
            </form>
        </div>
    )
}

export default Search
