

// handles the emphasis of the main page

export default function Reason() {
    return (
            <div className="flex flex-col z-10   bg-white  h-auto">
                
                <div className="flex flex-col bg-local bg-reason-bg bg-cover opacity-75 h-screen px-2 md:flex-row md:justify-between">

                    <div className="h-auto min-w-fit bg-gray-200 m-10 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg  bg-opacity-75" >
                        <p className="flex text-2xl uppercase text-center tracking-wide pl-2 text-[#000000] font-front-page-text-font">Why Pasada</p>
                    </div>

                    <div className=" flex min-w-fit h-auto items-center bg-gray-200 m-10 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg bg-opacity-75  " >
                        <p className="flex text-2xl opacity-100 text-[#000000] font-front-page-text-font">write something here</p>
                    </div>
                </div>

            </div>
    )
}