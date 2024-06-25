import LoginButton from "./Login-Button"

export default function Login() {
    return (
        <div className="login-form">
        <h3 className="login-title">Login</h3>
        <div>
          <input type="text" placeholder="Username" />
        </div> <br />
        <div>
          <input type="text" placeholder="Password"/>
        </div> <br />
        <div>
        <LoginButton></LoginButton>
        </div>
      </div>
    ) 
}