import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

const pStyle = {
    fontSize: '20px',
    textAlign: 'right',
    fontWeight: 'bold'
  };

class TaskList extends Component{
    constructor(props){
        super(props);
    }

    static propTypes = {
        schedulerData: PropTypes.object.isRequired,
        newEvent: PropTypes.func.isRequired,
        taskDndSource: PropTypes.object.isRequired,
    }

    
      
    

    render(){
        const {schedulerData, newEvent, taskDndSource} = this.props;
        let DnDTaskItem = taskDndSource.getDragSource();
        let tasks = schedulerData.eventGroups;
        let startDate = '01-12-2017';
        let taskList = tasks.map((item, index) => {
            if(index == 0){
                startDate = '01-12-2017';
            }else if(index == 1){
                startDate = '02-12-2017';
            }else if(index == 2){
                startDate = '04-12-2017';
            }else if(index == 3){
                startDate = '01-12-2017';
            }
            return <div><DnDTaskItem key={item.id} task={item} newEvent={newEvent} schedulerData={schedulerData} /><div>Duration : {(index + 1) * 24} Hours / Start :{startDate}</div></div>
        });

        return (
            <div>
                <div style={pStyle}>Task List</div>
                <ul>
                    {taskList}
                </ul>
            </div>
        )
    }
}

export default TaskList
