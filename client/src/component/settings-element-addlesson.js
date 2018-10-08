import React from 'react';
import { Link } from 'react-router-dom';

class Element extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <strong>{this.props.No}</strong>
                </td>
                <td>
                    <div className="small text-muted">Last login</div>
                    <strong>{this.props.Email}</strong>
                </td>
                <td>
                    <div>{this.props.Student}</div>
                    <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015</div>
                </td>
                <td>
                    <div className="clearfix">
                        <div className="float-left">
                            <strong>{this.props.Progress}</strong>
                        </div>
                        <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                    </div>
                    <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: this.props.Progress }} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                </td>
                <td>
                    <Link to='/editlesson/:id' className="btn btn-info">
                        <i className="fa fa-edit"></i>
                    </Link>
                </td>
            </tr>

        );
    }
}

export default Element;