import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Sliders extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.temps = [-18, 0, 21, 30, 37]
        this.labels = [
            "Inside a freezer",
            "Water freezes",
            "Room temp",
            "Hot day",
            "Body temperature"
        ]
        this.state = {
            selected: 1
        }
    }

    onClick(e) {
        e.preventDefault();
        let i = Number(e.target.getAttribute('data-i'));
        this.setState({selected: i});
        let temp = this.temps[i];
        this.props.updateTemp(temp, 'c');
    }

    render() {
        let rows = this.temps.map(
            (ar, i) => (
                <span key={i} data-i={i} className={this.state.selected === i ? "selected" : ""}onClick={this.onClick}></span>
            )
        );
        return (
            <Col>
                <Row className="scale">
                    <Col className="text-left">Cold</Col>
                    <Col className="text-right">Warm</Col>
                </Row>
                <div className="line-through"></div>
                <div className="circles">
                    {rows}
                </div>
                <div className="temp-name">
                    {this.labels[this.state.selected]}
                </div>
            </Col>
        )
    }
}

export default Sliders;