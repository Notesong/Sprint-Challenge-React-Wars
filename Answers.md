# Answers

1. 1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a front-end UI library and helps people design and implement a component based web app.  It was designed by Facebook to make interactive, non-static UI development easier, with the hope of improving performance as well.

1. What does it mean to think in react?

When you think in react, you think in components and data.  Each part of the UI is its own seperate, reusable component that can be programmed to accept data from a variety of sources, including its parent and API's.

1. Describe state.

State is the present value of data that's stored in a variable.  State keeps that data safe and usable. It also allows that variable to be changed, if needed.

1. Describe props.

Props are used to pass variables, whether those variables are just data or complex functions, to a child component to be used by the child component.  The props are passed as an object containing everything that was passed down and can be accessed with dot notation. The props can keep getting passed down from parent to child for as long as the programmer likes.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are ways to manipulate the DOM after the initial render, whether through data updates or user interactions such as mouse clicks.  When a component updates, it gets rerendered with the help of a useEffect() hook, as long as the changed variable is included as a parameter in the hook.
