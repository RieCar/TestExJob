import React, { Component } from 'react'
import { connect } from 'react-redux'

export const SideBar = () => {
    return (
        <div>
              <h3>Dashboard</h3>     
            <ul>
                <li><p>Secret Projects</p></li>
                <li><p>Secret Orders</p></li>
                <li><p>Secret Contracts</p></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)

