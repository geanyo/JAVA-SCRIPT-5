// const elem = <h1>Hello, world!</h1>
// aici nu se foloseste moustash, se pun acolade simple

// const name = "Geanina";
// const uri = "https://reactjs.org/";
// const sayHello = true;

// IF -------- in felul asta
// const element = (
//     <h1>
//         { sayHello && <div> Hello, { name } ! </div> }
//         <div> { new Date().toISOString() } </div>
//         <a href={ uri }>Learn more about React</a>
//     </h1>
// )

// SAU IF ELSE -------- in felul asta

// const Welcome = function(params) {
//   return (
//     <h1>
//       {params.sayHello 
//       ? <div> Hello, {params.name} 
//       ! </div> : <div> Good bye! </div>
//       }

//       <div> {new Date().toISOString()} </div>
//       <a href={params.uri}>Learn more about React</a>
//     </h1>
//   )
// }

// ReactDOM.render(
//     <Welcome sayHello={true} uri="https://reactjs.org/" name="Geanina"/>, 
//     document.getElementById('root')
// )



// {/* /* acesta este un template de JSX ------ JSX este un limbaj de templating */}
// {/* intai se da ca paramentru template-ing-URL, apoi componenta trebuie randata */}


class Welcome extends React.Component {
    render() {
        return (
        <h1>
            { this.params.sayHello 
            ? <div> Hello, { this.params.name } ! </div> 
            : <div> Good bye! </div>
            }
            <div> { new Date().toISOString() } </div>
            <a href={ this.params.uri } className= "highlight">Learn more about React</a>
        </h1>
    )
  }
}

const App = function() {
    return (
        <Welcome sayHello={true} uri="https://reactjs.org/" name="Geanina"/>
    )
} 
  
  ReactDOM.render(
      <App/>, 
      document.getElementById('root')
  )