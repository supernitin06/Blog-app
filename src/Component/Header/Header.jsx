import React from 'react';
import { useSelector } from 'react-redux';
import { LogoutBtn, Logo, Container } from "../index";
import { useNavigate, Link } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ];

    return (
        <header className='bg-gray-800 shadow-md py-4'>
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                        <ul className='flex space-x-4 ml-auto'>
                            {navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className='text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ) : null
                            )}
                            {authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
