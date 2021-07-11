import Image from 'next/image'
import Comment from '../../components/Comment';
import Markdown from './../../components/Markdown';

export default function Post(data) {

    const post = data.post;

    console.log("Post: ", post)

    return (
        <div>
            <h1>{post.title}</h1>
            {post.featuredImage === undefined ? (<Image width="640" height="426" src={post.featuredImage.node.sourceUrl} />) : (<></>)}
            <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
            {/* <Markdown input={post.content}></Markdown> */}
            {/* <p>Comments: {post.commentCount}</p>
            {post.comments.edges.map((comment) => {
                return (
                // <div dangerouslySetInnerHTML={{ __html: comment.node.content }}></div>
                <Comment comment={comment.node}></Comment>
                )
            })} */}
        </div>
    )

}

export async function getStaticProps(context) {

    const res = await fetch('https://dmrks.org/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        id
                        title
                        slug
                        content
                        featuredImage {
                          node {
                            sourceUrl
                            comments {
                              edges {
                                node {
                                  id
                                }
                              }
                            }
                          }
                        }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    console.log("check1")

    const json = await res.json()

    console.log("check2")

    console.log("Returned: ", json.data.post)

    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch('https://dmrks.org/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}