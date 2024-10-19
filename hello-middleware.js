export default {
	name: 'hello-middleware',
	handle: ({ entry }) => {
		if (entry.path.endsWith('.hello')) {
			return {
				page: 'hello-app-page',
				props: {
					path: entry.path,
				}
			}
		}

		return null
	}
}
