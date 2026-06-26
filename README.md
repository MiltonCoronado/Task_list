# useTodos Hook – Singleton Store Pattern

## Overview

This hook is not a typical React state hook. It was intentionally designed as a singleton store to solve a specific problem:

When multiple components call the same hook, React creates separate, isolated states. This leads to desynchronized data across components.

useTodos breaks that pattern by centralizing state in mutable singletons (todos and inputValue) and propagating changes through a custom subscription system. The goal is to demonstrate how a mutable store with mutator functions can synchronize state across components without relying on Context, Redux, or other external libraries.

## Design Intent

Global mutable state: todos and inputValue are declared outside the hook, ensuring all components share the same instance.

Custom subscription system: Components register listeners that trigger re-renders when state changes.

## Persistence:

All mutations are saved to localStorage.

## Mutator functions:

State is updated through explicit functions (addTodo, toggleTodo, deleteTodo, etc.), making the design closer to a store than a hook.

This is a deliberate departure from React’s immutable state philosophy, chosen to solve the synchronization problem in a simple, direct way.

## API Documentation

## Properties

## todos

todos: Todo[]  
The global list of todos, shared across all components.

### inputValue

inputValue: string  
A global input value, shared across components.

### totalCount

totalCount: number  
Computed property returning the total number of todos.

### completedCount

completedCount: number  
Computed property returning the number of completed todos.

## Mutator Functions

### setInputValue

setInputValue(value: string)  
Updates the global inputValue and notifies all listeners.

### addTodo

addTodo()

Creates a new todo using the current inputValue.

Adds it to the global todos array.

Clears inputValue.

Persists changes to localStorage.

Notifies listeners to re-render.

### toggleTodo

toggleTodo(id: number)

Flips the completed status of the todo with the given id.

Persists changes to localStorage.

Notifies listeners.

### deleteTodo

deleteTodo(id: number)

Removes the todo with the given id.

Persists changes to localStorage.

Notifies listeners.

### handleKeyPress

handleKeyPress(event: React.KeyboardEvent)

Listens for the Enter key.

Calls addTodo() when pressed.

## Internal Functions

### savedStorage

savedStorage(todos: Todo[])  
Persists the current todos array to localStorage.

### notifyListeners

notifyListeners()  
Iterates over all registered listeners and triggers re-render.

## Why This Approach?

This hook was intentionally built to:

Avoid using Context or external state management libraries.

Focus on mutable state with mutator functions.

Provide a synchronized store across multiple components.

Demonstrate a practical solution to React’s isolated state problem.

The Todo List example is simply the playground chosen to explore this concept. The real goal is to show how a singleton store hook can act as a lightweight alternative to more complex state management solutions.

## Conclusion

useTodos is not “React‑idiomatic” by design. It is a proof of concept: a hook that centralizes state, uses mutator functions, and breaks immutability to solve a real synchronization issue.

This is a deliberate engineering choice, not a mistake. It shows how React can be bent to fit specific needs without boilerplate or external dependencies.

## Installation

### 1. Clone the repository.

### 2. Run `pnpm install` to install dependencies.

### 3. Run this with "pnpm dev"

## Software design by Milton Coronado. Thanks for reading!
