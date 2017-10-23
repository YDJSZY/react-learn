/**
 * Created by luwenwei on 17/10/21.
 */
import React, { Component } from 'react';
import TableThComponent from '../../components/tableTh';
import ReactDOM from 'react-dom';
//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`,
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

// using some little inline style helpers to make the app look okay
const grid = 8;
const getItemStyle = (draggableStyle, isDragging) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    marginBottom: grid,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
});
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
});

export default class Page_c extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id:1,content:"aaa"},
                {id:2,content:"bbb"},
                {id:3,content:"ccc"}],
            testTitles:[
                "id",
                "内容"
            ]
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }/*result.destination:拖拽目的地*/
        console.log(result)

        const items = reorder(
            this.state.items,
            result.source.index,/*拖拽源*/
            result.destination.index
        );

        this.setState({
            items,
        });
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        var items = this.state.items;
        var testTitles = this.state.testTitles;
        return (
            <div className="table-responsive" key="table">
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                    <tr>
                        {
                            testTitles.map((item,index) => {
                                return <TableThComponent key={"_"+index} data={item} />
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map((item,index) => {
                            return <tr key={"_"+index}>
                                <td>{item.id}</td>
                                <td>{item.content}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        );
    }
}