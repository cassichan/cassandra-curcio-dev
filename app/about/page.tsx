import Socials from '../components/shared/Socials';
import ScrollUp from '../components/shared/ScrollUp';
import AboutHero from '../components/AboutHero';
import Footer from '../components/shared/Footer';

export default function About() {
	return (
		<>
			<section className="flex flex-col items-start ml-12">
				<Socials />
			</section>
			<AboutHero />
			<Footer />
			<ScrollUp />
		</>
	);
}
