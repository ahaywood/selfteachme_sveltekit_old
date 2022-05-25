<script>
  import ContactForm from '$components/contact/ContactForm.svelte';
  import Hero from '$components/shared/Hero.svelte';
  import Map from '$components/contact/Map.svelte';
  import ElsewhereOnline from '$components/contact/ElsewhereOnline.svelte';
</script>

<svelte:head>
  <title>Contact | SelfTeach.me</title>
</svelte:head>

<div class="content-grid move-content-up">
  <Hero title="Contact" src="/img/bg__contact.jpg" className="hero" />
  <div class="main md:p-12 px-8 sm:px-0">
    <div class="flex lg:items-center flex-col lg:flex-row pt-2 sm:pt-0">
      <h2
        class="font-handwriting text-7xl md:text-8xl lg:text-7xl xl:text-8xl mr-2 relative md:top-2 lg:top-0"
      >
        Leave a Note
      </h2>
      <h3
        class="font-condensed text-brightPink uppercase text-2xl md:text-3xl bg-underline bg-left-bottom bg-no-repeat pb-6 pr-12"
      >
        Everything starts with a hello
      </h3>
    </div>
    <p class="large-body-copy mb-10 font-serif leading-loose">
      Whether it’s a question, comment, support issue, praise, constructive criticism, short story,
      or musical anecdote, I’d love to hear from you.
    </p>
    <ContactForm />
  </div>
</div>
<Map />
<ElsewhereOnline />
