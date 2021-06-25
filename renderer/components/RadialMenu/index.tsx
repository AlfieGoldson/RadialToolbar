import styles from './RadialMenu.module.scss';
import { useEffect, useState } from 'react';
import { RadialMenuItem, IRadialMenuItem } from '../RadialMenuItem';

interface Props {
	items: IRadialMenuItem[];
}

const directions = [
	[1, 0],
	[1, 1],
	[0, 1],
	[-1, 1],
	[-1, 0],
	[-1, -1],
	[0, -1],
	[1, -1],
];

export const RadialMenu = ({ items }: Props) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [direction, setDirection] = useState<{
		left: boolean;
		right: boolean;
		up: boolean;
		down: boolean;
	}>({ left: false, right: false, up: false, down: false });
	const [selectedItem, setSelectedItem] = useState(-1);

	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (!e) return;

			switch (e.code) {
				case 'Space':
					setMenuOpen(true);
					return;
				case 'KeyA':
					setDirection((dir) => ({ ...dir, left: true }));
					return;
				case 'KeyD':
					setDirection((dir) => ({ ...dir, right: true }));
					return;
				case 'KeyW':
					setDirection((dir) => ({ ...dir, up: true }));
					return;
				case 'KeyS':
					setDirection((dir) => ({ ...dir, down: true }));
					return;
				default:
					return;
			}
		}

		function onKeyUp(e: KeyboardEvent) {
			if (!e) return;

			switch (e.code) {
				case 'Space':
					setMenuOpen(false);
					return;
				case 'KeyA':
					setDirection((dir) => ({ ...dir, left: false }));
					return;
				case 'KeyD':
					setDirection((dir) => ({ ...dir, right: false }));
					return;
				case 'KeyW':
					setDirection((dir) => ({ ...dir, up: false }));
					return;
				case 'KeyS':
					setDirection((dir) => ({ ...dir, down: false }));
					return;
				default:
					return;
			}
		}

		document.addEventListener('keydown', onKeyDown);
		document.addEventListener('keyup', onKeyUp);

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.removeEventListener('keyup', onKeyUp);
		};
	}, []);

	useEffect(() => {
		if (menuOpen) return;
		if (selectedItem === -1) return;

		items[selectedItem].activeFn();
		setDirection({ left: false, right: false, up: false, down: false });
	}, [menuOpen]);

	useEffect(() => {
		setSelectedItem(
			directions.findIndex(
				(arr) =>
					arr[0] === +direction.right - +direction.left &&
					arr[1] === +direction.up - +direction.down
			)
		);
	}, [direction]);

	return (
		<div className={styles.wrapper}>
			<div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
				{items.map((item, i) => (
					<RadialMenuItem
						{...item}
						key={i}
						index={i}
						size={200}
						menuOpen={menuOpen}
						selected={selectedItem === i}
					/>
				))}
			</div>
		</div>
	);
};
