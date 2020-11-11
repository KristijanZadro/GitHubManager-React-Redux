import React from 'react'
import { connect } from 'react-redux'
import {removeUser} from '../redux/actions/userActions'
import '../App.css'
import {MdDelete} from 'react-icons/md'

function UsersList({users,removeUser}) {
    const usersRender = users.map((user,index)=> {
        return (
            <tbody key={index}>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.public_repos}</td>
                    <td className="delete" onClick={()=> removeUser(user)}><MdDelete /></td>

                </tr>
            </tbody>
        )
    })
    return (
        <div className="table">
            {
                usersRender.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Repos</th>
                            <th>Action</th>
                        </tr>
                    </thead> 
                    
                    {usersRender}

                </table> :
                ''
            }
            
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        removeUser: id => dispatch(removeUser(id))
    }
}

 export default connect(null, mapDispatchToProps)(UsersList)