import React from 'react';
import '../css/Testimony.css';

class Testimony extends React.Component {
	render() {
		return (
			<div className='container'>
				<img
					className='image'
					src={require(`../static/images/testimony-${this.props.imageName}.png`)}
					alt={`${this.props.imageName} testimony`}
				/>
				<div className='text-content'>
					<p className='country-name'>
						<strong>{this.props.name}</strong> en{' '}
						{this.props.country}
					</p>
					<p className='job'>
						{this.props.job} en{' '}
						<strong>{this.props.company}</strong>
					</p>
					<p className='description'>
						"{this.props.testimony}"
					</p>
				</div>
			</div>
		);
	}
}

export default Testimony;
