<script lang="ts">
  export let className: string = '';
</script>

<button class={`button ${className || 'primary'}`} type="submit" name="submit">
  <div class="outline" />
  <div class="content"><slot /></div>
</button>
