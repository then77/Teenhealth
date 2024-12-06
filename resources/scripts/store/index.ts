import {
    createStore as createEasyPeasyStore,
    createTypedHooks
} from 'easy-peasy';

import type { User } from './user';

export interface Store {
    user: User | null;
}

const initialState: Store = {
    user: null
};

export const typedHooks = createTypedHooks<Store>();
export const createStore = (store?: string) => {

    try {

        // try base64 decode store data and parse as JSON
        const parsed = store ? JSON.parse(atob(store)) : null;

        // check if parsed data contains all keys of initial state
        if (!parsed || !Object.keys(initialState).every((key) => key in parsed)) {
            console.warn('Site store data is invalid, using default initial state instead.');
            return createEasyPeasyStore<Store>(initialState, { name: 'Teenhealth' });
        }

        // use parsed data for initial state if possible
        return createEasyPeasyStore<Store>(parsed, { name: 'Teenhealth' });

    } catch (error) {
        console.warn('Something went wrong while creating store.', error);
        return createEasyPeasyStore<Store>(initialState, { name: 'Teenhealth' });
    }
};

export const {
    useStoreActions,
    useStoreDispatch,
    useStoreState
} = typedHooks;
