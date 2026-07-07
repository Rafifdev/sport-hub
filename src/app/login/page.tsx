"use client";
import '../auth.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLogin', 'true');
    router.push('/');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container font-helvetica">
        <div className="card-container">
          <div className="left-cont">
            <img className="symbol" src="/assets/symbol.svg" alt="Exqeon Symbol" />
            <h1 className="login-title font-google">Sign in</h1>
            <p>Please enter your account credentials to continue the login process.</p>
          </div>

          <div className="right-cont">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <div className="input-group">
                  <input type="email" id="email" name="email" className="input-field" placeholder=" " required />
                  <label htmlFor="email" className="input-label">Enter your email</label>
                </div>
              
                <div className="input-group">
                  <input type="password" id="password" name="password" className="input-field" placeholder=" " required />
                  <label htmlFor="password" className="input-label">Enter your password</label>
                </div>

                <Link href="#" className="forgot-password ml-7">Forgot password?</Link>
              </div>

              <p className="help-text ml-7">If you're unable to access your account or facing login issues, please don't hesitate to <Link href="#">contact us</Link> for assistance.</p>

              <div className="button-group">
                <Link className="btn-secondary" href="/register">Register</Link>
                <button type="submit" className="btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
