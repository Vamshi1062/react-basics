import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import {Welcome} from './components/Welcome';
import { Hello } from './components/Hello';
import { Message } from './components/Message';
import { FunctionMessage } from './components/FunctionMessage';
import Counter from './components/Counter';
import { ClickHandler } from './components/ClickHandler';
import { UserGreetings } from './components/UserGreetings';
import { ParentComponent } from './components/ParentComponent';
import { NamedList } from './components/NamedList';
import { StyleSheets } from './components/StyleSheets';
import { Inline } from './components/Inline';
import './myAppStyles.css'
import styles from './myAppStyles.module.css'
import { Form } from './components/Form';
import { FormDetail } from './components/FormDetail';
import { FragmentDemo } from './components/FragmentDemo';
import { Table } from './components/Table';
import { FragmentList } from './components/FragmentList';
import LifeCycleA from './components/LifeCycleA';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import  WelcomeRefDemo  from './components/WelcomeRefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import ErrorBoundary from './components/ErrorBoundary';
import { Hero } from './components/Hero';
import { PortalDemo } from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import UpdatedComponent from './components/withCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
           Welcome to cgg
        </p> */}
         {/* <Greet name="React" designation="SSD">
        <p>This is children prop</p>
        </Greet>
        <Greet name="Angular" designation="SD">
        <button>Active</button>
          </Greet>
        <Greet name="vue" designation="TL"/> */}
        

        {/* <Welcome name="React" designation="SSD">
          <p>this is class</p>
        </Welcome>
        <Welcome name="Angular" designation="SD">
          <button>hello</button>
          </Welcome>
        <Welcome name="Vue" designation="TL"/> */}

        {/* <Counter/> */}
        {/* <Greet/> */}

        {/* <ClickHandler/> */}
        {/* <UserGreetings/> */}

        {/* <ParentComponent/> */}

        {/* <NamedList/> */}

        {/* <StyleSheets primary={false}/> */}

        {/* <Inline/> */}

        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>success</h1> */}

        {/* <FormDetail/> */}
        {/* <FragmentDemo/> */}
        
        {/* <Table/> */}
        
        {/* <FragmentList/> */}
        {/* <Message/> */}

        {/* <LifeCycleA/> */}

        {/* <PureComp/> */}

        {/* <ParentComp/> */}
        
        {/* <WelcomeRefDemo/> */}

        {/* <FocusInput/> */}

        {/* <FRParentInput/> */}

        {/* <ErrorBoundary>
          <Hero heroName='Batman'/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='Superman'/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='Joker'/>
        </ErrorBoundary> */}

        {/* <PortalDemo/> */}

        {/* <ClickCounter name='CGG'/>

        <HoverCounter name='XYZ'/>

        <UpdatedComponent/> */}

        {/* <ClickCounter2/>

        <HoverCounter2/>

        <User render={(isLoggedIn)=>isLoggedIn?'CGG':'Guest'}/> */}

        {/* <Counter2>
        {(count,incrementCount)=>
           <HoverCounter2 count={count}
           incrementCount={incrementCount}/>

        }
        </Counter2>

        <Counter2>
        {(count,incrementCount)=>
           <ClickCounter2 count={count}
           incrementCount={incrementCount}/>

        }
        </Counter2> */}
        <UserProvider value='CGG'>
        <ComponentC/>
        </UserProvider>

        {/* <FunctionMessage/> */}

        {/* <Hello/> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
