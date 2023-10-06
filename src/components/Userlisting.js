import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FetchUserList, Removeuser } from '../Redux/Action'
import { toast } from 'react-toastify'


const Userlisting = (props) => {

useEffect(()=>{
props.loaduser();
},[])

const handledelete=(code)=>{
  if(window.confirm('did you want to remove?')){
    props.removeuser(code);
    props.loaduser();
    toast.success('user recored successfully')
  }
}
  return (
    props.user.loading?<div><h2>Loding...</h2></div>:
    props.user.errmessage?<div><h2>{ props.user.errmessage}</h2></div>:

    <>
      <div className="card">
        <div className='card-header'>
          <Link to={'/user/add'} className='btn btn-success'>ADD +</Link>
        </div>
        <div className='card-body'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <td className='bg-dark text-white text-center'>Code</td>
                <td className='bg-dark text-white text-center'>Frist-Name</td>
                <td className='bg-dark text-white text-center'>Last-Name</td>
                <td className='bg-dark text-white text-center'>Email</td>
                <td className='bg-dark text-white text-center'>Phone</td>
                <td className='bg-dark text-white text-center'>Role</td>
                <td className='bg-dark text-white text-center'>Company</td>
                <td className='bg-dark text-white text-center'>Register-date</td>
                <td className='bg-dark text-white text-center'>Action</td>
              </tr>
            </thead>
            <tbody>
              {
                       props.user.userlist && props.user.userlist.map(item=>
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.fname}</td>
                          <td>{item.lname}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.role}</td>
                          <td>{item.company}</td>
                          <td>{item.date}</td>
                          <td>
    
                            <Link to={'/user/edit/'+ item.id} className='btn btn-primary'>Update</Link>
                            <button onClick={()=>{handledelete(item.id)}} className='btn btn-danger mx-3' >Delete</button>
                          </td>
                        </tr>
                       )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
const mapStateToProps=(state)=>{
  return{
    user:state.user
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    loaduser:()=>dispatch(FetchUserList()),
    removeuser:(code)=>dispatch(Removeuser(code))
  }
}
export default connect (mapStateToProps,mapDispatchToProps) (Userlisting)
