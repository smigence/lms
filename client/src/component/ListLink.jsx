import React from 'react';

class ListLink extends React.Component {
    render() {
        return (
            <div>
                {this.props.files.map((file, index) => {
                    <a key={index} href={file.link}><li className="list-group-item">{file.name}</li></a>
                })}
            </div>
        );
    }
}

export default ListLink;