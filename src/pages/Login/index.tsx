import en from '../../i18n/en.json'
import { AuthForm } from '../../uikit'
import { useAuthStore } from '../../stores'

export const LogIn = () => {
  const { login, setError } = useAuthStore(state => ({
    login: state.login,
    setError: state.setError,
  }))

  const handleLoginSubmit = async (email: string, password: string) => {
    await login(email, password)
  }

  const handleInputFocus = () => {
    setError('')
  }

  return (
    <div className="flex h-[calc(100vh-64px)] justify-center items-center">
      <AuthForm
        formPlaceholder={en.auth.login.title}
        onSubmit={handleLoginSubmit}
        buttonText={en.auth.login.button}
        isSignup={false}
        onInputFocus={handleInputFocus}
      />
    </div>
  )
}
