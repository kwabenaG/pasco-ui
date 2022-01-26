// handles the footer
 



export default function FooterExt() {
    return (
       <div className="flex justify-between h-4 min-w-screen  items-center bg-[#06202A] m-4">

           <div className="flex justify-center">
                <div className="m-2 ">
                        <a href="#" className="text-right italic text-gray-400 font-front-page-text-font text-sm tracking-widest">tishbe developers</a>
                </div>
            </div>

            {/* copyrights */}
            <div className="flex ">
                <div className="m-2 ">
                        <p className="text-right text-gray-400 text-sm font-front-page-text-font">&copy; Copyrights 2022</p>
                </div>
            </div>

            {/* made with love */}
            <div>
                <div className=" flex m-2">
                        <p className="flex  text-gray-400 font-front-page-text-font text-sm ">Made with love
                        <span className='flex md:px-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        </p>
                </div>
            </div>
        </div>
    )
}
