/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const lang = event.url.pathname.startsWith('/en') ? 'en' : 'hr';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
}
