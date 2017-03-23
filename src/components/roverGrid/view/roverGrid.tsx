import * as React from 'react';
import RoverGridCell from './roverGridCell';

export default class RoverGrid extends React.Component<any, any> {

    static PropTypes = {
        rover: React.PropTypes.object.isRequired,
        grid: React.PropTypes.object.isRequired
    };

    render() {
        let rover = this.props.rover;
        let grid = this.props.grid;

        let horizontal = Array.from({length: grid.width}, (x, i) => i);
        let vertical = Array.from({length: grid.height}, (x, i) => grid.height - 1 - i);

        return (
            <div>
                <table>
                    <tbody>
                    {vertical.map(y =>
                        (
                            <tr key={y}>
                                {horizontal.map(x =>
                                    <RoverGridCell key={x} y={y} x={x} xPos={rover.xPos} yPos={rover.yPos}/>)}
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}