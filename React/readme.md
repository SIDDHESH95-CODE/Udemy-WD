# Welcome to ReactJS

- To create basic react app: (outdated and no longer in use)
    npx create-react-app app-name
    npm run start

- To create react app with vite: 
    npm create vite@latest app name
    npm i
    npm run dev

## React Hooks:
    1) useState:
        It helps to make the changes in your DOM when the click event is happen on the button on any other.
    - Syn: const [count, setCount] = useState(0);
    - Key Concept: 
        1. variable of the default value.
        2. Setter function to change the default value.

    2) useEffect:
        It lets you perform side effects in function components.
    - Example: 
        - Fetching data from API server
        - Directly updating the DOM
        - Timers like setTimeOut and setInterval    
    - Syn: useEffect(() => {}, [])
    - Key Concepts:
        1. Effect Func: The 1st argument is the func that runs the side effect.
        2. Dependency Array(optional): It is an optional array of dependencies that controls when the effect runs. If you pass an empty array([]), then useEffect will run only once.

    3) useRef:
        
