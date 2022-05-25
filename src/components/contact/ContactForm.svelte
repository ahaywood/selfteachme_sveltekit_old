<script lang="ts">
  import ButtonSubmit from '$components/shared/ButtonSubmit.svelte';
  import supabase from '$utils/db';

  let errors = {
    firstName: null,
    lastName: null,
    email: null,
    message: null
  };
  let firstName: string = '';
  let lastName: string = '';
  let email: string = '';
  let emailUpdates: string = '';
  let message: string = '';

  const handleSubmit = async () => {
    // build object
    const dataEntry = {
      firstName,
      lastName,
      email,
      emailUpdates,
      message
    };

    // send to db
    const { data, error } = await supabase.from('contact').insert([dataEntry]);

    // reset values
    firstName = '';
    lastName = '';
    email = '';
    emailUpdates = '';
    message = '';
  };
</script>

<form
  class="kwes-form grid grid-cols-2 gap-x-8 mb-16 md:mb-0"
  on:submit|preventDefault={handleSubmit}
>
  <div class="relative col-span-2 md:col-span-1">
    <label for="firstName">First Name</label>
    <input class={errors.firstName && `error`} type="text" name="firstName" />
    {#if errors.firstName}<div class="form-error">First Name is required</div>{/if}
  </div>
  <div class="relative col-span-2 md:col-span-1">
    <label for="lastName">Last Name</label>
    <input type="text" name="lastName" />
    {#if errors.lastName}<div class="form-error">Last Name is required</div>{/if}
  </div>
  <div class="relative col-span-full">
    <label for="email">Email Address</label>
    <input type="email" name="email" />
    {#if errors.email}<div class="form-error">Email is required</div>{/if}
  </div>
  <div class="relative col-span-full">
    <input type="checkbox" name="emailUpdates" id="emailUpdates" />
    <label class="cursor-pointer" for="emailUpdates"> I'd like to receive email updates. </label>
  </div>
  <div class="relative col-span-full">
    <label for="message">Message</label>
    <textarea class="textarea" name="message" id="message" />
    {#if errors.message}<div class="form-error">Message is required</div>{/if}
  </div>
  <div class="col-span-full">
    <ButtonSubmit className="with-emoji mt-12 light">
      <span
        class="relative -top-4 md:top-2 -left-24 text-8xl"
        role="img"
        aria-label="dancing woman"
      >
        💃🏻
      </span>
      <span
        class="hidden md:block lg:inline font-handwriting normal-case text-8xl font-normal relative -top-0 md:-top-2 lg:top-4 text-black mr-4"
      >
        Submit
      </span>
      <span class="relative md:-top-8 lg:top-0">
        <span class="inline lg:hidden xl:inline">Send this sucker</span> into the inter webs
      </span>
    </ButtonSubmit>
  </div>
</form>
