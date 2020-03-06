import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onToggleStatus}) => {
	return (
		<div className='btn-group'>
			<button type='button' className='btn btn-info' onClick={() => onToggleStatus('all')}>
				All
			</button>
			<button type='button' className='btn btn-outline-secondary' onClick={() => onToggleStatus('active')}>
				Active
			</button>
			<button type='button' className='btn btn-outline-secondary' onClick={() => onToggleStatus('done')}>
				Done
			</button>
		</div>
	);
};

export default ItemStatusFilter;
