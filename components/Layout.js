
import Head from 'next/head'



function Layout({title, description, keyword, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keyword" content={keyword} />
            </Head>    

            <div>{children}</div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Pasada | Pasco ',
    description: 'Pasada is a platform for students to learn and share knowledge',
    keyword : 'legon,knust, upsa, ucc, authentic pass  questions and answers'
}

export default Layout
