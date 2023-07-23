import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Hero />
			<Projects />
			<AboutMe />
		</main>
	);
}
