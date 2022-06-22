import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Class from './components/Class';
import State from './components/State';
import Counter from './components/Counter';
import Click from './components/Click';
import Details from './components/Details';
import Event from './components/Event';
import Parent from './components/Parent';
import Conditional from './components/Conditional';
import List from './components/List';
import Style from './components/Style';
import   './Style2.css'
import Forms from './components/Forms';
import Change from './components/Change';
import  Fragment  from './components/Fragment';
import Table from './components/Table';
import Parentcom from './components/Parentcom';
import Ref from './components/Ref';
import ParentRef from './ParentRef';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
/* import RenderCom from './components./RenderCom'; */
import Counter2 from './Counter2';
import ComponentC from './ComponentC';
//import { userProvider } from './UserContext'
import {UserProvider } from './UserContext'
function App() {
  return (
     <div className="App"> 
    {/*  <UserProvider value="chandu">
     <ComponentC/> 
     </UserProvider> */}
     
    {/*   <header className="App-header"> */}
       {/*  <Parentcom /> */}
         {/* <Forms /> */}
          <Ref />  
        {/*  <ClickCounter /> 
        /*   <HoverCounter />  */}
        {/*   <Counter2 render={(count,increment)=>(
<ClickCounter count={count} increment={increment}/>
          )}/>
       

<Counter2 render={(count,increment)=>(
<HoverCounter count={count} increment={increment}/>
          )}/>  */}
{/* <ComponentC /> */}
        {/*  <DCounter />  */}
      {/*  <ParentRef/> */}
       {/*  <Change />  */}
      {/*   <Fragment/> */}
      {/* <Table /> */}
      {/*   <h1 className='class'>Success</h1> */}
       {/*  <img src={logo} className="App-logo" alt="logo" /> */}
       {/*  <p>
       
        </p> */}
         {/*  <Greet name="chandrika" lname="bogem"/>  */}
         {/*  <Style></Style> */}
       {/*  <Greet name="pooja" lname="are"/>
        <Greet name="sahithi" lname="bogem"/>
        <Greet name="shv" lname="dfffr"/>  */}
        {/*  <Welcome name="chandrika " lname="bogem"/>   */}
       {/*  <State/> */}
       {/*  <Counter/> */}
      {/*  <Class />  */}
      {/* <Click/> */}
      {/*  <Details names="chandu" role="intern" country="india"/>  */}
     {/*  <Event/>   */}
     {/* <Parent/> */}
     {/* <Conditional/> */}
    {/*  <List/> */}
     {/* <Style /> */}
     {/*  </header> */}
     </div> 
  );
}

export default App;
