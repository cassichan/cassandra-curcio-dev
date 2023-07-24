import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ScrollUp from './components/shared/ScrollUp';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Hero />
			<Projects />
			<ScrollUp/>
		</main>
	);
}
