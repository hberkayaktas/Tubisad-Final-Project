import {useEffect} from 'react'
import {postLoginAsync,setLoginStateNull} from '../../Redux/AuthSlice';
import { useFormik } from "formik";
import {useDispatch, useSelector } from 'react-redux'
import  validationSchema  from "./LoginValidation";
import { useNavigate } from "react-router-dom";

function ModalLogin({login,setlogin}) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const errorState = useSelector((state) => state.auth.errorLogin);
  const loginSuccessState = useSelector((state) => state.auth.loginSuccess);
  
  const showLogin = () => {
    if(login === "none"){
          setlogin("block");
    }else{
          setlogin("none")
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try{
        dispatch(postLoginAsync({ 
          email:values.email,
          password:values.password
        }))
        
        
        //console.log(Neco)
        
        //
      }catch(e){
        bag.setErrors({general:e.response.data.error});
        //console.log(e.response.data.error)
      }
    },
  });
  useEffect(() => {
    if(loginSuccessState){
      const nav = () =>{
        setlogin("none")
        navigate("/profile")
        dispatch(setLoginStateNull())
      }
      setTimeout(nav,5000)
    }
  }, [loginSuccessState])
  
 
  return (
    <div className='' style={{zIndex:"1050",width:'100%',backgroundColor:'#00000075',display:login,height:'100%',position:'fixed'}}>
    <div className={`modal fade show position-relative`}
     id="registerId"
      tabIndex="-1"
      style={{display:"block"}}
       >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  fw-bold">Login</h5>
            <button type="button" className="btn-close" onClick={()=> showLogin()} />
          </div>
          
          <div className="modal-body">
            {errorState && (
            <div className="alert alert-danger mb-0  wow shakeX animated" role="alert">
              {errorState}
            </div>
          )}
          {loginSuccessState && (
            <div className="alert alert-success mb-0  wow bounce animated" role="alert">
              {loginSuccessState}
              
            </div>
          )}
            <form onSubmit={formik.handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label><br />
                <div className="col-sm-12">
                  <input  className={`form-control ${formik.errors.email && formik.touched.email && 'borderDanger wow shakeX animated'}`} name="email"
                  type="email" 
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.email} />
                     {formik.errors.email && formik.touched.email &&( <div className="error">{formik.errors.email}</div>)}

                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label><br />
                <div className="col-sm-12">
                  <input  type="password" name="password" 
                           className={`form-control ${formik.errors.password && formik.touched.password && 'borderDanger  wow shakeX animated'}`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                         
                        />
                        {formik.errors.password && formik.touched.password &&( <div className="error">{formik.errors.password}</div>)}
                   
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ModalLogin