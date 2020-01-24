import React, {Component} from 'react';
import axios from "axios";

class GroupDropdown extends Component {
    constructor(props) {
        super(props);
        this.handle_dropdownClick = this.handle_dropdownClick.bind(this);
        this.state = {
            options: [],
            group: []
        }
    }
    handle_dropdownClick = e => {
        const selectedIndex = e.target.options.selectedIndex;
        const datakey = e.target.options[selectedIndex].getAttribute('data-key');
        // console.log(datakey);
        this.setState({
            // username: 'admin'
            group: [datakey]
        });
        // console.log(this.state.group)
    };

    componentDidMount() {
        axios
            .get('http://localhost:8000/accounts/groups/',
                { headers: {
                        "Authorization" : `Bearer ${localStorage.getItem('access')}`
                    }
                })
            .then(res => res.data)
            .then(data => {
                this.setState({options: data.results})
                console.log(this.state.options);
            })
            .catch(error => console.log(error.response));
    }

    render() {
        let options = this.state.options;
        let optionItems = options.map((options) =>
            <option key={options.url} data-key={options.url}>{options.name}</option>
        );
        return (
            <div>
                <select name="groups"
                        onChange={this.handle_dropdownClick}>
                    {optionItems}
                </select>
                <h4>{this.state.group}</h4>
            </div>
        );
    }
}

export default GroupDropdown;