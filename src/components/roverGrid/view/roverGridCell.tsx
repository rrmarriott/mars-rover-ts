import * as React from 'react';
import './roverGridCell.css';

export default class RoverGridCell extends React.Component<{xPos: number, x: number, yPos: number, y: number}, {}> {

    static PropTypes = {
        xPos: React.PropTypes.number.isRequired,
        x: React.PropTypes.number.isRequired,
        yPos: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired
    };

    render() {

        let cellClass = 'RoverGridCell';
        let props = this.props;

        let theRoverIsOnThisCell = props.xPos === props.x && props.yPos === props.y;
        if (theRoverIsOnThisCell) {
            cellClass = cellClass + ' RoverGridCellRover';
        }

        return (<td key={props.y} className={cellClass} />);
    }
}