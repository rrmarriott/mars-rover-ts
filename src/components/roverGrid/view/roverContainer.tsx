import * as React from 'react';
import RoverGrid from './roverGrid';
import {Command, RoverDirection} from '../model/rover';
import RoverGridModel from '../model/roverGridModel';
import './roverContainer.css';

export default class RoverContainer extends React.Component<any, any> {

    static propTypes = {
        model: React.PropTypes.object.isRequired,
        router: React.PropTypes.object.isRequired
    };

    render() {
        let model = this.props.model;
        let rover = model.rover;
        let grid = model.grid;

        return (
            <div className="RoverContainer">
                <div className="RoverGame">
                    <button onClick={() => this.executeCommand(Command.MOVE_FORWARD)}>Forward</button>
                    <button onClick={() => this.executeCommand(Command.MOVE_BACKWARD)}>Back</button>
                    <button onClick={() => this.executeCommand(Command.TURN_LEFT)}>Left</button>
                    <button onClick={() => this.executeCommand(Command.TURN_RIGHT)}>Right</button>
                    <h4>
                        Currently Facing: {RoverDirection[rover.direction]}. Position: X = {rover.xPos}, Y: {rover.yPos}</h4>
                    <h2></h2>
                    <RoverGrid rover={rover} grid={grid}/>
                </div>
                <div>
                    <ul>
                        <li>
                            You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
                        </li>
                        <li>The rover receives a character array of commands.</li>
                        <li>Implement commands that move the rover forward/backward (f,b).</li>
                        <li>Implement commands that turn the rover left/right (l,r).</li>
                        <li>Implement wrapping from one edge of the grid to another. (planets are spheres after all)
                        </li>
                        <li>Implement obstacle detection before each move to a new square.
If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    executeCommand(command: Command) {
        this.props.router.publishEvent(this.props.model.modelId, RoverGridModel.EXECUTE_COMMAND, {command: command});
    }
}
