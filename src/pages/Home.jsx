import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					onClickItem={name => console.log(name)}
					items={["М'ясні", 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті']}
				/>
				<SortPopup itemsPopup={['популярністю', 'ціною', 'алфавітом']} />
			</div>
			<h2 className='content__title'>Всі піци</h2>
			<div className='content__items'>
				{items.map(obj => (
					<PizzaBlock key={obj.id} {...obj} />
				))}
			</div>
		</div>
	);
}

export default Home;
