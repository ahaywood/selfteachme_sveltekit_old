<script lang="ts">
	import supabase from "$utils/db";

	let question: string;
	let submittedByName: string;
	let submittedByEmail: string;

	const SubmitQuestion = async (e) => {
		const ama = {
			question,
			submittedByName,
			submittedByEmail
		}

		const { data, error } = await supabase
			.from('ama')
			.insert([ ama ]);

		// SLACK BOT
		// fetch('https://hooks.slack.com/services/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', {
		// 		method: 'POST',
		// 		headers: {
		// 				'Authorization': 'xapp-1-A03FJ0K4U4X-3545057803972-0382939dc01276442acc53e3f293e6c4a6b388bb5387184286db9349ef447c7b',
		// 				'Content-type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 				'text': `🎉 AMA: ${submittedByName} at ${submittedByEmail} just asked you a question\n ${question}`
		// 		})
		// });

		question = '';
		submittedByEmail = '';
		submittedByName = '';
	}
</script>

<svelte:head>
	<title>Ask Me Anything | SelfTeach.me</title>
</svelte:head>

<form method="GET" on:submit|preventDefault={SubmitQuestion}>
	<label for="submittedByName">Name</label><br />
	<input type="text" name="submittedByName" bind:value={submittedByName} /><br />
	<label for="submittedByEmail">Email</label><br />
	<input type="text" name="submittedByEmail" bind:value={submittedByEmail} /><br />
	<label for="question">Question</label><br />
	<textarea name="question" bind:value={question}></textarea><br />
	<button type="submit">Ask</button>
</form>