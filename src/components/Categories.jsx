import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({
	activeCategory = null,
	items = [],
	onClickCategory,
}) {
	return (
		<div className='categories'>
			<ul>
				<li
					className={activeCategory === null ? 'active' : ''}
					onClick={() => onClickCategory(null)}>
					Все
				</li>
				{items &&
					items.map((name, index) => (
						<li
							className={activeCategory === index ? 'active' : ''}
							onClick={() => {
								onClickCategory(index);
							}}
							key={`${name}_${index}`}>
							{name}
						</li>
					))}
			</ul>
		</div>
	);
});

Categories.propTypes = {
	// activeCategory: PropTypes.oneOf([PropTypes.number, null]),
	items: PropTypes.arrayOf(PropTypes.string),
	onClickItem: PropTypes.func,
};
export default Categories;
