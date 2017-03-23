import {Router} from 'esp-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RouterProvider, SmartComponent} from 'esp-js-react';
import RoverGridModel from './components/roverGrid/model/roverGridModel';
import './bootstrap.css';

export default class Bootstrap {

    start() {
        let espRouter = new Router();

        let roverGridModel = new RoverGridModel(espRouter);
        roverGridModel.init();

        this.showUi(espRouter);
    }

    showUi(espRouter: Router) {
        ReactDOM.render(
            <RouterProvider router={espRouter}>
                <div className="App-Wrapper">
                    <div className="App-header">
                        <h1>Mars Rover Kata</h1>
                    </div>
                    <div className="App">
                        <SmartComponent modelId={RoverGridModel.MODEL_ID} />
                    </div>
                </div>
            </RouterProvider>,
            document.getElementById('root')
        );
    }
}