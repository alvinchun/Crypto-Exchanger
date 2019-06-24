import React, { Component } from 'react'

export default class Search extends Component {
          constructor(props){
                    super(props)
          }
          render() {
                    return (
                              <div>
                                        <h1>Cryptocurrency Exchange Caculator</h1>
                                        <form action="">
                                                  <div>
                                                            <label htmlFor="">Search for a Currency:</label>
                                                            <br />
                                                            <input onChange={this.props.handleChange} autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Litecoin, Ethereum..." value={this.props.name} className="field"/>
                                                  </div>
                                        </form>
                              </div>
                    )
          }
}
