
// const elem = <h1>Hello, world!</h1>
// aici nu se foloseste moustash, se pun acolade simple

const name = 'Geanina';
const uri = 'https://reactjs.org/';
const sayHello = true;

// IF -------- in felul asta
// const elem = (
//     <h1>
//         { sayHello && <div> Hello, { name } ! </div> }
//         <div> { new Date().toISOString() } </div>
//         <a href={ uri }>Learn more about React</a>    
//     </h1>
// )


// SAU IF ELSE -------- in felul asta

const elem = (
    <h1>
        { sayHello 
        ? <div> Hello, { name } ! </div> 
        : <div> Good bye! </div> }

        <div> { new Date().toISOString() } </div>
        <a href={ uri }>Learn more about React</a>    
    </h1>
)

ReactDOM.render(
    elem,
    document.getElementById('root')
)
// acesta este un template de JSX ------ JSX este un limbaj de templating
// intai se da ca paramentru template-ing-URL, apoi componenta trebuie randata

