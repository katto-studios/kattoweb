import Landing3D from './Landing3D';

export default function Splash() {
	return (
		<>
			<main>
				<div>
					<Landing3D />
				</div>
				<div>
					<div className='center-y'>
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
