import {postRegisterAsync} from '../../Redux/AuthSlice';
import { useFormik } from "formik";
import {useDispatch,useSelector } from 'react-redux'
import  validationSchema  from "./RegisterValidation";
import { useEffect} from 'react';

function ModalRegister({register,setregister}) {
  const dispatch = useDispatch();
  let errorState = useSelector((state) => state.auth.errorRegister)
  useEffect(() => {
    //console.log(errorState)
  }, [errorState])


  const showRegister = () => {
    if(register === "none"){
          setregister("block");
    }else{
          setregister("none")
    }
  }

  const  formik = useFormik({
    initialValues: {
      name:"",
      userName:"",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try{
        
        dispatch(postRegisterAsync({
          name:values.name,
          userName:values.userName,
          email:values.email,
          password:values.password
        }));

        
        
      }catch(e){
        bag.setErrors({general:e.response.data.ValidationErrors.errors[0]});
        //console.log(e.response.data.ValidationErrors.errors[0].msg)
      }
    },
  });
  
  
  return (
    <div className='' style={{zIndex:"1050",width:'100%',backgroundColor:'#00000075',display:register,height:'100%',position:'fixed'}}>
      <div className={`modal fade show position-relative`}
       id="registerId"
        tabIndex="-1"
        style={{display:"block"}}
         >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  fw-bold">Register</h5>
            <button type="button" className="btn-close" onClick={()=> showRegister()} />
          </div>
       
          <div className="modal-body">
       
            {errorState &&(
              <div className="alert alert-warning mb-0  wow shakeX animated" role="alert">
                {errorState}
              </div>
            )}
        
            <form onSubmit={formik.handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="inputEmail6" className="col-sm-2 col-form-label">Name</label><br />
                <div className="col-sm-12">
                  <input   name="name"
                  type="text" 
                  className={`form-control ${formik.errors.name && formik.touched.name && 'borderDanger  wow shakeX animated'}`} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  
                  />
                    {formik.errors.name && formik.touched.name &&( <div className="error">{formik.errors.name}</div>)}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label><br />
                <div className="col-sm-12">
                  <input   name="userName"
                  type="text" 
                    className={`form-control ${formik.errors.userName && formik.touched.userName  && 'borderDanger   wow shakeX animated'}`} 
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.userName}
                    
                    />
                   {formik.errors.userName && formik.touched.userName &&( <div className="error">{formik.errors.userName}</div>)}

                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label><br />
                <div className="col-sm-12">
                  <input   name="email"
                  type="email" 
                  className={`form-control ${formik.errors.email && formik.touched.email  && 'borderDanger   wow shakeX animated'}`}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.email}
                       
                     />
                     {formik.errors.email && formik.touched.email &&( <div className="error">{formik.errors.email}</div>)}
                 
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label><br />
                <div className="col-sm-12">
                  <input type="password" name="password" 
                  className={`form-control ${formik.errors.password && formik.touched.password && 'borderDanger   wow shakeX animated'}`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                         
                        />
                        {formik.errors.password && formik.touched.password &&( <div className="error">{formik.errors.password}</div>)}
                    
                </div>
              </div>
              <button type="submit" className="btn btn-success">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ModalRegister