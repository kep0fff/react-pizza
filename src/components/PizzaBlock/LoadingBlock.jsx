import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
	return (
		<ContentLoader
			className='pizza-block'
			speed={2}
			width={280}
			height={470}
			viewBox='0 0 280 470'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'>
			<circle cx='140' cy='140' r='140' />
			<rect x='0' y='292' rx='6' ry='6' width='280' height='24' />
			<rect x='0' y='329' rx='6' ry='6' width='280' height='84' />
			<rect x='126' y='420' rx='25' ry='25' width='152' height='44' />
			<rect x='0' y='426' rx='6' ry='6' width='98' height='27' />
		</ContentLoader>
	);
}

export default LoadingBlock;
