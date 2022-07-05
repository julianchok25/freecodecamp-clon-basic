import './App.css';
import Testimony from './components/Testimony';
import { TESTIMONIES } from './static/json/testimonies';

function App() {
	const testimoniesData = [...TESTIMONIES];

	const testimony = () => {
		return (
			<>
				Siempre he tenido problemas para aprender JavaScript.
				He tomado muchos cursos, pero el curso de freeCodeCamp
				fue el que se quedó. Estudiar JavaScript, así como
				estructuras de datos y algoritmos en{' '}
				<b>freeCodeCamp me dio las habilidades </b>y la
				confianza que necesitaba para conseguir el trabajo de
				mis sueños como ingeniero de software en Spotify.
			</>
		);
	};

	return (
		<div className='App'>
			<div className='main-container'>
				<h1>Esto es lo que dicen nuestros alumnos:</h1>
				{testimoniesData.map((item) => {
					return <Testimony {...item} />;
				})}

				<Testimony
					name='Emma Bostian'
					country='Suecia'
					imageName='emma'
					job='Software Engineer'
					company='Spotify'
					testimony={testimony()}
				/>
			</div>
		</div>
	);
}

export default App;
