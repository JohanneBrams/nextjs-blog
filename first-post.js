import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>My name is Johanne, and I am from Denmark.</a>
        </Link>
      </h2>
    </>
  )
}