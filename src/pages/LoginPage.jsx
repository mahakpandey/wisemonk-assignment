import Button from '../ui/Button.jsx'
import Divider from '../ui/Divider.jsx'
import Input from '../ui/Input.jsx'
import Convincely from '../assets/convincely.svg'
import Utrip from '../assets/utrip.svg'
import Wieldy from '../assets/wieldy.svg'
import BeautyGarage from '../assets/BeautyGarage.svg'
import Leverage from '../assets/leverage.svg'
import ISO from '../assets/ISO.svg'
import ASICP from '../assets/image25.svg'
import { Eye } from 'lucide-react'



export default function LoginPage({ onSignedIn }) {
  return (
    <div className="bg-white flex flex-col lg:flex-row sm:px-10 mx-auto items-center max-w-[1400px] w-full flex-1 mb-10">
      {/* Left: form */}
      <div className="flex flex-col px-6 sm:px-8 lg:px-10 my-auto w-full lg:w-[40%] gap-16">

        <div className="max-w-md mx-auto">
          <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 sm:text-[34px]">
            Welcome back to Wisemonk
          </h1>
          <p className="mt-2 text-sm leading-6 text-neutral-500 font-medium ">
            Sign in to manage your team, payroll, and compliance.
          </p>

          <div className="mt-10 space-y-6">
            <Button variant="secondary" className="w-full justify-center">
              <span className="mr-2 inline-flex size-5 items-center justify-center rounded bg-white/80">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21.6 12.272c0-.74-.067-1.45-.19-2.13H12v4.03h5.4a4.62 4.62 0 0 1-2 3.03v2.52h3.24c1.9-1.75 2.96-4.33 2.96-7.45z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 22c2.7 0 4.97-.9 6.63-2.44l-3.24-2.52c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.58-4.12H3.08v2.6A9.99 9.99 0 0 0 12 22z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.42 13.88A5.99 5.99 0 0 1 6.1 12c0-.65.12-1.28.32-1.88V7.52H3.08A10 10 0 0 0 2 12c0 1.61.39 3.13 1.08 4.48l3.34-2.6z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 6c1.47 0 2.79.5 3.83 1.49l2.87-2.87C16.96 2.99 14.7 2 12 2A9.99 9.99 0 0 0 3.08 7.52l3.34 2.6C7.2 7.76 9.4 6 12 6z"
                    fill="#EA4335"
                  />
                </svg>
              </span>
              Sign in with Google
            </Button>

            <Divider label="or continue with" />

            <div className="space-y-5">
              <Input label="Work Email*" type="email" />
              <Input label="Password*" type="password" rightIcon={<Eye className='w-8' />} />
            </div>

            <Button className="w-full justify-center" onClick={onSignedIn}>
              Sign in
            </Button>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-neutral-800 font-medium">Don’t have an account yet?
                <a
                  href="#"
                  className="text-xs font-medium text-neutral-800 underline underline-offset-4 hover:text-neutral-900"
                >
                  {' '}Create your workspace
                </a>
              </span>
              <span className='text-[#2684FF]'>
                <a
                  href="#"
                  className="text-xs font-medium underline underline-offset-4 hover:text-blue-900"
                >
                  Forgot password?
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className='mx-auto '>
          <p className="pt-6 text-xs leading-5 text-neutral-500 font-medium">
            By continuing, you agree to Wisemonk’s{' '}
            <a href="#" className="font-medium text-neutral-700 underline underline-offset-4">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="font-medium text-neutral-600 underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right: marketing */}
      <div className="relative w-full lg:w-[60%]  bg-[radial-gradient(circle,rgba(232,240,255,1)_0%,rgba(255,255,255,1)_80%)] gap-10">

        <div className="relative mx-auto flex h-full flex-col justify-between gap-10">

          <div className='flex flex-col gap-16'>
            <h2 className="mt-10 px-6 sm:px-10 lg:px-10 text-balance text-center text-[30px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[40px]">
              Hire in India. Fast, Compliant, <br />Fully Managed.
            </h2>

            <div className="flex flex-col items-center justify-center gap-6">
              <p className="mt-3 text-sm text-center font-bold leading-6 text-gray-600">
                Trusted by 200+ Global Teams
              </p>
              <div className='flex flex-col items-center'>
                <div className="w-full mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <button className="w-full h-full gap-2 flex items-center justify-center bg-white rounded-2xl py-2 px-4">
                    <img src={Convincely} alt="convincely" />
                    <span className="text-sm font-bold text-gray-800 sm:text-lg">Convincely</span>
                  </button>
                  <button className="w-full h-full flex items-center justify-center gap-2 bg-white rounded-2xl py-2 px-4">
                    <img src={Utrip} alt="utrip" />
                    <span className="text-sm font-bold text-gray-800 sm:text-lg">Youtrip</span>

                  </button>
                  <button className="w-full h-full flex items-center justify-center gap-2 rounded-2xl py-2 px-4 bg-white ">
                    <img src={Wieldy} alt="wieldy" />
                    <span className="text-sm font-bold text-gray-800 sm:text-lg">Wieldy.ai</span>

                  </button>
                </div>
                <div className="w-full mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <button className="w-full h-full flex items-center justify-center gap-2 rounded-2xl py-2 px-4 bg-white">
                    <img src={BeautyGarage} alt="beauty-garage" />
                    <span className="text-sm font-bold text-gray-800 sm:text-lg">Beauty Garage</span>

                  </button>
                  <button className="w-full h-full flex items-center justify-center gap-2 rounded-2xl py-2 px-4 bg-white ">
                    <img src={Leverage} alt="leverage" />
                    <span className="text-sm font-bold text-gray-800 sm:text-lg text-nowrap">Leverage Companies</span>

                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className="text-[16px] text-neutral-500 font-medium text-center">
              “Wisemonk helped us tap into the vibrant and top-notch<br />
              Indian talent market.”</div>
            <div className="mt-4 flex items-center justify-center">
              <div className="leading-tight">
                <div className="text-sm font-bold text-gray-900">Krishna Ramachandran</div>
                <div className="text-xs text-neutral-600 text-center font-medium">Co-founder at Onform</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center  px-6 sm:px-10 lg:px-10">
            <div className='flex '>
              <img src={ASICP} alt="beauty-garage" />
              <img src={ISO} alt="beauty-garage" />
            </div>
            <div className='text-neutral-500 text-lg font-bold'>SOC 2 and ISO certified.</div>
          </div>

        </div>
      </div>

    </div>
  )
}


