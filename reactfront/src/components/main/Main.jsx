import React, {Component} from 'react';
import "./main.scss"
import 'bootstrap/dist/css/bootstrap.css';

class Main extends Component{
    constructor() {
        super()
        this.state = {
            products: []
        };
    }
        componentDidMount(){
            fetch("http://skelbimai.test/api/products")
                .then(res => res.json())
                .then(data =>{
                        this.setState({
                            products:data
                        })
                    })
        }
    render(){
        const itemData = this.state.products.map(item => <div key={item.id} className="item col-xl-3 col-md-6">
            <div className="card">
                <div className="d-flex justify-content-center">
                    <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title"><a className="nav-link" href={"/item/"+item.id}>{item.entitlement}</a></h5>
                    <div className="border-top"></div>
                    <p className="card-text text">{item.info}</p>
                    <p className="card-text text">{item.quantity} vnt.</p>
                    <p><span>Kaina:</span> {item.price}€</p>
                </div>
            </div>
        </div>)
    return(
        <main>
        <div>
            <div className="container">
                <h3>Naujausios prekės geriausiomis kainomis</h3>
            </div>
            <div className="container">
                <div className="row">
                    {itemData}
                </div>
        </div>
        </div>
        </main>
        )
    }
}

export default Main;