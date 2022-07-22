import {useState} from 'react'

import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';
import NavTabs from './NavTabs';
function Navbar() {
      const [login, setlogin] = useState("none");
      const [register, setregister] = useState("none");
      return (
            <>
            <NavTabs setlogin={setlogin} login={login} setregister={setregister} register={register}/>
            <ModalLogin setlogin={setlogin} login={login}/>
            <ModalRegister setregister={setregister} register={register}/>
            </>
  )
}

export default Navbar