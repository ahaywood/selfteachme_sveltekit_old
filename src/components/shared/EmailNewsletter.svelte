<script lang="ts">
  import supabase from '$utils/db';
  import ButtonSubmit from './ButtonSubmit.svelte';

  export let className: string = '';
  let firstName: string = '';
  let email: string = '';

  const handleSubmit = async (e) => {
    const newEntry = {
      email,
      first_name: firstName
    };

    const { data, error } = await supabase.from('newsletter').insert([newEntry]);

    // reset values
    firstName = '';
    email = '';
  };
</script>

<div class={`pt-10 md:pt-20 pb-5 md:pb-10 px-mobile md:px-0 vertical-pluses ${className}`}>
  <div class="max-w-7xl sm:container mx-auto grid lg:grid-cols-2 lg:gap-14 xl:gap-28">
    <div>
      <h2
        class="font-condensed relative text-6xl sm:text-7xl md:text-8xl xl:text-9xl uppercase leading-stacked md:leading-stacked xl:leading-stacked mb-4"
      >
        This industry moves fast, <span class="font-handwriting lowercase leading-10">but</span> you
        can stay up to date:
      </h2>
      <p class="text-lg lg:text-xl font-serif">
        Receive a weekly email of the Internet's best from articles, to tutorials, to pro tips.
      </p>
    </div>
    <div>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="flex flex-col sm:flex-row lg:flex-col">
          <div class="sm:mr-4 lg:mr-0">
            <label for="emailSignupFirstName">First Name</label>
            <input type="text" id="emailSignupFirstName" name="firstName" bind:value={firstName} />
          </div>

          <div class="sm:ml-4 lg:ml-0">
            <label for="emailSignupEmail">Email Address</label>
            <input type="text" id="emailSignupEmail" name="email" bind:value={email} />
          </div>
        </div>

        <ButtonSubmit className="with-emoji mb-8 mt-8 mx-1 md:mx-0">
          <span role="img" aria-label="raise hand" class="-left-20 -top-8 text-7xl"> 🙋‍♀️ </span>
          I want to be in the know.
        </ButtonSubmit>
      </form>
    </div>
  </div>
</div>
