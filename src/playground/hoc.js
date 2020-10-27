// Higher Order Compoment (HOC) - A component (HOC) that renders anmother component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappepdComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share!</p>}
            <WrappepdComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappepdComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappepdComponent {...props}/>
            ) : ( 
            'Please login!'
            )}
        </div>
    )
}

const AdminIngo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminIngo isAdmin={true} info='There are the details'/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info='There are the details'/>, document.getElementById('app'))