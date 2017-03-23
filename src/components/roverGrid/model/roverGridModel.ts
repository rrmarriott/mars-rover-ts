import {viewBinding} from 'esp-js-react';
import RoverContainer from '../view/roverContainer';
import {Router, DisposableBase, observeEvent} from 'esp-js';
import {Rover, RoverDirection, Command} from './rover';
import Grid from './grid';

@viewBinding(RoverContainer)
export default class RoverGridModel extends DisposableBase {
    static readonly EXECUTE_COMMAND = 'executeCommand';
    static readonly MODEL_ID = 'marsRover';

    private _modelId: string;
    private _router: Router;
    private _rover: Rover;
    private _grid: Grid;

    constructor(router: Router) {
        super();
        this._modelId = RoverGridModel.MODEL_ID;
        this._router = router;

        this.createModelDefaults();
    }

    get modelId(): string {
        return this._modelId;
    }

    get rover(): Rover {
        return this._rover;
    }

    get grid(): Grid {
        return this._grid;
    }

    @observeEvent(RoverGridModel.EXECUTE_COMMAND)
    executeCommand(e: {command: Command}) {
        this._rover = this._rover.move([e.command]);
    }

    init() {
        this._router.addModel(this._modelId, this);
        this._router.observeEventsOn(this._modelId, this);
        this.addDisposable(() => {
            this._router.removeModel(this._modelId);
        });
    }

    private createModelDefaults() {
        this._grid = new Grid(20, 20);
        this._rover = new Rover(0, 0, RoverDirection.NORTH, this._grid);
    }
}