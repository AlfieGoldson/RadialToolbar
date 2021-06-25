import styles from './RadialMenuItem.module.scss';

export interface IRadialMenuItem {
	label: string;
	img: string;
	activeFn: () => void;
}

interface Props extends IRadialMenuItem {
	index: number;
	size: number;
	menuOpen: boolean;
	selected: boolean;
}

export const RadialMenuItem = ({
	index,
	label,
	img,
	size,
	menuOpen,
	selected,
}: Props) => {
	const [x, y] = [
		Math.cos((index * Math.PI) / 4) * (menuOpen ? size : 0),
		Math.sin((index * Math.PI) / 4) * (menuOpen ? size : 0),
	];

	return (
		<div
			className={`${styles.menuItem} ${selected ? styles.selected : ''}`}
			style={{
				transform: `translate(calc(-50% + ${x}px), calc(-50% - ${y}px))`,
			}}
		>
			<div className={styles.content}>
				<img src={img} alt={label} />
			</div>
		</div>
	);
};
