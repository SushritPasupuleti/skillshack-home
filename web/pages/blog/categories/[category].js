import Link from 'next/link'

export default function Home(data) {

    // console.log("Context: ", context.params)
    console.log("Posts: ", data.posts)

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
            query GetCategoryPosts($categoryName: String) {
                posts(where: {categoryName: $categoryName}) {
                  nodes {
                    id
                    title
                    content
                    excerpt
                  }
                }
              }
            `,
            variables: {
                categoryName: context.params.category,
            }
        })
    })

    console.log("check1")

    const json = await res.json()

    console.log("check2")

    console.log("Returned: ", json.data.posts)

    return {
        props: {
            posts: json.data.posts,
        },
    }

}

export async function getStaticPaths() {

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
        `})
    })

    const json = await res.json()
    const categories = json.data.categories.nodes;

    const paths = categories.map((category) => ({
        params: { category: category.slug },
    }))

    return { paths, fallback: false }

}