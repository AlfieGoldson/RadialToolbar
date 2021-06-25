import React from 'react';
import { RadialMenu } from '../components/RadialMenu';

function Home() {
	return (
		<RadialMenu
			items={[
				{
					label: 'Bucko',
					img: 'https://paro.studio/work/logos/Bucko.jpg',
					activeFn: () =>
						require('electron').shell.openExternal(
							'steam://rungameid/291550'
						),
				},
				{
					label: '',
					img: '',
					activeFn: () => console.log('tr'),
				},
				{
					label: '',
					img: '',
					activeFn: () => console.log('t'),
				},
				{
					label: '',
					img: '',
					activeFn: () => console.log('tl'),
				},
				{
					label: '',
					img: '',
					activeFn: () => console.log('l'),
				},
				{
					label: '',
					img: '',
					activeFn: () => console.log('bl'),
				},
				{
					label: '',
					img: '',
					activeFn: () => console.log('b'),
				},
				{
					label: '',
					img: '',
					activeFn: () => console.log('br'),
				},
			]}
		/>
	);
}

export default Home;
