import React, { Component } from 'react';
import _ from 'lodash';
import { repeatsTimes } from './util';
import Square, {X, O} from './Square';

const BOARD_SIZE = 20;
const WIN = 5;

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();

        this.click = this.click.bind(this);
        this.checkMove = this.checkMove.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.isWinning = this.isWinning.bind(this);
        this.initialState = this.initialState.bind(this);
        this.undoLastMove = this.undoLastMove.bind(this);
    }

    componentWillReceiveProps() {
        this.reset();
    }

    resetGame() {
        this.setState(this.initialState);
    }

    initialState() {
        return {
            /* _.times(n, [iteratee=_.identity])
               20*20 null
            */
            board: _.times(BOARD_SIZE, () => _.times(BOARD_SIZE, _.constant(null))),
            current: X,
            prevBoards: [],
            prevCurrent: O,
            isWinning: null,
        }
    }

    undoLastMove() {
        const { prevBoards, prevCurrent } = this.state;
        const board = _.last(prevBoards);
        this.setState({
            board,
            current: prevCurrent,
            prevBoards: _.dropRight(prevBoards),
            prevCurrent: prevCurrent === X ? O : X,
            isWinning: null,
        });
    }

    alertWarning() {
        alert('STOP THAT');
    }

    checkMove(x, y) {
        const { board } = this.state;
        const mark = board[x][y];
        if (this.isWinning(mark, x, y)) {
            this.setState({
                isWinning: mark,
            });
        }
    }

    isWinning(mark, x, y) {
        const { board } = this.state;
        const range = _.range(-WIN + 1, WIN); //[-4, 4]
        return _.some([
            // right-to-left
            repeatsTimes(_.map(range, function(i) {
                return _.get(board, [x, y - i]);
            }), mark, WIN),
            // up-to-down
            repeatsTimes(_.map(range, function(i) {
                return _.get(board, [x + i, y]);
            }), mark, WIN),
            // upper-right to bottom-left
            repeatsTimes(_.map(range, function(i) {
                return _.get(board, [x + i, y - i]);
            }), mark, WIN),
            // bottom-right to upper-left
            repeatsTimes(_.map(range, function(i) {
                return _.get(board, [x + i, y + i]);
            }), mark, WIN),
        ]);
    }

    click(x, y) {
        if (!this.makeMove(x, y)) {
            this.alertWarning();
            return;
        }
        this.checkMove(x, y);
    }
    
    makeMove(x, y) {
        const {board, current, prevBoards } = this.state;
        if (board[x][y]) {
            return false;
        }

        const prevCurrent = current;
        prevBoards.push(_.cloneDeep(board));
        board[x][y] = current;
        this.setState({
            board,
            current: current === X ? O : X,
            prevBoards,
            prevCurrent,
        });
        return true;
    }

    render () {
        const click = this.click;
        const { board, isWinning, current } = this.state;
        return (
            <div className="board">
                <div className='board-container'>
                    <div className={'board' + this.state.current}>
                        {
                            _.map(_.range(0, BOARD_SIZE), function(y) {
                                return (
                                    <div key={y} className='board_row'>
                                        {
                                            _.map(_.range(0, BOARD_SIZE), function(x) {
                                                return <Square key={x * BOARD_SIZE + y} mark={_.get(board, [x, y])}
                                                        click={function() {
                                                            if (isWinning) {
                                                                return;
                                                            }
                                                            click(x, y);
                                                        }}
                                                />
                                            })
                                        }
                                    </div>
                                );
                            })

                        }
                    </div>
                </div>
                <div className='info-container'>
                    <div className='controls'>
                        {current === X && <p className='label'>PLAYER TURN: X</p>}
                        {current === O && <p className='label'>PLAYER TURN: O</p>}
                        {isWinning === X && <h1>X won</h1>}
                        {isWinning === O && <h1>O won</h1>}
                        <button onClick={this.resetGame} className='btn'>
                            Restart Game
                        </button>
                        {_.size(this.state.prevBoards) === 0 && 
                        <button onClick={this.undoLastMove} className='btn' disabled>
                            Undo Last Move
                        </button>}
                        {_.size(this.state.prevBoards) > 0 && 
                        <button onClick={this.undoLastMove} className='btn'>
                            Undo Last Move
                        </button>}
                        <div className='hint'>
                            <div><small>INSTRUCTIONS:</small></div>
                            <small>Your goal in Five-in-a-row is to get five X's in a
                                row while preventing your opponent from getting five O's in a row.</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board