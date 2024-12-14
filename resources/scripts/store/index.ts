import {
    createStore as createEasyPeasyStore,
    createTypedHooks, Action, action
} from 'easy-peasy';

import type { User } from './user';
import type { QuizSession } from './session';

export interface StoreModel {
    user: User | null;
    quiz_session: QuizSession | null;
}

export interface ActionModel {
    setSessionAck: Action<StoreModel, boolean>;

    setUser: Action<StoreModel, User>;
    setQuizSession: Action<StoreModel, QuizSession>;
    clearUser: Action<StoreModel>;
    clearQuizSession: Action<StoreModel>;
}

const initialState: StoreModel = {
    user: null,
    quiz_session: null
};

const actionState: ActionModel = {
    setSessionAck: action((state: StoreModel, payload: boolean) => {
        if (!state.quiz_session) {
            console.warn('Cannot set session ack without a quiz session.');
            return;
        }

        state.quiz_session = {
            ...state.quiz_session,
            notified: payload
        }
    }),

    setUser: action((state: StoreModel, payload: User) => {
        state.user = payload;
    }),
    setQuizSession: action((state: StoreModel, payload: QuizSession) => {
        state.quiz_session = payload;
    }),
    clearUser: action((state: StoreModel) => {
        state.user = null;
    }),
    clearQuizSession: action((state: StoreModel) => {
        state.quiz_session = null;
    })
}

export const typedHooks = createTypedHooks<StoreModel & ActionModel>();
export const createStore = (store?: string) => {

    try {

        // try base64 decode store data and parse as JSON
        const parsed = store ? JSON.parse(atob(store)) : null;

        // check if parsed data contains all keys of initial state
        if (!parsed || !Object.keys(initialState).every((key) => key in parsed)) {
            console.warn('Site store data is invalid, using default initial state instead.');
            return createEasyPeasyStore<StoreModel>(
                { ...initialState, ...actionState },
                { name: 'Teenhealth' }
            );
        }

        // use parsed data for initial state if possible
        return createEasyPeasyStore<StoreModel>(
            { ...parsed, ...actionState },
            { name: 'Teenhealth' }
        );

    } catch (error) {
        console.warn('Something went wrong while creating store.', error);
        return createEasyPeasyStore<StoreModel>(
            { ...initialState, ...actionState },
            { name: 'Teenhealth' }
        );
    }
};

export const {
    useStoreActions,
    useStoreDispatch,
    useStoreState
} = typedHooks;
