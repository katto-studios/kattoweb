import { Link } from 'react-router-dom';

export default function Team(props: any) {
	return (
		<div className='team'>
			<svg
				className='top-wave'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
				preserveAspectRatio='none'>
				<path
					fill='var(--c4)'
					fill-opacity='1'
					d='M0,192L48,197.3C96,203,192,213,288,224C384,235,480,245,576,213.3C672,181,768,107,864,85.3C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>
			<div className='wrapper'>
				<div className='content'>
					<h1>Meet The Team</h1>
					<br />
					<div className='columns'>
						<div>
							<img src='/peeps/ryan.png' />
							<h2>Ryan Tan</h2>
							<h4>Founder, Frontend Engineer</h4>
							<p>
								<ul>
									<li>Web Application Development</li>
									<li>UI/UX design</li>
									<li>Game Programming</li>
								</ul>
							</p>
						</div>

						<div>
							<img src='/peeps/park.png' />
							<h2>Daniel Park</h2>
							<h4>Co-Founder, Creative Director</h4>
							<ul>
								<li>3D Modelling and Texturing</li>
								<li>2D Game Assets</li>
								<li>Game Design and Programming</li>
							</ul>
						</div>

						<div>
							<img src='/peeps/tiong.png' />
							<h2>Tan Tiong Guan</h2>
							<h4>Co-Founder, Backend Engineer</h4>
							<ul>
								<li>Game Server Development</li>
								<li>Cloud Deployment</li>
								<li>Database Management</li>
								<li>Game Programming</li>
							</ul>
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
					fill='var(--c4)'
					fill-opacity='1'
					d='M0,64L48,74.7C96,85,192,107,288,144C384,181,480,235,576,256C672,277,768,267,864,224C960,181,1056,107,1152,106.7C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
			</svg>
		</div>
	);
}
