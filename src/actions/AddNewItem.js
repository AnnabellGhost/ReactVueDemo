var i=0;
export function addNewItem(text){
return {
		type:'ADD_NEW_ITEM',
		text:text,
		id:++i
	}
};