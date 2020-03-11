1. What problem does the context API help solve?

The context api lets us pass state without prop drilling


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are an object that describe what we want to happen to our state. They
usually supply a payload that is used to modify the state as well.

reducers take an state and an action object. They are how we describe and
implement the changes to state that the action describes.

the store is a special state object that takes a reducer. It is passed into
components using the redux provider and accessed with either useSelector or connect().

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is top level state that is usually available to all
components. Component state is localized to a component and not available to
other components besides itself. Application state is useful if you have state
that needs to be shared among many different components at multiple levels.
Component state is useful for things that need local state like forms using validation.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is middleware that takes an action that returns a function and
processes in an async manner. This allows us to have an action that returns a
function that will resolve into a new action. It's most useful for interacting
with api's.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

so far my favorite state management system is redux. It's more work to set up in
the beginning but after the initial work it is much easier to interact with the
data.
