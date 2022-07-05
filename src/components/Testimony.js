import React from 'react';
import '../css/Testimony.css';

function Testimony(props) {
	console.log(props);

	return (
		<div className='container'>
			<img
				className='image'
				src={require(`../static/images/testimony-${props.imageName}.png`)}
				alt={`${props.imageName} testimony`}
			/>
			<div className='text-content'>
				<p className='country-name'>
					<strong>{props.name}</strong> en {props.country}
				</p>
				<p className='job'>
					{props.job} en <strong>{props.company}</strong>
				</p>
				<p className='description'>"{props.testimony}"</p>
			</div>
		</div>
	);
}

export default Testimony;
