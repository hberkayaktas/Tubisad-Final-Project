import React from 'react'
import Todo from '../../Components/Todos/Todo'

function TodoPage() {
      return (
            <section className="px-0 py-2 m-0 mt-5">
                  {/* About Start */}
                  <div className="container">
                        <p className="fw-bold text-center text-black fs-1 ">Todos</p>
                        <div className="row bg-light shadow rounded pb-3">
                              <Todo/>
                        </div>
                  </div>
                  {/* About end */}
            </section>
      )
}

export default TodoPage