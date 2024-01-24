export default function mealsReducer(items, action) {
    switch (action.type) {
        case 'add': {
            const isPresent = items.findIndex(item => action.id === item.id);
            if (isPresent === -1) {

                return [
                    ...items,
                    {
                        id: action.id,
                        name: action.name,
                        price: action.price,
                        qty: 1
                    }
                ];
            } else {
                return [...items]
            }
        }
        case 'increment': {
            return items.map(item => {
                if (item.id === action.id) {
                    return { ...item, qty: item.qty++ };
                } else {
                    return item;
                }
            });
        }
        case 'decrement': {
            const newItems = [];
            items.forEach(item => {
                if (item.id === action.id) {
                    if (item.qty > 1) {
                        newItems.push({ ...item, qty: item.qty-- });
                    }
                } else {
                    return newItems.push(item);
                }
            });

            return newItems;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}