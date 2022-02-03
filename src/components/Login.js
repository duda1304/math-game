import logo from '../images/logo-light@2x.png';
import createUser from '../api/createUser'
import login from '../api/login'
import { useState } from 'react';

function Login(props) {
    const [disabled, setDisabled] = useState(false);
    const [registerHTTPResponse, setRegisterHTTPResponse] = useState("");
    const [loginHTTPResponse, setLoginHTTPResponse] = useState("");

    const loginSubmit = (event) => {
        setDisabled(true);
        const form = event.currentTarget;
        event.preventDefault();
        login(form)
        .then(response => {
            if (response.code === 200) {
                localStorage.setItem("auth_key", response.token);
                if (form.rememberMe.checked === true) {
                    localStorage.setItem("token", response.token);
                }
                document.getElementById("openLoginModal").click();
                props.setMerchantConfirmed(response.merchant_confirmed);
                props.setPage("homescreen");
            } else {
                setLoginHTTPResponse(response.message);
                setTimeout(() => {
                    setLoginHTTPResponse("");
                    setDisabled(false);
                }, 2000);
            }
            })
        .catch(error => {
            setLoginHTTPResponse('Something went wrong, please try again');
            setTimeout(() => {
                setLoginHTTPResponse("");
                setDisabled(false);
            }, 2000);
        })
    }
    const registerSubmit = (event) => {
        setDisabled(true);
        const form = event.currentTarget;
        event.preventDefault();
        createUser(form)
        .then(response => {
            if (response.code === 200) {
                localStorage.setItem("auth_key", response.token);
                props.setPage("homescreen");
            } else {
                setRegisterHTTPResponse(response.message);
                setTimeout(() => {
                    setRegisterHTTPResponse("");
                    setDisabled(false);
                }, 2000);
            }
            })
        .catch(error => {
            setRegisterHTTPResponse('Something went wrong, please try again');
            setTimeout(() => {
                setRegisterHTTPResponse("");
                setDisabled(false);
            }, 2000);
        })
    }
    return (
        <div className="page-main">
            <div className="header py-3" id="login-header">
                <div className="container">
                    <div className="d-flex">
                    <a className="header-brand" href="/SeekingKiwi/SeekingKiwi/">
                        <img className="header-brand-img" src={logo} alt="YouDate"></img>        
                    </a>
                    <div className="d-flex align-items-center order-lg-2 ms-auto">
                        <span className="pe-4">Have an account?</span>
                    <a id="openLoginModal" className="btn btn-pill btn-login" data-bs-toggle="modal" data-bs-target="#modal-auth">Sign in</a>            
                    </div>
                    </div>
                </div>
            </div>
            <div className="content content-landing pt-5 pb-5" style={{"flex" : "1"}}>
                <div className="container">
                    <div className="card w-100">
                        <div className="row row-landing-page ">
                            <div className="col-lg-6">
                                <div className="landing-page-bg h-100"></div>
                            </div>
                            <div className="col-lg-6 d-flex flex-column">
                                <div className="landing-page-signup d-flex flex-column justify-content-center flex-grow-1">
                                    <div className="landing-page-signup-head">
                                        <h1 style={{"color" : "#334"}}>Welcome to YouDate!</h1>
                                        <div className="subtitle">
                                            YouDate is a place where you can find your love or friends.                            
                                        </div>
                                    </div>
                                    <div className="landing-page-signup-form flex-fill">
                                        <form id="registration-form" onSubmit={registerSubmit} autoComplete="off">
                                            <div className="step step-2 hide">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group field-register-form-username required">
                                                            <label className="form-label" htmlFor="register-form-username">Username</label>
                                                            <input type="text" id="register-form-username" className="form-control" name="username" required></input>
                                                            <div className="help-block"></div>
                                                        </div>                                        
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group field-register-form-email required">
                                                            <label className="form-label" htmlFor="register-form-email">Email</label>
                                                            <input type="email" id="register-form-email" className="form-control" name="email" required></input>
                                                            <div className="help-block"></div>
                                                        </div>    
                                                    </div>                                    
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group field-register-form-password required">
                                                        <label className="form-label" htmlFor="register-form-password">Password</label>
                                                        <input type="password" id="register-form-password" className="form-control" name="password" required></input>
                                                        <div className="help-block"></div>
                                                    </div>                                        
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <button disabled={disabled} type="submit" className="btn btn-primary btn-block">Sign up</button>   
                                                        <p>{registerHTTPResponse}</p>                                     
                                                    </div>
                                                    <div className="terms text-muted pt-3 px-3 text-center text-small">
                                                        By continuing, you're confirming that you've read and agree to our 
                                                        <a href="/SeekingKiwi/SeekingKiwi/page/terms-and-conditions">Terms and Conditions</a>, 
                                                        <a href="/SeekingKiwi/SeekingKiwi/page/privacy-policy">Privacy Policy</a> and 
                                                        <a href="/SeekingKiwi/SeekingKiwi/page/cookie-policy">Cookie Policy</a>   
                                                    </div>                                 
                                                </div>
                                            </div>
                                        </form>                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="modal modal-auth fade show" role="dialog" tabIndex="-1" aria-labelledby="modal-auth" aria-hidden="true" id="modal-auth">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Log in</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="login-form" onSubmit={loginSubmit}>
                  <div className="form-group field-login-form-login required">
                    <label className="form-label" htmlFor="login-form-login">E-mail</label>
                    <input type="email" id="login-form-login" className="form-control" name="email" autoFocus="autofocus" tabIndex="1" required></input>
                    <div className="help-block"></div>
                  </div>
                  <div className="form-group field-login-form-password required">
                    <label className="form-label" htmlFor="login-form-password">Password</label>
                    <input type="password" id="login-form-password" className="form-control" name="password" tabIndex="2" required></input>
                    {/* <div className="hint-block"><a href="/SeekingKiwi/SeekingKiwi/recovery/request" tabIndex="5">Forgot password?</a></div> */}
                    <div className="help-block"></div>
                  </div>
                  <div className="form-group field-login-form-rememberme">
                    <label className="custom-control custom-checkbox">
                    <input type="checkbox" id="login-form-rememberme" className="custom-control-input" name="rememberMe" tabIndex="4"></input>
                    <span className="custom-control-label">Remember me next time</span>
                    </label>
                  </div>
                  <button disabled={disabled} type="submit" className="btn btn-primary btn-block" tabIndex="4">Sign in</button>
                  <p>{loginHTTPResponse}</p> 
                </form>
              </div>
          </div>
        </div>
        </div>
        </div>
    );

}

export default Login;