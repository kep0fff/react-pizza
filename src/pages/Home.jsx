import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ["М'ясні", 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];
const sortItems = [
	{ name: 'популярністю', type: 'popular', order: 'desc' },
	{ name: 'ціною', type: 'price', order: 'desc' },
	{ name: 'алфавітом', type: 'name', order: 'asc' },
];

function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);

	React.useEffect(() => {
		dispatch(fetchPizzas(sortBy, category));
	}, [category, sortBy]);

	const onSelectCategory = React.useCallback(index => {
		dispatch(setCategory(index));
	}, []);
	const onSelectSortType = React.useCallback(type => {
		dispatch(setSortBy(type));
	}, []);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={categoryNames}
				/>
				<SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
			</div>
			<h2 className='content__title'>Всі піци</h2>
			<div className='content__items'>
				{isLoaded
					? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
					: Array(10)
							.fill(0)
							.map((_, index) => <LoadingBlock key={index} />)}
			</div>
		</div>
	);
}

export default Home;
