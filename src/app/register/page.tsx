"use client";
import '../auth.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
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
            <h1 className="login-title font-google">Register</h1>
            <p>Please provide your details to create a new account.</p>
          </div>

          <div className="right-cont">
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <div className="input-group">
                  <input type="text" id="name" name="name" className="input-field" placeholder=" " required />
                  <label htmlFor="name" className="input-label">Enter your name</label>
                </div>

                <div className="input-group">
                  <input type="email" id="email" name="email" className="input-field" placeholder=" " required />
                  <label htmlFor="email" className="input-label">Enter your email</label>
                </div>
              
                <div className="input-group">
                  <input type="password" id="password" name="password" className="input-field" placeholder=" " required />
                  <label htmlFor="password" className="input-label">Create a password</label>
                </div>
              </div>

              <p className="help-text ml-7">By registering, you agree to our <Link href="#">terms of service</Link> and <Link href="#">privacy policy</Link>.</p>

              <div className="button-group">
                <Link className="btn-secondary" href="/login">Sign in</Link>
                <button type="submit" className="btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
