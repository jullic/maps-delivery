import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMapProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	start: number[] | null;
	end: number[] | null;
}
