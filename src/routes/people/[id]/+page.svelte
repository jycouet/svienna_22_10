<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ people } = data);
</script>

<pre>{JSON.stringify($people.data, null, 2)}</pre>
