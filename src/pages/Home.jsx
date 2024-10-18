import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ["М'ясні", 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];
const sortItems = ['популярністю', 'ціною', 'алфавітом'];

function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items);

	const onSelectCategory = React.useCallback(
		(index) => {
		dispatch(setCategory(index));
	}, []);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					onClickItem={onSelectCategory}
					items={categoryNames}
				/>
				<SortPopup itemsPopup={sortItems} />
			</div>
			<h2 className='content__title'>Всі піци</h2>
			<div className='content__items'>
				{items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	);
}

export default Home;
