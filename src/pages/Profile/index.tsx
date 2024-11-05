import { MdLogout } from 'react-icons/md'
import { BsGearFill } from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'

import en from '../../i18n/en.json'
import defaultAvatar from '../../assets/defaultAvatar.png'
import { useAuthContext } from '../../contexts/AuthContext/hook'
import { SETTINGS_PAGE_URL } from '../../helpers/constants'

export const Profile = () => {
  const { user, logout } = useAuthContext()

  const handleLogoutClick = async () => {
    await logout()
  }

  return (
    <div className="py-5 px-14">
      <div className="flex gap-5">
        <div className="relative flex">
          <img
            src={defaultAvatar}
            className="rounded-full w-32"
            alt={en.profile.profileImageAltText}
          />
          <Link to={SETTINGS_PAGE_URL}>
            <BsGearFill className="text-3xl text-neutral-400 absolute top-1 right-1 hover:animate-spin-slow" />
          </Link>
        </div>
        <div className="flex flex-col justify-between my-5">
          <h1 className="text-3xl font-semibold">{en.profile.title}</h1>
          <p className="text-slate-600">
            {en.profile.email} {user?.email}
          </p>
          <button className="flex items-center gap-2" onClick={handleLogoutClick}>
            <MdLogout className="text-slate-600" />
            <p className="text-xs text-slate-600">{en.profile.buttons.logout.title}</p>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
