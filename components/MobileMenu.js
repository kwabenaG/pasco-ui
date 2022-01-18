
import Link from 'next/link';



function MobileMenu({Icon, href}) {
    return (
        <>
        <div className="flex text-white">
            <a ><Icon className="flex items-center h-8" /></a>
        </div>
        </>
    )
}


export default MobileMenu
