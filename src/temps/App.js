import React from 'react';

import './App.scss'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Side from './Side';
import Sliders from './Sliders';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {'f': 32, 'c': 0};
        this.updateTemp = this.updateTemp.bind(this);
    }

    cToF(c){
        let f = (c * (9/5)) + 32;
        f = Math.round(f);
        return f
    }

    fToC(f){
        let c = (f - 32) * (5/9);
        c = Math.round(c);
        return c
    }

    updateTemp(temp, unit){
        let c, f;
        switch(unit) {
            case 'c':
                c = temp;
                f = this.cToF(temp);
                break;
            case 'f':
                f = temp;
                c = this.fToC(temp);
                break;
        };

        this.setState({'c': c, 'f': f});
    }

    render() {
        return (
            <Row className="align-items-center h-100">
                <Col><Row>
                    <Col xs={6} lg={4} className="side-panel">
                        <Side unit="Celsius" val={this.state.c} />
                    </Col>
                    <Col xs={{span: 12, order: 3}} lg={{span: 4, order: 0}} className="center-panel">
                        <Row className="h-100 align-items-center">
                            <Sliders
                                c={this.state.c}
                                f={this.state.f}
                                updateTemp={this.updateTemp}
                            />
                        </Row>
                    </Col>
                    <Col xs={6} lg={4} className="side-panel">
                        <Side unit="Fahrenheit" val={this.state.f}/>
                    </Col>
                </Row></Col>
            </Row>
        )
    }
}

export default App;