import Image from 'next/image'
import Comment from '../../components/Comment';
import Container from '../../components/Container';
import Markdown from './../../components/Markdown';
import Typography from '@material-ui/core/Typography';
import CustomMarkdownRender from './../../components/CustomMarkdownRender';
import { boxShadow } from 'styled-system';
import AuthorDetails from '../../components/AuthorDetails';
import readingTime from 'reading-time';
import Categories from '../../components/Categories';
import NavBar from '../../components/NavBar';

export default function Post(data) {

    const post = data.post;
    console.log(post);

    const rtime = readingTime(post.content);

    return (
        <div style={{ padding: '5%' }}>
            <NavBar></NavBar>
            <Container>
                <Typography variant="h1" component="h2" gutterBottom>
                    {post.title}
                </Typography>
                <AuthorDetails details={post.author} date={post.date} readingTime={rtime}></AuthorDetails>
                <Categories categories={post.categories.nodes}></Categories>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    {post.featuredImage !== undefined ? (<img style={{width: '90%', marginBottom: '1rem', boxShadow: '0 5px 10px rgb(255 255 255 / 12%)'}} src={post.featuredImage.node.sourceUrl} />) : (<></>)}
                </div>
                {/* <article className="article-data" dangerouslySetInnerHTML={{ __html: post.content }}></article> */}
                <CustomMarkdownRender className="article-data">{post.content}</CustomMarkdownRender>
                {/* <Markdown input={post.content}></Markdown> */}
                {/* <p>Comments: {post.commentCount}</p>
            {post.comments.edges.map((comment) => {
                return (
                // <div dangerouslySetInnerHTML={{ __html: comment.node.content }}></div>
                <Comment comment={comment.node}></Comment>
                )
            })} */}
            </Container>

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
                        date
                        tags {
                            nodes {
                              name
                              slug
                            }
                          }
                          categories {
                            nodes {
                              name
                              link
                              slug
                            }
                          }
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
                        author {
                            node {
                              avatar {
                                url
                              }
                              name
                              nicename
                              nickname
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