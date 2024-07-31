import { Loader } from '@googlemaps/js-api-loader';
import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';

export const MapsAutocomplete = (node: HTMLInputElement) => {
	const loader = new Loader({
		apiKey: PUBLIC_GOOGLE_MAPS_API_KEY,
		version: 'weekly',
		libraries: ['places']
	});

	loader
		.importLibrary('places')
		.then(({ Autocomplete }) => {
			const autocomplete = new Autocomplete(node, {});

			autocomplete.addListener('place_changed', () => onPlaceChanged(autocomplete));
		})
		.catch((e) => {
			console.error(e);
		});

	const onPlaceChanged = (autocomplete: google.maps.places.Autocomplete) => {
		console.log(autocomplete.getPlace().formatted_address);
	};
};
