import React from 'react';
import './Faqs.css'

const Faqs = () => {
    return (
        <div className='faq'>
            <h2>FAQS</h2>
            <div>
                <h3>#1 How Does React Work?</h3>
                <p>
                    While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                </p>
            </div>
            <div>
                <h3>#2 What are the differences between props and state</h3>
                <p>
                    The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again. <br />
                    Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.

                    Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.
                </p>
            </div>
            <div>
                <h3>#3 What are the useges os useEffect in react?</h3>
                <p>
                    A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.

                    Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.

                    The component rendering and side-effect logic are independent. It would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute the output.

                    How often the component renders isn't something you can control — if React wants to render the component, you cannot stop it.
                </p>
            </div>
        </div>
    );
};

export default Faqs;