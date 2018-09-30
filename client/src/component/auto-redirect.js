import React from 'react';



class AutoRedirect extends React.Component{
    
    render(){
        console.log('lul');
        return(
            <div> <meta httpEquiv="refresh" content="0.1 url=/homepage" /></div>
        );
    }
}

export default AutoRedirect;