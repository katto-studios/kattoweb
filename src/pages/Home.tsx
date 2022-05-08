import ContactUs from '../components/LandingPage/Contact/Contact';
import Services from '../components/LandingPage/Services/Services';
import Splash from '../components/LandingPage/Splash/Splash';
import Team from '../components/LandingPage/Team/Team';

export default function Home() {
	return (
		<div>
			<Splash />

			<Team />

			<Services />

			<ContactUs />
		</div>
	);
}
