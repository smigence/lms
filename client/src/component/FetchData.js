function withFetchData(api,Component) {
    return class extends React.Component{
       
        constructor(props) {
                super(props);
                this.state = {
                    data: [],
                    err: ""
                };
            }    
    
        componentDidMount() {
            fetch(api).then(res => res.json())
            .then(data => {
                if (data.notification === undefined) return this.setState({
                      data: data
                  });
                else return this.setState({ err: "Data not found" })
            })
            .catch(err => this.setState({err: "Network connect problem"}));
        }
    
        render() {
            return <Component {...this.props} data={this.state.data} err = {this.state.err}/>
        };
        
    };
}

export default withFetchData;