import React from 'react';
import ListLink from './ListLink.jsx';

class GroupContent extends React.Component {
    render() {
        if (this.props.files[0] === undefined) return null;
        const listLink = () => this.props.files.map((file, index) => {
            <a key={index} href={file.link}><li className="list-group-item">{file.name}</li></a>
        })
        return (
            <div className="col-sm-12 col-xl-6">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-align-justify"></i>Lesson {this.props.no}: {this.props.groupname}
                        <div className="card-header-actions"></div>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <ListLink files={this.props.files} />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupContent;
//<a key={i} href={this.props.files[i].link}><li className="list-group-item">{this.props.files[i].name}</li></a>
