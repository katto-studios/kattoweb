import Landing3D from './Landing3D';

export default function Splash() {
	return (
		<>
			<main>
				<div className='column'>
					<Landing3D />
				</div>
				<div className='column'>
					<div className='center-y center-all-mobile'>
						<h1>Artisans of the digital age</h1>
						<p>
							We create hand-crafted interactive digital solutions
							that <b>stand out</b>.
						</p>
						<br></br>
						<a className='button'>learn more</a>
					</div>
				</div>
			</main>
		</>
	);
}
