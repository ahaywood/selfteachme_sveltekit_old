<script lang="ts">
  import Arrow from '$components/shared/Icon/Arrow.svelte';
</script>

<div class="max-w-screen-sm lg:max-w-max mx-auto my-12 md:my-20 lg:my-24 px-4">
  <ol class="three-up">
    <li>
      <h3>Just getting started?</h3>
      <p>You want to learn, but there’s so many languages and so many tools.</p>
      <a href="https://selfteachme.ck.page/621ac7c092" target="_blank" rel="noreferrer">
        <Arrow />
        Get a plan
      </a>
    </li>

    <li>
      <h3>Know just enough CSS to be Dangerous?</h3>
      <p>You’ve dabbled in this and that, but want confidence. Intimidation no more!</p>
      <a href="https://selfteachme.ck.page/33458e4380" target="_blank" rel="noreferrer">
        <Arrow /> I need this!
      </a>
    </li>
    <li>
      <h3>Build the application you've always wanted</h3>
      <p>
        Plan, code, and market your own web application. Create the software as a service you’ve
        always wanted, without the overwhelm.
      </p>
      <a href="https://selfteachme.ck.page/4f22b6ebd5" target="_blank" rel="noreferrer">
        <Arrow />
        Yes, count me in!
      </a>
    </li>
  </ol>
</div>

<style lang="postcss">
  .three-up {
    @apply flex list-none flex-col lg:flex-row;
    counter-reset: big-numbers;
  }

  .three-up li {
    @apply flex-1 relative pl-14 sm:pl-28 pb-10 lg:pb-0;
    counter-increment: big-numbers;
  }

  .three-up li::before {
    background: var(--serenade);
    border-radius: 9999px;
    color: white;
    content: counter(big-numbers);
    display: block;
    font-family: 'bodoni-urw', sans-serif;
    font-size: 5rem;
    left: -3rem;
    line-height: 145px;
    position: absolute;
    text-align: center;
    top: -50px;
    width: 145px;
    height: 145px;
    z-index: -1;
  }

  @media (min-width: 640px) {
    .three-up li::before {
      font-size: 7rem;
      left: 0;
    }
  }

  .three-up li h3 {
    @apply font-sans text-2xl font-bold mb-4;
  }

  .three-up li p {
    @apply mb-4 font-serif;
  }

  .three-up li a {
    @apply font-sans text-brightPink uppercase flex font-black items-center;
  }

  .three-up li a:hover {
    @apply text-sapphire;
  }

  :global(.three-up li svg) {
    @apply mr-2 relative left-0;
    fill: currentColor;
    transition: left 0.25s ease-in-out;
  }

  :global(.three-up li a:hover svg) {
    @apply left-1;
  }
</style>
