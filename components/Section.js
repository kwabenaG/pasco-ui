
import Image from 'next/image';

function Section() {
    return (
        <section className="">
                <div className='flex flex-col mt-7 mb-5'>
                    <h1 className="flex text-2xl px-20 py-4 min-w-full justify-center tracking-widest uppercase font-front-page-text-font sm:text-4xl sm:px-16 md:px-40">Latest Past  Questions</h1>
    
                </div>
                {/* display sliding images of past questions with just one view on mobile and three per view on medium to large */}
                <div className="flex flex-col items-center group-hover justify-center sm:flex-col md:flex-row lg:flex-row">
                   
                   {/* 3 selections of the passco images */}

                    <div className="flex flex-col items-baseline mr-30 ml-30 mb-10 w-auto h-96 drop-shadow-xl bg-gray-200 top-20 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md sm:ml-10 sm:mr-10">
                        <Image className="flex flex-grow rounded-tl-md rounded-tr-md sm:ml-10 sm:mr-10" src='/images/pasco-image.jpeg' width={320} height={600} layout='intrinsic'  />
                        <p className="text-gray-500 px-6 py-2 tracking-wide font-front-page-text-font">KNUST </p>
                        <p className="flex items-center text-gray-500 px-4 py-2 font-front-page-text-font">Course Code: AE 401 
                            <span className="flex px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="inherent">
                                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            </span>
                        </p>
                        <h5 className="text-gray-500 px-4 py-2 text-xs items-center font-front-page-text-font"><span className="italic">Posted 7:00 am</span></h5>
                        <div className="flex mx-20 mb-6 mt-2 items-center">
                            <button className="flex px-2 py-2 rounded-tl-lg bg-front-page-text-color font-front-page-text-font text-sm tracking-widest text-white">Get Past Question</button>
                        </div>
                    </div>


                    <div className="flex flex-col items-baseline mr-30 ml-30 mb-10 w-auto h-96 drop-shadow-xl bg-gray-200 top-20 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md sm:ml-10 sm:mr-10">
                        <Image className="flex flex-grow rounded-tl-md rounded-tr-md sm:ml-10 sm:mr-10" src='/images/pasco-image.jpeg' width={320} height={600} layout='intrinsic'  />
                        <p className="text-gray-500 px-6 py-2 tracking-wide font-front-page-text-font">KNUST </p>
                        <p className="flex items-center text-gray-500 px-4 py-2 font-front-page-text-font">Course Code: AE 401 
                            <span className="flex px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="inherent">
                                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            </span>
                        </p>
                        <h5 className="text-gray-500 px-4 py-2 text-xs items-center font-front-page-text-font"><span className="italic">Posted 7:00 am</span></h5>
                        <div className="flex mx-20 mb-6 mt-2 items-center">
                            <button className="flex px-2 py-2 rounded-tl-lg bg-front-page-text-color font-front-page-text-font text-sm tracking-widest text-white">Get Past Question</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-baseline mr-30 ml-30 mb-10 w-auto h-96 drop-shadow-xl bg-gray-200 top-20 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md sm:ml-10 sm:mr-10">
                        <Image className="flex flex-grow rounded-tl-md rounded-tr-md sm:ml-10 sm:mr-10" src='/images/pasco-image.jpeg' width={320} height={600} layout='intrinsic'  />
                        <p className="text-gray-500 px-6 py-2 tracking-wide font-front-page-text-font">KNUST </p>
                        <p className="flex items-center text-gray-500 px-4 py-2 font-front-page-text-font">Course Code: AE 401 
                            <span className="flex px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="inherent">
                                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            </span>
                        </p>
                        <h5 className="text-gray-500 px-4 py-2 text-xs items-center font-front-page-text-font"><span className="italic">Posted 7:00 am</span></h5>
                        <div className="flex mx-20 mb-6 mt-2 items-center">
                            <button className="flex px-2 py-2 rounded-tl-lg bg-front-page-text-color font-front-page-text-font text-sm tracking-widest text-white">Get Past Question</button>
                        </div>
                    </div>
                    
                </div>


                {/* <div>
                    <p> this is the section</p>
                </div> */}
        </section>
    )
}

export default Section
