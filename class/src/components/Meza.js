import React from 'react'
class Meza extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {this.setState({value: event.target.value});}
    handleSubmit(event) {
        alert('A name  was subbmited:' + this.state.value);
        event.preventDefault()
    }
    return() {
        <form onSubmit={this.handleSubmit} action="submit">
            <label htmlFor="input">
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value='submit' />
            </label>
        </form>
    }
}export default Meza