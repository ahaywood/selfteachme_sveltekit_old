<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentPost = params.slug;
    const response = await fetch('/api/blog.json');
    const posts = await response.json();

    const matchingPosts = posts.filter((post) => {
      return post.slug.includes(currentPost);
    });

    return {
      props: {
        post: matchingPosts
      }
    };
  };
</script>

<script lang="ts">
  export let post;
</script>

{#if post.length}
  <h1>{post[0].title}</h1>
  <h2>{post[0].publishedDate}</h2>
  {@html post[0].html}
{/if}
