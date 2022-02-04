import React from 'react';
import ReactPageScroller from 'react-page-scroller';

export default function Home() {
	const [pageNumber, setPageNumber] = React.useState<number>();

	function handlePageChange(number: number) {
		setPageNumber(number);
	}

	function handleBeforePageChange() {}

	return (
		<React.Fragment>
			<img src='LOGO-BLACK.png' width={100} className='center-x fixed' />
			<ReactPageScroller
				pageOnChange={handlePageChange}
				onBeforePageScroll={handleBeforePageChange}
				customPageNumber={pageNumber}>
				<LandingScreen />
				<LandingScreen />
			</ReactPageScroller>
			<div className='page-number'>{pageNumber}</div>
		</React.Fragment>
	);
}

function LandingScreen() {
	return (
		<div className='fullscreen'>
			<div className='center limit600'>
				<img src='artisan.jpg' width={600} />
				<h1>Artisans of the digital age.</h1>
				<p
					style={{
						color: 'gray',
						position: 'absolute',
						right: 0,
						bottom: -20,
						fontSize: 8,
					}}>
					photographed by @quinoal
				</p>
				<p>
					Praesent gravida tempus augue, in efficitur ex volutpat
					vitae. Aliquam euismod augue convallis feugiat interdum. Nam
					arcu mauris, imperdiet eget neque eu, accumsan mattis leo.
					Mauris ut leo auctor, rhoncus augue a, vehicula enim. Etiam
					tempor erat nulla, vel iaculis nulla placerat vel. Curabitur
					ut bibendum urna. Vivamus in libero vitae enim dictum
					vulputate a vitae nibh.
				</p>
			</div>
		</div>
	);
}
