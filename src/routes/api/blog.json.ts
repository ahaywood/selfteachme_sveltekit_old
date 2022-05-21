import { posts } from "./_blog";

export async function get() {
  return {
    status: 200,
    body: JSON.stringify(posts),
  };
}