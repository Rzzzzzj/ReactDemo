import React,{Component} from 'react'

class App extends Component{
    render(){
        return(
            <ul className='my-list'>
                <li>{true?'liebiao1':'列表1'}</li>
                <li>liebiao2</li>
            </ul>
        )
    }
}

export default App