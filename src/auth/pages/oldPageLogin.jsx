import React from 'react'

export const antPageLogin = () => {
  return (
    <section className="vh-100">
    <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="card">
        <div className="card-body">

        
            <h3 className='text-center fw-normal mb-3 pb-3'>Registro</h3>
            <form>
                <div className="form-group mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                    />
                </div>
                <div className="form-group mb-2">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo"
                    />
                </div>
                <div className="form-group mb-2">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña" 
                    />
                </div>

                <div className="form-group mb-2">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Repita la contraseña" 
                    />
                </div>

                <div className="form-group mb-2">
                    <input 
                        type="submit" 
                        className="btn btn-primary btn-lg btn-block" 
                        value="Crear cuenta" />
                </div>
            </form>
        
        {/* <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid" alt="Phone image" />
        </div> */}
            {/* <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">Ingresar</p>
            </div> */}

            <h3 className="text-center fw-normal mb-3 pb-3">Ingresar</h3>
            <form>
            {/* User input */}
            <div data-mdb-input-init className="form-outline mb-2">
                <label className="form-label" >User</label>
                <input type="text" id="form1Example13" className="form-control form-control-lg" />
            </div>

            {/* <!-- Password input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" >Password</label>
                <input type="password" id="form1Example23" className="form-control form-control-lg" />
            </div>

            <div className="d-flex justify-content-around align-items-center mb-4">
                
                {/* <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                <label className="form-check-label" > Remember me </label>
                </div> */}
                <a href="#!">Forgot password?</a>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">Sign in</button>

            {/* <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div> */}

            {/* <a data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!" role="button">
                <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
            </a> */}
            {/* <a data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
                role="button">
                <i className="fab fa-twitter me-2"></i>Continue with Twitter</a> */}

            </form>
        </div>
        </div>
    </div>
</div>
</section>
  )
}
