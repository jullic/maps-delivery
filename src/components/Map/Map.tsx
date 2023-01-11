import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import { FC, useEffect, useRef, useState } from 'react';
import { LayersControl, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { IMapProps } from './Map.props';

const createRoutineMachineLayer = ({ position, start, end, color }: any) => {
	//@ts-ignore
	const instance = L.Routing.control({
		position,
		waypoints: [start, end],
		lineOptions: {
			styles: [
				{
					color,
				},
			],
		},
	});

	return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);
const maps = {
	base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
};

export const Map: FC<IMapProps> = ({ end = null, start = null }) => {
	const [currentStart, setCurrentStart] = useState<number[] | null>(null);
	const [currentEnd, setCurrentEnd] = useState<number[] | null>(null);
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		console.log(ref);
		setTimeout(() => {
			setCurrentEnd(end);
			setCurrentStart(start);
		});
	});

	return (
		<MapContainer
			center={[59.84660399, 30.29496392]}
			zoom={12}
			zoomControl={false}
			style={{ height: '100vh', width: '100%', padding: 0 }}
		>
			{currentEnd === end && currentStart === start && (
				<RoutingMachine
					ref={ref}
					position={'topleft'}
					start={start}
					end={end}
					color={'#757de8'}
				/>
			)}

			<LayersControl position='bottomleft'>
				<LayersControl.BaseLayer checked name='Map'>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url={maps.base}
					/>
				</LayersControl.BaseLayer>
			</LayersControl>
		</MapContainer>
	);
};
