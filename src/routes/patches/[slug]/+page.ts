import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { patches } from '$lib/data/patches';

export const load: PageLoad = ({ params }) => {
	const patch = patches.find(p => p.slug === params.slug);

	if (!patch) {
		throw error(404, 'Patch note not found');
	}

	return { patch };
};