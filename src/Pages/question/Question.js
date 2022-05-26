import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='question my-5 py-5'>
                <div>
                    <h3>How will you improve the performance of a React Application?</h3>
                    <p>Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.</p>
                </div>
                <div>
                    <h3> What are the different ways to manage a state in a React application?</h3>
                    <p>The Problem. Redux, particularly, gives the developer a single place to put all their state that seems great at first. ...
                        The Solution. ...
                        1 . ...
                        Data State. ...
                        Control State. ...
                        Session State. ...
                        Location State. ...
                        Conclusion.</p>
                </div>
                <div>
                    <h3>How does prototypical inheritance work?</h3>
                    <p>A style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes</p>
                </div>
                <div>
                    <h3>Why you do not set the state directly in React?</h3>
                    <p>Create an empty variable. ( product)
                        Initialize it with 1.
                        In a loop traverse through each element (or get each element from user) multiply each element to product.
                        Print the product.</p>
                </div>
                <div>
                    <h3>How will you implement a search to find products by name?</h3>
                    <p>Ensures that all code meets quality standards before it's deployed. a way to test a unit, the smallest code in a system that can logically be isolated.</p>
                </div>
                <div>
                    <h3>What is a unit test? Why should write unit tests?</h3>
                    <p>We should always declare a new object const obj = { } and use this. setState(obj) and let react handle it, just like I did in the example below.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;