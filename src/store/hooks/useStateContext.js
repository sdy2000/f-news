import { useContext} from 'react'
import { getFreshContext, stateContext } from '../context/ContextProvider';

export function useStateContext() {

    const { context, setContext } = useContext(stateContext);
    return {
        context,
        setContext: obj => { setContext({ ...context, ...obj }) },
        resetContext: () => {
            localStorage.removeItem('context')
            setContext(getFreshContext())
        }
    }
}

export function useStateTheme() {

    const { theme, setTheme } = useContext(stateContext);
    return {
        theme,
        setTheme: obj => { setTheme({ ...setTheme, ...obj }) }
    }
}