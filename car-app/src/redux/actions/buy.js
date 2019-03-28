export const type = 'buy';

const buy = id => {
    return {
        type ,
        payload: id,
    }
}

export default buy;