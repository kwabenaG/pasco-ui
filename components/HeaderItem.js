
import Link from 'next/link';

function HeaderItem({ href, Icon, title}) {
    return (
        <Link href={href}>
            <div className="flex flex-col items-center group w-12 hover-white sm:w-20">
                <Icon className='h-8 mb-1 mt-2 group-hover:animate-bounce' />
                <p className="opacity-0 group-hover:opacity-100 ml-2 sm:group-hover:opacity-100 tracking-widest ">{title}</p>
            </div>
        </Link>
    )
}

export default HeaderItem
