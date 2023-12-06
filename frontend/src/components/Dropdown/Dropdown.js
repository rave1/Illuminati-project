import { Menu } from '@headlessui/react'

const Dropdown = () => {
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
                    href="/documentation"
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
