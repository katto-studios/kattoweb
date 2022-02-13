import { FlexibleImage } from './Home';

export default function Gallery() {
	return (
		<div className='limit800 gallery center'>
			<FlexibleImage url={'artisan.jpg'} height={200} rounded />
			<FlexibleImage url={'artisan.jpg'} height={200} rounded />
			<FlexibleImage url={'artisan.jpg'} height={200} rounded />
			<FlexibleImage url={'artisan.jpg'} height={200} rounded />
		</div>
	);
}
