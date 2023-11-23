import { Menu } from '@headlessui/react'

const Dropdown = () => {
  return (
    <Menu>
    {({ open }) => (
      <>
        <Menu.Button>More</Menu.Button>
        {open && (
          <div className='z-30'>
            <Menu.Items static>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                    href="/account-settings"
                  >
                    Account settings
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
                    Documentation
                  </a>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                <span className="block px-4 py-2 text-sm text-gray-400">
                  Invite a friend (coming soon!)
                </span>
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
