import {Link, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Disclosure } from '@headlessui/react'
import {IoCloseSharp,IoMenuSharp} from 'react-icons/io5';
import NavLink from './NavLink';
import ProfileMenu from './ProfileMenu';
// import Logo from '../assets/logo.png';
import LightLogo from '../assets/logo.png';


const routes = [
  { name: 'Dashboard', path: '/dashboard', current: true },
  { name: 'New Question', path: '/add', current: false },
  { name: 'Leader Board', path: '/leaderboard', current: false },
]


const NavBar = () => {
  const location = useLocation();
  const {authedUser, users} = useSelector(({authedUser, users}) => ({authedUser, users}));
  const user = users[authedUser]
  return ( 
    <Disclosure as="nav" className="bg-indigo-800 shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 fixed top-0">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-300 hover:bg-opacity-50 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoCloseSharp className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IoMenuSharp className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto "
                    src={LightLogo}
                    alt="Workflow"
                  />
                  <div className="hidden lg:block text-white text-lg font-semibold ml-2">iVote</div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {routes.map(({name, path}) => (
                      <NavLink {...{name, path, currentPath: location.pathname}} key={name} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user && <ProfileMenu user={user}/>}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-indigo-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {routes.map(({name, path}) => (
                <NavLink {...{name, path, currentPath: location.pathname, isFull: true}} key={name}/>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   );
}
 
export default NavBar;