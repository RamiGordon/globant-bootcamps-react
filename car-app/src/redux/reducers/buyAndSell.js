import { cars } from '../../components/cars';

const defaultState = { cars };

function reducer(state = defaultState, {type, payload}) {
    switch (type) {
        case 'buy': {
            return state.cars.map(car => {
                if (car.id === payload) {
                    return state;
                } else {
                    return state
                }
            });
        }
        case 'sell': {
            return state;
        }
        default:
            return state;
    }
}

export default reducer;