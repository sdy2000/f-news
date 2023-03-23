import { useStateTheme } from "./store/hooks/useStateContext";


function App() {
  const { theme, setTheme } = useStateTheme();

  const chengeTheme = () => {
    setTheme({
      theme: theme.theme === 'dark' ? 'light' : 'dark'
    })
  }

  return (
    theme.theme === 'light'
      ?
      <span onClick={chengeTheme}>
        <button className='flex justify-center items-center text-2xl rounded-full w-10 h-10
         text-lft bg-las hover:bg-accent hover:text-white
          dark:text-dft dark:bg-das dark:hover:bg-accent dark:hover:text-white
          transition-all duration-500'>
          Light
        </button>
      </span>
      :
      <span onClick={chengeTheme}>
        <button className='flex justify-center items-center text-2xl rounded-full w-10 h-10
         text-lft bg-las hover:bg-accent hover:text-white
          dark:text-dft dark:bg-das dark:hover:bg-accent dark:hover:text-white
          transition-all duration-500'>
          Dark
        </button>
      </span>

  )
}

export default App;
