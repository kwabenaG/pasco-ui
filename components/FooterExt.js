// handles the footer
 



export default function FooterExt() {
    return (
       <div className="flex justify-between h-4 min-w-screen  items-center bg-[#06202A] m-4">

           <div className="flex justify-center">
                <div className="m-2 ">
                        <a href="#" className="text-right italic ">tishbe developers</a>
                </div>
            </div>

            {/* copyrights */}
            <div className="flex ">
                <div className="m-2 ">
                        <p className="text-right">&copy; Copyrights 2022</p>
                </div>
            </div>

            {/* made with love */}
            <div>
                <div className=" flex m-2">
                        <p>Made with love</p>
                </div>
            </div>
        </div>
    )
}
