import React,{Component} from 'react';
import Routes from './src/Navigation/Routes';
// import { SplashScreen } from './src/Screens';

 export default  class App extends Component{
   constructor(props){
     super(props);
     this.state={
        isvisible:true,
     }
   }
  //  componentDidMount(){
  //    let that=this;
  //   setTimeout(() => {
  //      },
  //       2500)
  //       that.setState({
  //         isvisible:false
  //       })

  //  }

  
   render(){
    
     return(

    <Routes/>
   
  
     )
   }
 }