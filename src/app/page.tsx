'use client'

import { PrimaryButton } from '@/components/Button'
import { OutlinedInput } from '@/components/Input'
import { ErrorText } from '@/components/Text'
import { LoginForm } from '@/interface/login'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {}

  return (
    <>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a
            href='#'
            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
          >
            <img
              className='w-8 h-8 mr-2'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
              alt='logo'
            />
            Pegassus
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Masuk ke akun anda
              </h1>
              <form
                className='space-y-4 md:space-y-6'
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className='flex flex-wrap flex-col gap-2 h-auto w-full justify-center'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Masukan Email-mu
                  </label>
                  <OutlinedInput
                    type='email'
                    {...register('username', {
                      required: {
                        value: true,
                        message: 'Email Wajib Diisi',
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Duh, email mu tidak valid nih!',
                      },
                    })}
                    placeholder='name@company.com'
                  />
                  {errors?.username && (
                    <ErrorText>{errors?.username?.message}</ErrorText>
                  )}
                </div>
                <div className='flex flex-wrap flex-col gap-2 h-auto w-full justify-center'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Masukan Kata Sandimu
                  </label>
                  <input
                    type='password'
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Kata Sandi Wajib Diisi',
                      },
                    })}
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  />

                  {errors?.password && (
                    <ErrorText>{errors?.password?.message}</ErrorText>
                  )}
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        aria-describedby='remember'
                        type='checkbox'
                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='remember'
                        className='text-gray-500 dark:text-gray-300'
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href='#'
                    className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Forgot password?
                  </a>
                </div>

                <PrimaryButton type='submit' block>
                  Masuk
                </PrimaryButton>

                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don’t have an account yet?{' '}
                  <a
                    href='#'
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
