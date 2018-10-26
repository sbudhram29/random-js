why does react need a root element?

React needs a DOM element to hook into to render the Visual DOM

What is the difference between state and props?

state is where you store stuff internal

- store field and toggle modal

props are pass down to component

- pass from parent to child

what is context?

context is globally available props. REDUX uses context.

what are props types and what are the benefits and drawback of them?

Props types is use to state with variable type is need.
This can be a problem if not maintainced.

Which life cycle event is the most common from your perpective?

- componentWillMount
- componentDidMount
- componentWillReceiveProps

When do you usea pure component and when do you use a class?

- pure component are use to optimise performance and where I don't need state
- classes are used mainly for containers and where state is needed

Explain how the React rendering works in your own terms.

- React listen for DOM updates and rerender on every change.
- uses component diffing

What is Redux?

- Redux is a State management library
- build of FLUX pattern

Explain Redux in your own terms.

- you declare a reducer that takes in an action and a state, when you dispatch an action
  the state gets updated and React rerenders teh DOM with the state change

When do you use Redux?

- When you need global state
- Context can be used also in React 16.3 and above

What is a container component?

A container component is a popular way to separate the jsx from the logic
of a component but I only use it when my component is doing more than
showing some information or passoing things through to the view.

What is a view component?

- is a where you pass props to JSX

What components make for a good container candidate?

- Almost all components except perhaps for components that have no logic
