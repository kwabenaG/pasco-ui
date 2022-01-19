// handles the  main inddex page


import { useRouter } from 'next/router'
import Head from 'next/head';
import Image from 'next/image';


// local imports
import Header from '../components/Header';
import Emphasis from '../components/Main/Emphasis';
import Search from '../components/Main/Search';
import Reason from '../components/Reason';
import Section from '../components/Section';
import Footer from '../components/Footer';
import FooterExt from '../components/FooterExt';
// import BGImage from "../components/BGImage"


// local imports
import Layout from '../components/Layout'

export default function Home() {

  return (
    <div>
      <Layout>
    
        <Header />

        <main className="flex flex-col min-w-full text-center">
            {/* bg image and stylish */}
            <div className="bg-cover bg-pasco-bg bg-no-repeat min-h-screen min-w-full">
              <div className="flex flex-col text-center m-20 sm:m-20 md:m-28">
                <Emphasis />
                <Search />
              </div>
            </div> {/* end of image and search */}
            
            {/* section */}
            <div classNam="flex">
              <Reason />
              <Section />
            </div>
        </main>
         {/* footer */}
         <div>
              <Footer />
          </div>
          <>
          <FooterExt />
          </>   
      </Layout>
    </div>
    
    
  )
}
