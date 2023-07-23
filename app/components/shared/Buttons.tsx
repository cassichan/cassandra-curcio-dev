// 'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Buttons() {
	const [buttonText, setButtonText] = useState('About me');
	const router = useRouter();


	const handleButtonClick = () => {
		if (buttonText === 'About me') {
			setButtonText('Projects');
			router.push('/about');
		} else {
			setButtonText('About me');
			router.push('/');
		}
	};

	return (
		<div className="flex justify-center">
			<a
				href="https://docs.google.com/document/d/15GM5uc_WCekFqrclNi2-AW8xl1Y2qdjvGTno2DbRWsw/edit?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			>
				<button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Resume</button>
			</a>
			<button
				onClick={handleButtonClick}
				className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
			>
				{buttonText}
			</button>
		</div>
	);
}
