// this ----- OBIECTUL CURENT
// super ---- PARINTELE

class Clicker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clicks: 0
        }
    }

    render() {
        return (
            <button onClick={ () => this.handleClick() }>
                You clicked me { this.state.clicks } times
            </button>
        )
    }

        // handleClick = () {
        //     this.setState({
        //     count: this.state.count + 1
        //     })
        //     }        -------   ESTE O VARIANTA PENTRU BINDING

        //     this.handleClick = this.handleClick.bind(this);   -------   ESTE O ALTA VARIANTA PENTRU BINDING, ea se foloseste direct in constructor
     handleClick() {
        this.setState({
            clicks: this.state.clicks + 1
                    // this.data.clicks += 1; ------ IN VUE  ------- el se face in mod implicit
                    // this.setState({
                    //     clicks: this.state.clicks + 1
                    // })    ---------- IN REACT  --------- setarea starii se face  cu setState, nu se face implicit
        })
    }
    
}


// binding-ul este necesar pentru ca metodele claselor
// nu sunt legate de contextul claselor
// ci de contextul in care se executa
// de aceea this nu va functiona daca metoda e apelata
// ca un callback

ReactDOM.render(
   <Clicker />,
   document.getElementById('root') 
)

