import Grid from './grid';
enum Command {
    MOVE_FORWARD,
    MOVE_BACKWARD,
    TURN_LEFT,
    TURN_RIGHT
}

enum RoverDirection {
    NORTH,
    SOUTH,
    EAST,
    WEST
}

class Rover {
    private static movement: Map<string, (rover: Rover) => Rover> = new Map<string, (rover: Rover) => Rover>();

    private _xPos: number;
    private _yPos: number;
    private _direction: RoverDirection;
    private _grid: Grid;

    static initMovements() {
        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.NORTH, Command.MOVE_FORWARD),
            (rover) => new Rover(rover.xPos, rover.yPos + 1, rover.direction, rover.grid));
        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.NORTH, Command.MOVE_BACKWARD),
            (rover) => new Rover(rover.xPos, rover.yPos - 1, rover.direction, rover.grid));

        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.SOUTH, Command.MOVE_FORWARD),
            (rover) => new Rover(rover.xPos, rover.yPos - 1, rover.direction, rover.grid));
        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.SOUTH, Command.MOVE_BACKWARD),
            (rover) => new Rover(rover.xPos, rover.yPos + 1, rover.direction, rover.grid));

        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.EAST, Command.MOVE_FORWARD),
            (rover) => new Rover(rover.xPos + 1, rover.yPos, rover.direction, rover.grid));
        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.EAST, Command.MOVE_BACKWARD),
            (rover) => new Rover(rover.xPos - 1, rover.yPos, rover.direction, rover.grid));

        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.WEST, Command.MOVE_FORWARD),
            (rover) => new Rover(rover.xPos - 1, rover.yPos, rover.direction, rover.grid));
        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.WEST, Command.MOVE_BACKWARD),
            (rover) => new Rover(rover.xPos + 1, rover.yPos, rover.direction, rover.grid));

        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.NORTH, Command.TURN_LEFT),
            (rover) => new Rover(rover.xPos, rover.yPos, RoverDirection.WEST, rover.grid));
        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.NORTH, Command.TURN_RIGHT),
            (rover) => new Rover(rover.xPos, rover.yPos, RoverDirection.EAST, rover.grid));

        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.SOUTH, Command.TURN_LEFT),
            (rover) => new Rover(rover.xPos, rover.yPos, RoverDirection.EAST, rover.grid));
        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.SOUTH, Command.TURN_RIGHT),
            (rover) => new Rover(rover.xPos, rover.yPos, RoverDirection.WEST, rover.grid));

        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.EAST, Command.TURN_LEFT),
            (rover) => new Rover(rover.xPos, rover.yPos, RoverDirection.NORTH, rover.grid));
        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.EAST, Command.TURN_RIGHT),
            (rover) => new Rover(rover.xPos, rover.yPos, RoverDirection.SOUTH, rover.grid));

        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.WEST, Command.TURN_LEFT),
            (rover) => new Rover(rover.xPos, rover.yPos, RoverDirection.SOUTH, rover.grid));
        Rover.movement.set(
            Rover.createMovementKey(RoverDirection.WEST, Command.TURN_RIGHT),
            (rover) => new Rover(rover.xPos, rover.yPos, RoverDirection.NORTH, rover.grid));
    }

    private static createMovementKey(direction: RoverDirection, command: Command) {
        return `${direction}-${command}`;
    }

    private static adjustPos(pos: number, size: number) {
        if (pos > size) {
            return 0;
        }

        if (pos < 0) {
            return size;
        }

        return pos;
    }

    constructor(xPos: number, yPos: number, direction: RoverDirection, grid: Grid) {
        this._xPos = Rover.adjustPos(xPos, grid.width - 1);
        this._yPos = Rover.adjustPos(yPos, grid.height - 1);
        this._direction = direction;
        this._grid = grid;
    }

    get xPos(): number {
        return this._xPos;
    }

    get yPos(): number {
        return this._yPos;
    }

    get direction(): RoverDirection {
        return this._direction;
    }

    get grid(): Grid {
        return this._grid;
    }

    move(commands: Array<Command>) {

        let newRover: Rover = this;

        commands.forEach(c => {
            let movementKey = Rover.createMovementKey(newRover._direction, c);
            let moveRover = Rover.movement.get(movementKey);

            newRover = moveRover ? moveRover(newRover) : newRover;
        });

        return newRover;
    }
}
Rover.initMovements();

export {RoverDirection, Rover, Command}