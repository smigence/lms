import React from 'react';

class GroupContent extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-xl-6">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-align-justify"></i>Lesson {this.props.no}: {this.props.groupname}
                        <div className="card-header-actions"></div>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <a href={this.props.linkVideo}><li className="list-group-item">{this.props.groupname}</li></a>
                            <a href={this.props.linkDocuments}><li className="list-group-item">Documents</li></a>
                            <a href={this.props.linkExamples}><li className="list-group-item">Examples</li></a>
                            <a href={this.props.linkTest}><li className="list-group-item">Test</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupContent;