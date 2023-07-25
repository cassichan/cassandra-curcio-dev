'use client';
import { useEffect, useState } from 'react';

export default function ScrollUp() {
	const [showButton, setShowButton] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<button
			className="fixed bottom-2 left-3 bg-teal-500 w-10 h-10 rounded-full shadow-lg hover:bg-teal-600 z-50 text-white"
			onClick={scrollToTop}
			style={{ display: showButton ? 'block' : 'none' }}
		>
			↑
		</button>
	);
}
