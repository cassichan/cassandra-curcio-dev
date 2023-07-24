export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center w-full h-24">
			<p className="text-sm text-gray-400">© 2023</p>
			<a
				href="https://github.com/cassichan/cassandra-curcio-dev"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center justify-center mt-2 hover:text-teal-400"
			>
				Code on Github
			</a>
		</footer>
	);
}
