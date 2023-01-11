import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { ITableProps } from './Table.props';
import styles from './Table.module.css';
import { Spin, Table as TableLib } from 'antd';
import { useRequest } from '../../hooks/useRequest';
import { IOrder } from '../../interfaces/oreder.interface';

const columns = [
	{ title: 'Номер заявки', dataIndex: 'number', key: 'number' },
	{ title: 'Координаты ОТ lat', dataIndex: 'start_lat', key: 'start_lat' },
	{ title: 'Координаты ОТ lng', dataIndex: 'start_lng', key: 'start_lng' },
	{ title: 'Координаты ДО lat', dataIndex: 'end_lat', key: 'end_lat' },
	{ title: 'Координаты ДО lng', dataIndex: 'end_lng', key: 'end_lng' },
];

export const Table: FC<ITableProps> = ({
	className,
	setEnd,
	setStart,
	...props
}) => {
	const { data, err, isLoading } = useRequest<IOrder[]>(
		'http://localhost:3001/orders'
	);
	const [row, setRow] = useState<IOrder | null>(null);

	if (isLoading) {
		return <Spin size='large' />;
	}

	if (err) {
		return <h2>{err.message}</h2>;
	}

	return (
		<div className={classNames(styles.root)} {...props}>
			<TableLib
				bordered
				columns={columns}
				dataSource={data || []}
				pagination={false}
				onRow={(record) => {
					return {
						onClick: () => {
							setRow(record);
							setStart([record.start_lat, record.start_lng]);
							setEnd([record.end_lat, record.end_lng]);
						},
					};
				}}
				rowClassName={(record) => {
					if (record.number === row?.number) {
						return styles.row;
					}
					return '';
				}}
			/>
		</div>
	);
};
