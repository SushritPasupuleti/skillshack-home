import Link from 'next/link'
import Typography from '@material-ui/core/Typography';
import Post from '../../components/Posts';
import NavBar from '../../components/NavBar';

export default function CategoriesPage(data) {
    console.log("Posts: ", data.posts);
    return (
        <div style={{ marginTop: '1rem', padding: '5%' }}>
            <NavBar></NavBar>
            <Typography variant="h1" component="h2" gutterBottom>
                Home
            </Typography>
            {data.posts.nodes.map((post) => {
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
          query AllPosts {
            posts {
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
        })
    })

    console.log("check1")

    const json = await res.json()

    console.log("check2")

    console.log("Returned: ", json.data.posts.nodes)

    return {
        props: {
            posts: json.data.posts,
        },
    }

}