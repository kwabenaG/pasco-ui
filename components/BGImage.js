
import Image from "next/image"


function BGImge() {
    return (
        
        <div className="m-1 z-0">
            <Image className="rounded-tr-full" src="/images/bg-student.jpg" width={800}  height={500} layout='responsive' objectFit="cover" />
        </div>
    )
}

export default BGImge
