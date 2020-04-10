import { NextPage } from 'next'

const IndexPage: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>
    Hello World! - useragent: { userAgent }
  </h1>
)

IndexPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent

  return { userAgent }
}

export default IndexPage
