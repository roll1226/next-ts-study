import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>
        Home
      </title>
    </Head>

    <h1>
      Home でーす
    </h1>

    <Link href='/'>
      <a>
        とっぷ
      </a>
    </Link>
  </div>
)

export default Home
