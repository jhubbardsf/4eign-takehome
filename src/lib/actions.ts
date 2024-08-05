import { Loader } from '@googlemaps/js-api-loader';
import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';
import { dateFormatter } from '$lib/utils/dates';

type Autocomplete = google.maps.places.Autocomplete;

/**
 * Svelte Action that initializes a google maps autocomplete and binds it to the
 * attached node
 * @param node Node of the input
 */
export const MapsAutocomplete = (node: HTMLInputElement) => {
	const loader = new Loader({
		apiKey: PUBLIC_GOOGLE_MAPS_API_KEY,
		version: 'weekly',
		libraries: ['places']
	});

	const onPlaceChanged = (Autocomplete: Autocomplete) => {
		console.log(Autocomplete.getPlace().formatted_address);
	};

	loader
		.importLibrary('places')
		.then(({ Autocomplete }) => {
			const autocomplete = new Autocomplete(node, {});

			autocomplete.addListener('place_changed', () => onPlaceChanged(autocomplete));
		})
		.catch((e) => {
			console.error(e);
		});
};

/** Min Date */
export const MinDate = (node: HTMLInputElement, date: Date) => {
	const minDate = dateFormatter(date, 'yyyy-mm-dd');
	node.setAttribute('min', minDate);
};
