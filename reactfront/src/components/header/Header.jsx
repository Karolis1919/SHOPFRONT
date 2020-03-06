import React, {Component} from 'react';
import "./header.scss"
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        fetch("http://skelbimai.test/api/categories")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    categories: data
                })
            })
    }

    render() {
        const itemData = this.state.categories.map(item => <a key={item.id} href={`/category/${item.id}`} className="nav-link">{item.title}</a>)

        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-custom">
                    <a className="navbar-brand" href="#"><p>€</p></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {itemData}
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;