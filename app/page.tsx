import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Hero />
			<Projects />
		</main>
	);
}
