# Welcome to ReactJS

- ReactJS is a JS library and not a framework.
- NextJS is a framework.
- ReactJS is used to make single-page applications(SPAs).

- To create basic react app: (outdated and no longer in use)
  npx create-react-app app-name
  npm run start

- To create react app with vite:
  npm create vite@latest app name
  npm i
  npm run dev
- The component file function name should always starts with Capital Letter otherwise react consider it as a html tag and throws an error.

- In react, to check the react version you are using for your project go to "package.json" file. React version will show in 3 numbers with 2 decimals.
  Eg. "react": "^19.0.0"
  1st number is known for React Major update version,
  2nd number is known as Miner update version,
  3rd number is the bug fixes version
  To update to the react latest version use below command:
    - npm i react@rc react-dom@rc

Difference between `dependencies` and `devDependencies`:
  In React once the project is created, you will see the "dependencies" and "devDependencies" in package.json file.
    dependencies - means on which your project is created and running.
    devDependencies - means by the use of them development is happening.

  Controlled Components:
    These are only those components in which form is available with the input fields.

  | Priority  | Concept                                        |
  | --------- | ---------------------------------------------- |
  | ⭐ High   | `useState`, `useEffect`, JSX, props, routing   |
  | ⭐ High   | Forms, Context API, API handling               |
  | ⭐ High   | React Query, custom hooks, useMemo/useCallback |
  | ⭐ High   | TypeScript, form validation, testing           |
  | ⚠️ Medium | Redux, Zustand, useReducer (when needed)       |
  | ✅ Bonus  | i18n, accessibility, performance tuning        |
  

## React Hooks:

| Hook                  | Use Case                        | Required in SaaS?  |
| --------------------- | ------------------------------- | -----------------  |
| `useState`            | Local state                     | ✅ Must-know       |
| `useEffect`           | Side effects                    | ✅ Must-know       |
| `useContext`          | Global/shared state             | ✅ Must-know       |
| `useRef`              | Persistent mutable refs         | ✅ Must-know       |
| `useMemo`             | Optimize expensive calculations | ✅ Must-know       |
| `useCallback`         | Optimize function references    | ✅ Must-know       |
| `useReducer`          | Complex state management        | ✅ Frequently used |
| `useLayoutEffect`     | Pre-paint side effects          | 🟡 Sometimes used  |
| `useImperativeHandle` | Expose component methods        | 🟡 Sometimes used  |


  1) useState:
      It helps to make the changes in your DOM when the click event is happen on the button on any other.
  - Syn: const [state, setState] = useState(default value);
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
   - <ins>Named Export</ins>:
     You can have multiple named exports from a file.
     Export:
     export const add = (a, b) => a + b;
     export const subtract = (a, b) => a - b;
     Import:
     import { add, subtract } from './filename.js';
   - <ins>Function as Default Export</ins>:
     This isn’t a separate category — it just means you’re exporting a function, either as a default or named export.
     Export:
     export default function greet() {
     console.log("Hello");
     }
