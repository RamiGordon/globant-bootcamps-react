import { cars } from '../../components/cars';

const defaultState = { cars };

function reducer(state = defaultState, {type, payload}) {
    switch (type) {
        case 'buy': {
            return {...state,
                cars: state.cars.map(car => car.id === payload ? {...car, count: car.count+1} : car)
            }
        }
        case 'sell': {
            return {...state,
                cars: state.cars.map(car => car.id === payload ? {...car, count: car.count-1} : car)
            }
        }
        default:
            return state;
    }
}

export default reducer;