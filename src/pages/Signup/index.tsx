import en from '../../i18n/en.json'
import { AuthForm } from '../../uikit'
import { useAuthStore } from '../../stores'

export const SignUp = () => {
  const { signup, setError } = useAuthStore(state => ({
    signup: state.signup,
    setError: state.setError,
  }))

  const handleSignupSubmit = async (
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    if (confirmPassword !== password) {
      setError(en.auth.signup.passwordsNotEqual)
      return
    }

    await signup(email, password)
  }

  const handleInputFocus = () => {
    setError('')
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <AuthForm
        formPlaceholder={en.auth.signup.title}
        onSubmit={handleSignupSubmit}
        buttonText={en.auth.signup.button}
        isSignup={true}
        onInputFocus={handleInputFocus}
      />
    </div>
  )
}
