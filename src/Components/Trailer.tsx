interface TrailerProps {
	trailer: string;
}

function Trailer({ trailer }: TrailerProps) {
	const embedUrl = `https://www.youtube.com/embed/${trailer}`;
	return (
		<iframe
			width="100%"
			height="100%"
			src={embedUrl}
			title={`YouTube video player`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen></iframe>
	);
}

export default Trailer;
