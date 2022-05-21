<script lang="ts">
  export let className: string = '';
</script>

<div class={`bg-gold font-condensed uppercase text-2xl font-normal ${className}`}>
    <ul class="list-none flex flex-col md:flex-row justify-center items-center">
      <li class="footer-nav-item">
          <a href="/start-here" class="h-6 hover:text-sapphire">Start Here</a>
      </li>
      <li class="mb-0 hidden md:block">
        <img src="/img/x--footer.svg" width="22" height="22" alt="x" />
      </li>
      <li class="footer-nav-item">
          <a href="/about" class="h-6 hover:text-sapphire">About</a>
      </li>
      <li class="mb-0 hidden md:block">
        <img src="/img/x--footer.svg" width="22" height="22" alt="x" />
      </li>
      <li class="footer-nav-item">
          <a href="/blog" class="h-6 hover:text-sapphire">Blog</a>
      </li>
      <li class="mb-0 hidden md:block">
        <img src="/img/x--footer.svg" width="22" height="22" alt="x" />
      </li>
      <li class="footer-nav-item">
          <a href="/newsletter" class="h-6 hover:text-sapphire">Newsletter</a>
      </li>
      <li class="mb-0 hidden md:block">
        <img src="/img/x--footer.svg" width="22" height="22" alt="x" />
      </li>
      <li class="footer-nav-item">
        <a href="http://compressed.fm" target="_blank" class="h-6 hover:text-sapphire" rel="noreferrer">
          Podcast
        </a>
      </li>
      <li class="mb-0 hidden md:block">
        <img src="/img/x--footer.svg" width="22" height="22" alt="x" />
      </li>
      <li class="footer-nav-item">
        <a href="https://selfteachme.circle.so/" target="_blank" class="h-6 hover:text-sapphire" rel="noreferrer">
          Community
        </a>
      </li>
      <li class="mb-0 hidden md:block">
        <img src="/img/x--footer.svg" width="22" height="22" alt="x" />
      </li>
      <li class="footer-nav-item">
          <a href="/contact" class="h-6 hover:text-sapphire">Contact</a>
      </li>
    </ul>
  </div>