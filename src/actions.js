export const HISTORY = 'HISTORY';
export const LOADING = 'LOADING';
export const STOREAPIDATA = 'STOREAPIDATA';

export function actionHistory(item) {
    return {
        type: HISTORY,
        payload: {
            item
        }
    }
}

export function actionLoading(isLoading) {
    return {
        type: LOADING,
        payload: {
            isLoading
        }
    }
}

export function actionStoreAPIData(data) {
    return {
        type: STOREAPIDATA,
        payload: {
            data
        }
    }
}