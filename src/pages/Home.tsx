import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Home() {
	const params = useParams();
	const [pageNumber, setPageNumber] = React.useState<number>(
		Number(params.pageNumber) - 1
	);

	function handlePageChange(number: number) {
		setPageNumber(number);
		window.history.pushState('', '', `/${number + 1}`);
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
				<ProjectsSection />
				<ContactUs />
			</ReactPageScroller>
			<div className='page-number center-x'>{pageNumber! + 1}</div>
		</React.Fragment>
	);
}

function LandingScreen() {
	return (
		<div className='fullscreen'>
			<div className='center limit600'>
				<img src='artisan.jpg' className='limit600' />
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
				<p className='small-text'>
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

function ProjectsSection() {
	const navigate = useNavigate();

	const gotoGallery = () => {
		navigate('/gallery');
	};

	return (
		<LeftRight
			leftContent={<FlexibleImage url={'artisan.jpg'} rounded />}
			rightContent={
				<div className='ml-2 mr-2'>
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
					<h1>hand-crafted projects</h1>
					<p className='small-text'>
						Praesent gravida tempus augue, in efficitur ex volutpat
						vitae. Aliquam euismod augue convallis feugiat interdum.
						Nam arcu mauris, imperdiet eget neque eu, accumsan
						mattis leo. Mauris ut leo auctor, rhoncus augue a,
						vehicula enim. Etiam tempor erat nulla, vel iaculis
						nulla placerat vel. Curabitur ut bibendum urna. Vivamus
						in libero vitae enim dictum vulputate a vitae nibh.
					</p>
					<Link to='/gallery'>gallery</Link>
				</div>
			}
		/>
	);
}

function ContactUs() {
	return (
		<LeftRight
			leftFr={2}
			rightFr={1}
			rightOnTop
			leftContent={<FlexibleImage url={'artisan.jpg'} rounded />}
			rightContent={
				<div className='ml-3'>
					<h1>get in touch with us</h1>
					<p className='small-text'>
						email:{' '}
						<a href='mailto:contact@katto.studio'>
							contact@katto.studio
						</a>
						<br />
						instagram:{' '}
						<a href='https://instagram.com/kattostudios'>
							@kattostudios
						</a>
						<br />
						<br />
						(c) Copyright 2022, Katto Studios LLP <br />
						Website Designed by Ryan Tan
					</p>
				</div>
			}
		/>
	);
}

interface LeftRightProps {
	leftContent: any;
	rightContent: any;
	leftFr?: number;
	rightFr?: number;
	rightOnTop?: boolean;
}

function LeftRight(props: LeftRightProps) {
	return (
		<div className='fullscreen'>
			<div
				className='center limit800 left-right-container'
				style={{
					gridTemplateColumns: `${
						props.leftFr != undefined ? props.leftFr : 1
					}fr ${props.rightFr != undefined ? props.rightFr : 1}fr`,
				}}>
				<div className={props.rightOnTop ? 'right' : 'left'}>
					{props.leftContent}
				</div>
				<div className={props.rightOnTop ? 'left' : 'right'}>
					{props.rightContent}
				</div>
			</div>
		</div>
	);
}

interface FlexibleImageProps {
	url: string;
	width?: number;
	height?: number;
	rounded?: boolean;
	className?: string;
}

export function FlexibleImage(props: FlexibleImageProps) {
	return (
		<div
			style={{
				width: props.width != undefined ? props.width : '100%',
				height: props.height != undefined ? props.height : '100%',
				background: `url(${props.url}) no-repeat center center`,
				backgroundSize: 'cover',
			}}
			className={`${props.rounded ? 'rounded30' : ''}${
				props.className != undefined ? props.className : ''
			}`}></div>
	);
}
