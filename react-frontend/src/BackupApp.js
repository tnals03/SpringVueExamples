import React, { Component, useState, useRef, useCallback } from 'react';
// import './App.css';
import styles from './App.css';
import classNames from 'classnames/bind'
import MyTestComponent from './MyTestComponent'
import DefaultPropsTest from './DefaultPropsTest'
import TypePropsTest from './TypePropsTest'
import NumberPropsTest from './NumberPropsTest'
import ConstructorPropsTest from './ConstructorPropsTest'
import ClickEventPropsTest from './ClickEventPropsTest'
import NonConsEventPropsTest from './NonConsEventPropsTest'
import EventPractice from './event/EventPractice'
import ChangeEventPrac from './event/ChangeEventPrac'
import ReadChangeEventContent from './event/ReadChangeEventContent'
import ChangeClickEventTest from './event/ChangeClickEventTest'
import ChangeClickEventHandler from './event/ChangeClickEventHandler'
import ChangeClickEventHandlerNonCons from './event/ChangeClickEventHandlerNonCons'
import IdPwEventPrac from './event/IdPwEventPrac'
import AddEnterEvent from './event/AddEnterEvent'
import BGTest from './reference/BGTest'
import RefBGTest from './reference/RefBGTest'
import RefBoxTest from './reference/RefBoxTest'
import RefBoxBottomTest from './reference/RefBoxBottomTest'
import IterationSample from './repeat/IterationSample'
import StateBasedIteration from './repeat/StateBasedIteration'
import StateBasedEventIteration from './repeat/StateBasedEventIteration'
import LifeCycleSample from './lifecycle/LifeCycleSample'

import SassComponent from './SassComponent.js'
import SassStyleComponent from './style_dir/SassStyleComponent'
import CSSModule from './style_dir/CSSModule'
import CMTest from './style_dir/CMTest'
import StyledComponent from './style_dir/StyledComponent'

import { Route, Link, Switch } from 'react-router-dom'
import About from './router-test/About'
import Home from './router-test/Home'
import Profiles from './router-test/Profiles'
import History from './router-test/History'

const cx = classNames.bind(styles)

class App extends Component {
    render() {
        const reactText = 'Golang'
        const condition = true
        const style = {
            backgroundColor: 'gray',
            border: '1px solid black',
            height: Math.round(Math.random() * 300) + 50,
            width: Math.round(Math.random() * 300) +50,
        }
        /*
        const box = {
            display: "inline-block",
            width: "100px",
            height: "100px",
            border: "1px solid black",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }
        */



        return (
            <div className="my-div">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/profiles">Profile</Link>
                </li>
                <li>
                  <Link to="/history">History</Link>
                </li>
              </ul>
              <hr/>
              <Switch>
                <Route path="/" component={ Home } exact={ true }/>
                <Route path={[ "/about", "/info" ]} component={ About }/>
                <Route path="/profiles" component={ Profiles }/>
                <Route path="/history" component={ HistorySample }/>
                <Route
                  render={ ({ location }) => (
                    <div>
                      <h2>No pages!</h2>
                      <p>{ location.pathname }</p>
                    </div>
                  )}
                />
              </Switch>
                <h1>Hello ReactJs</h1>
                <h2>Golang Based ReactJs</h2>
                <h3>{reactText}</h3>
                {
                    condition ? '참' : '거짓'
                }
                <p>{ condition && '가즈아' }</p>
                <div style={style}></div>
                <form>
                    First name: <br/>
                    <input type="text" name="firstname"/><br/>
                    Last name: <br/>
                    <input type="text" name="lastname"/><br/>
                </form>
                // You can't write comment!
                /* this, too */
                <div
                    //we can do it!
                />
                <MyTestComponent name="Test"/>
                <DefaultPropsTest name="dfijeifsjle"/>
                <TypePropsTest name={3}/>
                <NumberPropsTest name="Rust" age={10}/>
                <ConstructorPropsTest name="verilog" age={7}/>
                <ClickEventPropsTest name="C#" age={3}/>
                <NonConsEventPropsTest name="C++" age={2}/>
                <EventPractice/>
                <ChangeEventPrac/>
                <ReadChangeEventContent/>
                <ChangeClickEventTest/>
                <ChangeClickEventHandler/>
                <ChangeClickEventHandlerNonCons/>
                <IdPwEventPrac/>
                <AddEnterEvent/>
                <BGTest/>
                <RefBGTest/>
                <RefBoxTest/>
                <RefBoxBottomTest ref={(ref) => this.refBoxBottomTest=ref}/>
                <button onClick={() => this.refBoxBottomTest.scrollToBottom()}>Bottom</button>
                <IterationSample/>
                <StateBasedIteration/>
                <StateBasedEventIteration/>
                <LifeCycleSample/>
                <div className={ cx('testbox', 'blue') }>
                    <h1>Hi</h1>
                </div>
                <div>
                    <h1>Hello</h1>
                    <SassComponent/>
                </div>
                <div>
                    <h1>Test</h1>
                    <SassStyleComponent/>
                    <CSSModule/>
                    <CMTest/>
                    <StyledComponent/>
                </div>
            </div>
        );
    }

}

export default App;
