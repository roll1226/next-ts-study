import { NextComponentType } from "next"
import Link from 'next/link'

const Component: NextComponentType = () => (
  <div>
    Welcome to next.js!
    <Link href='/head'>
      <a>
        ほーむ
      </a>
    </Link>
  </div>
)

export default Component
