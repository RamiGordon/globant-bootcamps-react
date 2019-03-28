export const type = 'sell';

const sell = id => {
    return {
        type ,
        payload: id,
    }
}

export default sell;