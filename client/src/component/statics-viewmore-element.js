import React from 'react';

class Element extends React.Component {
    render() {
        return (
            <div className="form-group row">
                <label className="col-md-3 col-form-label">{this.props.formname}</label>
                <div className="col-md-9">
                    <p className="form-control-static">{this.props.formdata}</p>
                </div>
            </div>
        );
    }
}

export default Element;