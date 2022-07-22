import React from 'react';
import {useSelector} from 'react-redux';

function ProfilePage() {
      const ProfileState = useSelector((state) => state.auth.ProfileData);
      console.log(ProfileState);
      return (
            <section>
                  <div className='row m-0 mt-5 pt-5 px-4'>

                        <div className="card mb-3 p-0 mt-5" >
                              { ProfileState && (
                                    <div className="row g-0">
                                    <div className="col-md-4">
                                          <img src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '300px', width: '100%' }} className="img-fluid rounded-start" alt="profile" />
                                    </div>
                                    <div className="col-md-8">
                                          <div className="card-body">
                                                <h5 className="card-title">Email: {ProfileState.userName}</h5>
                                                <p className="card-text">Name: {ProfileState.name}</p>
                                                <p className="card-text">id: {ProfileState.id}</p>
                                                <p className="card-text">Role: {ProfileState.role}</p>
                                          
                                          </div>
                                    </div>
                                    </div>

                              )}
                              { !ProfileState && ( <div className="p-3 card-title">Açık oturum bulunamamıştır </div>)}
                        </div>

                  </div>
            </section>
      )
}

export default ProfilePage