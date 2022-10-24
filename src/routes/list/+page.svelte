<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ ListOfPeople } = data);
</script>

<h2>List</h2>

<ul>
	{#each $ListOfPeople.data?.allPeople?.edges ?? [] as edge}
		<li style={`background-color: ${edge?.node?.skinColor};`}>
			<a href={`/people/${edge?.node?.id}`}>
				{edge?.node?.name}
			</a>
		</li>
	{/each}
</ul>
