# Welcome to ReactJS

- ReactJS is a JS library and not a framework.
- NextJS is a framework.
- ReactJS is used to make single-page application.

- To create basic react app: (outdated and no longer in use)
    npx create-react-app app-name
    npm run start

- To create react app with vite: 
    npm create vite@latest app name
    npm i
    npm run dev
    
- The component file function name should always starts with Capital Letter otherwise react consider it as a html tag and throws an error.

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



Interview Questions:
1. Difference between library and a framework?
    Library: 
        You call the code. 
        You’re in control. You decide when and how to use the code in the library.
    Framework: 
        The code calls you.
        It’s in control of the flow. You just plug your code into it.

2. Difference between dependencies and devDependencies?
    dependencies:
        dependencies are those libraries on which you project is running/working on.
    devDependencies:
        These are development dependencies on which your development is happening.
- Node modules folder in your project entirely dependent on dependencies and devDependencies.

3. Difference between default export, named export and function export?
    - <ins>Default Export</ins>: 
        You can only have one default export per file.
        Export:
            export default function add(a, b) {
                return a + b;
            }
        Import:
            import add from './filename.js';
    - [Named Export]:
        You can have multiple named exports from a file.
            Export:
                export const add = (a, b) => a + b;
                export const subtract = (a, b) => a - b;
            Import:
                import { add, subtract } from './filename.js';

        
