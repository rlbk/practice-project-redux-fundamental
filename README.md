**_* Notes Summary from the Udemy Course : The Ultimate Redux Course 2023 - [LATEST Redux-toolkit] *_**

Link :- https://www.udemy.com/course/the-ultimate-redux-course-state-management-library/

# What is Redux ?

-> Redux is a state management library for JavaScript applicatons

-> In other words, redux is used to manage the data or state of complex JavaScript applications.

# State Management Tools

-> Flux

-> Mobx

-> Redux

Redux is the most popular tool for state management. We can use Redux with React, Angular, Vue or with vanilla Javascript

## With Redux

-> We can centralize our application state

-> Redux will easily debug our application with one of the best debugging tools

-> We can aslo preserve the page state of that application.

## When we use Redux?

-> Complex User Interface in terms of data like facebook, amazon etc

-> Data flow is complex.

# When we don't use Redux?

-> Small or medium size of applications

-> Simple UI & static data

# How Redux works?

-> We use redux for managing the state of web application specifically, which have little complex UI structure. In Redux, we store our applications all state in a single object called store. So when some component needs a data of particular thing, then we get that satat from the single place, which is store.

-> How we design store is on us. Redux don't intefere on these things.

-> Remember, one application has only one single Redux store because that's the overall concept of using Redux.

-> To update this state, we use a pure function called Reducer. Reducer take the current state as an argument and return the updated state.

-> Reducer function don't make any HTTP request or anything with DOM elements or don't create any kind of side effects.

-> In reducer, we update the state using spread operator or immer library.

-> We pass one more argument in our reducer function, which is action. By using action parameter we can tell reducer which task they have to preform and according to this our reducr perform the task.

So, there are only three main things about Redux

-> Actions => What to do

-> Reducers => How to do

-> Store => Keep data in single place

### **_Example_**

#### In todo application,

When user add a new task, which means user dispatch an action to the Redux store, then redux store pass that action to its reducer. Now reducer perfom the action and then update the store values according to this action.

We can't directly call reducers, we have to use store for calling reducer. So that is only one entry point for this store.

The benefit of this approach is we can simply take a log, the activity perform in our application which
will help us to easily debug our application.

## Steps for implementing redux

-> Designing the store

-> List our actions (What to do)

-> Create reducer function (How to do)

-> Create redux store

# What is Thunk?

-> In programming term, thunk is "a piece of code that does some delay work".
Rather than run the logic now, we can write code that can be used to peform the work later.

    For example, we want to fetch data from API, and after fetching data we can store into Redux Store.

**_What if we simply add async to action creater?_**

When we add async to action creater, we get error : Actions must be plain objects.
So, redux thunk will allow actions to return function instead of returning plain objects.

In simple, using Redux-Thunk middleware, we can write asynchronous/complex logic in Redux.
