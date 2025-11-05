import { request, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT!;

export async function getAllPosts() {
  const query = gql`
    query GetAllPosts {
      posts(first: 10) {
        nodes {
          id
          title
          slug
          date
          excerpt
        }
      }
    }
  `;
  const data = await request(endpoint, query);
  return data.posts.nodes;
}
