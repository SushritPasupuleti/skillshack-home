import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}

export async function getStaticProps(context) {

  const res = await fetch('https://dmrks.org/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query AllCategoriesQuery {
            categories {
                nodes {
                  id
                  slug
                  name
                }
              }
        }
          `,
      })
  })

  console.log("check1")

  const json = await res.json()

  console.log("check2")

  console.log("Returned: ", json.data.categories.nodes)

  return {
      props: {
          categories: json.data.categories,
      },
  }

}