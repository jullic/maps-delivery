import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	SetStateAction,
} from 'react';

export interface ITableProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setStart: Dispatch<SetStateAction<number[] | null>>;
	setEnd: Dispatch<SetStateAction<number[] | null>>;
}
