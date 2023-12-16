import { Menu } from '@headlessui/react'
import { useAuth } from '../../context/useAuth';

const Dropdown = () => {
  function logout(){
    localStorage.removeItem('token');
  }
  const {token} = useAuth()
  return (
    <Menu>
    {({ open }) => (
      <>
        <Menu.Button>More</Menu.Button>
        {open && (
          <div className='z-30 absolute top-full right-4 w-[200px] p-4 drop-shadow-lg rounded-md bg-white'>
            <Menu.Items static>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                    href="/dashboard"
                  >
                    My Orders
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                    href="/login"
                  >
                    Login
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ token }) => (
                  <a
                    className={`${!token
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                    href="/register"
                  >
                    Register
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                    href="/"
                    onClick={logout}
                  >
                    Logout
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </div>
        )}
      </>
    )}
  </Menu>
  )
}
export default Dropdown;
