import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link,useLocation } from 'react-router-dom'

import { Bloader } from '../../components/B2BLoader'
import { RootState } from '../../store'
import DashbaordImg from '../../assets/dashboard.png'
import BusinessEntryImg from '../../assets/business.png'
import BusServicesImg from '../../assets/bus.png'
import FlightServiceImg from '../../assets/flight.png'
import MobileServiceImg from '../../assets/topup.png'
import SearchImg from '../../assets/search.png'
import MenuImg from '../../assets/menu.png'
import UserImg from '../../assets/user.png'
import PowerOff from '../../assets/poweroff.png'
import './index.css'

interface dashboardWrapperProps {
  className?: string
  title?: string
}

export const DashboardWrapper: React.FC<dashboardWrapperProps> = ({
  title = 'b2badmin',
  className,
  children
}) => {
  const [isMenu, setIsMenu] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const {pathname} = useLocation()
  document.title = title
  const { loading } = useSelector((state: RootState) => state.auth)

  return (
    <div className={`${className} flex h-screen bg-gray-100`}>
      {/* Desktop Aside */}
      <aside className='z-20 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0'>
        <div className='py-4 text-gray-500'>
          <Link
            className='ml-6 text-lg font-bold text-gray-800'
            to='/dashboard'
          >
            B2B Admin Dashbaord
          </Link>
          <ul className='mt-6'>
            <li className='relative px-6 py-2'>
              <span className='absolute inset-y-0 left-0 bg-purple-600 round-tr-lg rounded-br-lg'></span>
              <Link
                to='/dashboard'
                className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'
              >
                <img
                  className='w-auto h-8'
                  src={DashbaordImg}
                  alt='dashbaord'
                />
                <span className='ml-4'>Dashboard</span>
              </Link>
            </li>
            <li className='relative px-6 py-2'>
              <span className='absolute inset-y-0 left-0 bg-purple-600 round-tr-lg rounded-br-lg'></span>
              <Link
                to='/dashboard/business_entry'
                className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'
              >
                <img
                  className='w-auto h-8'
                  src={BusinessEntryImg}
                  alt='dashbaord'
                />
                <span className='ml-4'>Business Entry</span>
              </Link>
              
            </li>
            <li className='relative px-6 py-2'>
              <span className='absolute inset-y-0 left-0 bg-purple-600 round-tr-lg rounded-br-lg'></span>
              <Link
                to='/dashboard/bus_services'
                className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'
              >
                <img
                  className='w-auto h-8'
                  src={BusServicesImg}
                  alt='dashbaord'
                />
                <span className='ml-4'>Bus Services</span>
              </Link>
            </li>
            <li className='relative px-6 py-2'>
              <span className='absolute inset-y-0 left-0 bg-purple-600 round-tr-lg rounded-br-lg'></span>
              <Link
                to='/dashboard/flight_services'
                className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'
              >
                <img
                  className='w-auto h-8'
                  src={FlightServiceImg}
                  alt='dashbaord'
                />
                <span className='ml-4'>Flight Services</span>
              </Link>
            </li>
            <li className='relative px-6 py-2'>
              <span className='absolute inset-y-0 left-0 bg-purple-600 round-tr-lg rounded-br-lg'></span>
              <Link
                to='/dashboard/mobile_services'
                className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'
              >
                <img
                  className='w-auto h-8'
                  src={MobileServiceImg}
                  alt='dashbaord'
                />
                <span className='ml-4'>Mobile Services</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      {/* Desktop Aside */}
      {/* Mobile Aside */}
      {/* backdrop */}
      {isMenu && (
        <div className='fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center transition ease-in-out duration-150'></div>
      )}
      {/* backdrop */}
      {isMenu && (
        <aside
          onClick={() => {
            setIsMenu(!isMenu)
          }}
          className='fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden transition ease-in-out duration-150'
        >
          <div className='py-4 text-gray-500'>
            <Link
              to='/dashboard'
              className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'
            >
              B2B Admin Dashbaoard
            </Link>
            <ul className='mt-6'>
              <li className='relative px-6 py-3'>
                <span className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'></span>
                <Link
                  to='/dashboard'
                  className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'
                >
                  <img
                    className='w-auto h-8'
                    src={DashbaordImg}
                    alt='dashboard'
                  />
                  <span className='ml-4'>Dashboard</span>
                </Link>
              </li>
            </ul>
            <ul className=''>
              <li className='relative px-6 py-3'>
                <Link
                  to='/dashboard'
                  className='nline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                >
                  <img
                    className='w-auto h-8'
                    src={BusinessEntryImg}
                    alt='business'
                  />
                  <span className='ml-4'>Business Entry</span>
                </Link>
                
              </li>
              <li className='relative px-6 py-3'>
                <Link
                  to='/dashboard/bus_services'
                  className='nline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                >
                  <img
                    className='w-auto h-8'
                    src={BusServicesImg}
                    alt='business'
                  />
                  <span className='ml-4'>Bus Services</span>
                </Link>
              </li>
              <li className='relative px-6 py-3'>
                <Link
                  to='/dashboard/flight_services'
                  className='nline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                >
                  <img
                    className='w-auto h-8'
                    src={FlightServiceImg}
                    alt='business'
                  />
                  <span className='ml-4'>Flight Services</span>
                </Link>
              </li>
              <li className='relative px-6 py-3'>
                <Link
                  to='/dashboard/digital_services'
                  className='nline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
                >
                  <img
                    className='w-auto h-8'
                    src={FlightServiceImg}
                    alt='business'
                  />
                  <span className='ml-4'>Digital Services</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}

      {/* Mobile Aside */}
      {/* Header */}
      <div className='flex flex-col flex-1 w-full'>
        <header className='z-10 py-4 bg-white shadow-md'>
          <div className='container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300'>
            {/* mobile hamburger */}
            <button
              onClick={() => {
                setIsMenu(!isMenu)
              }}
              className='p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple'
            >
              <img src={MenuImg} alt='menu' className='w-auto h-8' />
            </button>
            {/* mobile bamburger */}
            {/* search input */}
            <div className='flex justify-center flex-1 lg:mr-32'>
              <div className='relative w-full max-w-xl mr-6 focus-within:text-purple-500'>
                <div className='absolute inset-y-0 flex items-center pl-2'>
                  <img src={SearchImg} alt='search' className='w-4 h-4' />
                </div>
                <input
                  className='w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input'
                  type='text'
                  placeholder='Search for projects'
                  aria-label='Search'
                />
              </div>
            </div>
            {/* search input */}
            {/* account menu */}
            <ul className='flex items-center flex-shrink-0 space-x-6'>
              <li className='relative'>
                <button
                  onClick={() => {
                    setProfileOpen(!profileOpen)
                  }}
                  className='align-middle rounded-full focus:shadow-outline-purple focus:outline-none'
                >
                  <img
                    className='object-cover cursor-pointer w-8 h-8 rounded-full'
                    src={UserImg}
                    alt=''
                    aria-hidden='true'
                  />
                </button>
                {profileOpen && (
                  <div className='transition ease-in duration-150 absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700'>
                    <li
                      onClick={() => {
                        setProfileOpen(!profileOpen)
                      }}
                      className='flex'
                    >
                      <Link
                        to='/dashboard/business_entry'
                        className='inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                      >
                        <img src={UserImg} className='w-4 h-4' alt='user' />
                        <span className='font-normal ml-2'>Profile</span>
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        setProfileOpen(!profileOpen)
                      }}
                      className='flex'
                    >
                      <Link
                        to='/logout'
                        className='inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                      >
                        <img src={PowerOff} className='w-4 h-4' alt='user' />
                        <span className='font-normal ml-2'>Logout</span>
                      </Link>
                    </li>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </header>
        <main className='h-full overflow-y-auto '>
          <div className='container px-6 mx-auto'>
            <h2 className='my-6 text-xl font-normal text-gray-700 dark:text-gray-200 uppercase'>
              {pathname.replace('_','')}
            </h2>
            <div>test</div>
          </div>
        </main>
      </div>
      {/* Header */}
      {loading && <Bloader />}
    </div>
  )
}
