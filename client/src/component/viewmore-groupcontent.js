import React from 'react';

class GroupContent  extends React.Component{
    render(){
        return(
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-align-justify"></i> {this.props.groupname}
                        <div className="card-header-actions"></div>
                    </div>
                    <div className="card-body">{this.props.groupcontent}</div>
                </div>
            </div>
        );
    }
}

export default GroupContent;