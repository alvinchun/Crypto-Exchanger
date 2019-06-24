import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculation'
import axios from 'axios'


export default class CoinContainer extends Component {
          constructor(props){
                    super(props)
                    this.state = {
                              name : '',
                              portfolio: [],
                              search_results: [],
                              active_currency: null,
                              amount: ''

                    }
                    this.handleChange = this.handleChange.bind(this)
          }
          handleChange(e){
                

                    axios.post('http://localhost:3000/search', {
                              search: e.target.value
                    })
                    .then((data)=>{
                                  this.setState({
                              [e.target.name] : e.target.value
                    })
                    })
                    .catch((data) => {
                              debugger
                    })
                    console.log(this.state.name)
          }
          render() {
                    return (
                              <>
                                        <Search handleChange={this.handleChange} />
                                        <Calculate />
                              </>
                    )
          }
}
