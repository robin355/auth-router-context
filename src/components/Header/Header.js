import { React, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/UserContext';
const Header = () => {
    const { user, Logout } = useContext(AuthContext)
    const handleSignOut = () => {
        Logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awsome CR</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>Welcome {user.email}</span>}
                {user?.email ?
                    <button onClick={handleSignOut} className="btn btn-sm">Log Out</button>
                    :
                    <Link to='/login'>
                        <button className='btn btn-small'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;