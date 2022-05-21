<script lang="ts">
  export let className: string = '';
  export let href: string;
  export let target: string = '_self';
</script>

<a {href} class={`button ${className || 'primary'}`} target={target || '_self'}>
  <div class="outline" />
  <div class="content"><slot /></div>
</a>
