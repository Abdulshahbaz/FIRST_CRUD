import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import { useNavigate, useParams } from 'react-router-dom';
import { FetchUserObj, FunctionUpdateUser } from '../Redux/Action';

const Updateuser = () => {
  const [id,idchange] = useState(0);
  const [fname,fnamechange] = useState('');
  const [lname,lnamechange] = useState('');
  const [email,emailchange] = useState('');
  const [phone,phonechange] = useState('');
  const [role,rolechange] = useState('staff');
  const [company,companychange] = useState('');
  const [date,datechange] = useState('');
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {code} = useParams();


  const userobj=useSelector((state)=>state.user.userobj)

  const handlesubmit=(e)=>{
    e.preventDefault();
  const userobj ={id,fname,lname,email,phone,role,company,date}
   dispatch(FunctionUpdateUser(userobj,id))
   navigate('/')
  }

  useEffect(()=>{
    dispatch(FetchUserObj(code))
  },[])

  useEffect(()=>{
    if(userobj){
      idchange(userobj.id)
      fnamechange(userobj.fname)
      lnamechange(userobj.lname)
      emailchange(userobj.email)
      phonechange(userobj.phone)
      rolechange(userobj.role)
      companychange(userobj.company)
      datechange(userobj.date)
    }
  },[userobj])
  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1 className='color'>UPDATE USER</h1>
      <div className='w-50 rounded bg-white border shadow p-4'>
      <form onSubmit={handlesubmit}>

      <div class="mb-3">
  <label ><b>ID</b></label>
  <input type="text" class="form-control" name='id' value={id || ''} disabled='disabled'/>
</div>
<div class="mb-3">
  <label ><b>FRIST-NAME</b></label>
  <input type="text" class="form-control" name='name' value={fname || ''} onChange={e=>fnamechange(e.target.value)}/>
</div>

<div class="mb-3">
  <label ><b>LAST-NAME</b></label>
  <input type="text" class="form-control" name='name' value={lname || ''} onChange={e=>lnamechange(e.target.value)}/>
</div>

<div class="mb-3">
  <label><b>EMAIL</b></label>
  <input type="email" class="form-control" name='email' value={email || ''} onChange={e=>emailchange(e.target.value)} />
</div>

<div class="mb-3">
  <label><b>PHONE</b></label>
  <input type="number" class="form-control" name='phone' value={phone || ''} onChange={e=>phonechange(e.target.value)}/>
</div>

<div class="mb-3">
  <label><b>ROLE</b></label>
  <select className='form-control' value={role || ''} onChange={e=>rolechange(e.target.value)}>
    <option value='admin'>Admin</option>
    <option value='staff'>Staff</option>
  </select>
</div>

<div class="mb-3">
  <label ><b>NAME</b></label>
  <input type="text" class="form-control" name='name' value={company || ''} onChange={e=>companychange(e.target.value)}/>
</div>


<div class="mb-3">
  <label ><b>NAME</b></label>
  <input type="date" class="form-control" name='date' value={date || ''} onChange={e=>datechange(e.target.value)}/>
</div>

<button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  </>
  )
}

export default Updateuser
