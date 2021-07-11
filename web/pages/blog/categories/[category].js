import Link from 'next/link'
import Post from '../../../components/Posts'
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router'
import NavBar from '../../../components/NavBar';

export default function Home(props) {

    // console.log("Context: ", context.params)
    console.log("Props: ", props)
    console.log("Posts: ", props.posts)
    const router = useRouter()

    return (
        <div style={{ marginTop: '1rem' }}>
            <NavBar></NavBar>
            <div style={{ padding: '5%' }}>
                <Typography variant="h1" component="h2" gutterBottom>
                    {"Category: " + router.query.category}
                </Typography>
            </div>
            {props.posts.nodes.map((post) => {
                return (
                    <Post details={post}></Post>
                )
            })}
        </div>
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
                    slug
                    author {
                        node {
                          name
                          nicename
                          nickname
                          slug
                          email
                          avatar {
                            url
                          }
                        }
                      }
                    featuredImage {
                        node {
                          sourceUrl
                        }
                      }
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