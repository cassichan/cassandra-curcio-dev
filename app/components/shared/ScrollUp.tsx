'use client';

export default function ScrollUp() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			className="sticky bg-teal-200 w-10 h-10 rounded-full shadow-lg hover:bg-teal-200"
			onClick={scrollToTop}
		>
			UP
		</button>
	);
}
