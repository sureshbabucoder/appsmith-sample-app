export default {
	async rated () {
		const rating=['TV-Y','TV-Y7','TV-Y7 FV','TV-G','TV_PG','TV-14','TV-MA','G','PG','PG-13','R','NC-17','UNRATED'];
		return rating.map(r=>({lable:r,value:r}))
	}
}