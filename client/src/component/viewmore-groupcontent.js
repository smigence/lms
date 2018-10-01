import React from 'react';

class GroupContent extends React.Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-align-justify"></i> {this.props.groupname}
                        <div className="card-header-actions"></div>
                    </div>
                    <div className="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">Static</label>
                            <div class="col-md-9">
                                <p class="form-control-static">Username</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupContent;