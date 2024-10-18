export const setSortBy = name => ({
	type: 'SET_SORT_BY',
	payload: name,
});

export const setCategory = caIndex => ({
	type: 'SET_CATEGORY',
	payload: caIndex,
});
