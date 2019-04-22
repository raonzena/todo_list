import React, { Component } from 'react';
import SubjectList from './SubjectList.js'
import TodoList from './TodoList.js'
import Search from './Search.js'
import InsertSubject from './InsertSubject.js'
import {dataStorage} from './data/data.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data : dataStorage,
      currentData : dataStorage[0],
      subjectId : 1
    }
  }

  // subject insert button handler
  insertSubjectHandler = () => {
    let id = this.state.subjectId;
    let newData = {
      subjectId : id,
      subject : 'new subject' + id,
      todolist : [],
      completelist : []
    };
    let cloneData = this.state.data;
    // cloneData.push(newData)
    dataStorage.push(newData)
    this.setState({
      data : cloneData,
      currentData : cloneData[cloneData.length - 1],
      subjectId : id + 1
    })
  }

  // subject 우클릭 event handler
  contextMenuHandler = (e) => {
    e.preventDefault();
  }
  
  // subject 좌클릭 시 todolist 변경 event handler
  onClickSubjectHandler = (data) => {
    this.setState({
      currentData : data
    })    
  }

  // todolist insert button click event handler
  todoFocusHandler = () => {
    let todoEntries = document.getElementsByClassName("todo-entry-text");
    todoEntries[0].focus();
  }

  // todolist onchange event handler
  insertTodoHandler = (e) => {
    if(e.target.value) {
      let data = this.state.data;
      let currentData = this.state.currentData;
      let currentIndex = 0;
      data.forEach((object, index)=> {
        if(object.subject === currentData.subject) {
          currentIndex = index;
          object.todolist.push(e.target.value);
        }
      })
      this.setState({
        currentData : data[currentIndex],
        data : data
      })
      e.target.value ='';
    }
  }
  
  insertTodoEnterHandler = (e) => {
    if(e.target.value && e.key === "Enter") {
      let data = this.state.data;
      let currentData = this.state.currentData;
      let currentIndex = 0;
      data.forEach((object, index)=> {
        if(object.subject === currentData.subject) {
          currentIndex = index;
          object.todolist.push(e.target.value);
        }
      })
      this.setState({
        currentData : data[currentIndex],
        data : data
      })
      e.target.value ='';
    }
    
  }

  searchSubjectHandler = (e) => {
    if(e.target.value !== "") {
      let cloneData = this.state.data;
      let resultData = [];
      cloneData.forEach((object) => {
        object.todolist.forEach((element) => {
          if(element.includes(e.target.value)) {
            resultData.push(object)
          }
        })
        object.completelist.forEach((element) => {
          if(element.includes(e.target.value)) {
            resultData.push(object)
          }
        })
      })
      if(resultData.length > 0) {
        this.setState({
          currentData : resultData[0],
          data : resultData
        })
      } else {
          let notFound = {
            id : "999",
            subject : e.target.value + " 검색 결과를 찾을 수 없습니다.",
            todolist : [],
            completelist : []
          }
          this.setState({
            currentData : notFound,
            data : dataStorage
          })
          let button = document.getElementsByClassName("insert-todo-button")[0]
          button.style.display="none";
        }
      } else {
        this.setState({
          currentData : dataStorage[0],
          data : dataStorage
        })
        let button = document.getElementsByClassName("insert-todo-button")[0]
        button.style.display="block";
    }
  }

  deleteTodoHandler = (e, todo) => {
    let cloneData = this.state.currentData;
    let deleteIndex = cloneData.todolist.indexOf(todo) !== -1 ? cloneData.todolist.indexOf(todo) : cloneData.completelist.indexOf(todo);
    let deleteData = cloneData.todolist.indexOf(todo) !== -1 ? cloneData.todolist : cloneData.completelist;
    deleteData.splice(deleteIndex, 1);
    this.setState({
      currentData : cloneData
    })
  }
  
  completeTodoHandler = (e) => {
    let cloneData = this.state.currentData;
    let completeIndex = cloneData.todolist.indexOf(e.target.value);
    let completeElement = cloneData.todolist.splice(completeIndex, 1);
    cloneData.completelist.push(completeElement);
    this.setState({
      currentData : cloneData
    })
  }

  render() {
    return (
      <div className="App">
        <div className="todolist-left">
          <Search searchSubjectHandler={this.searchSubjectHandler} />
          <SubjectList subjects={this.state.data} onClickSubjectHandler={this.onClickSubjectHandler}/>
          <InsertSubject insert={this.insertSubjectHandler}/>
        </div>
        <div className="todolist-right">
          <TodoList todos={this.state.currentData} todoFocusHandler={this.todoFocusHandler}
            insertTodoHandler={this.insertTodoHandler} contextMenuHandler={this.contextMenuHandler}
            deleteTodoHandler={this.deleteTodoHandler} completeTodoHandler={this.completeTodoHandler}
            insertTodoEnterHandler={this.insertTodoEnterHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
