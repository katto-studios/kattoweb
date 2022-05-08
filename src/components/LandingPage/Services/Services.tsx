import { Link } from 'react-router-dom';

export default function Services(props: any) {
	return (
		<div className='services'>
			<svg
				className='top-wave'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
				preserveAspectRatio='none'>
				<path
					fill='var(--c2)'
					fill-opacity='1'
					d='M0,32L48,48C96,64,192,96,288,138.7C384,181,480,235,576,261.3C672,288,768,288,864,245.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>
			<div className='wrapper'>
				<div className='content'>
					<h1>Our Services</h1>
					<br />
					<div className='columns'>
						<div>
							<h2>🎮 Game Development Services</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Similique voluptatum
								doloremque, nam optio laboriosam corrupti
								recusandae accusantium quisquam distinctio
								beatae ut tempora cumque repellendus! Cum aut
								officiis atque fugit blanditiis.
							</p>
							<br />
							<Link className='button' to='/'>
								See our games
							</Link>
						</div>

						<div>
							<h2>💻 Web Solutions</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Similique voluptatum
								doloremque, nam optio laboriosam corrupti
								recusandae accusantium quisquam distinctio
								beatae ut tempora cumque repellendus! Cum aut
								officiis atque fugit blanditiis.
							</p>
							<br />
							<Link className='button' to='/'>
								See our web solutions
							</Link>
						</div>

						<div>
							<h2>🏗️ Rapid Prototyping Services</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Similique voluptatum
								doloremque, nam optio laboriosam corrupti
								recusandae accusantium quisquam distinctio
								beatae ut tempora cumque repellendus! Cum aut
								officiis atque fugit blanditiis.
							</p>
							<br />
							<Link className='button' to='/'>
								See our rapid prototypes
							</Link>
						</div>
					</div>
				</div>
			</div>
			<svg
				className='bottom-wave'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
				preserveAspectRatio='none'>
				<path
					fill='var(--c2)'
					fill-opacity='1'
					d='M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,74.7C672,64,768,96,864,138.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
			</svg>
		</div>
	);
}
