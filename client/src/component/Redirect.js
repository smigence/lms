import React from 'react';

class AutoRedirect extends React.Component{
    
    render(){
        if(this.props.mode===1) 
            return(
                <div> <meta httpEquiv="refresh" content="0.1 url=/homepage" /></div>
            );
        else
            return(
                <div> <meta httpEquiv="refresh" content="0.1 url=/" /></div>
            );
    }
}

export default AutoRedirect;