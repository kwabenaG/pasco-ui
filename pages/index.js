// handles the  main inddex page


import { useRouter } from 'next/router'
import Head from 'next/head';

// local imports
import Header from '../components/Header';
// import Emphasis from '../components/Main/Emphasis';


// local imports
import Layout from '../components/Layout'

export default function Home() {

  return (
    <div>
      <Layout>
    
        <Header />

        <main>

        </main>
      
      </Layout>
    </div>
    
    
  )
}
