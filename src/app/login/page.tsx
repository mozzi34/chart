'use client'; // 클라이언트 컴포넌트임을 명시

import { useForm } from 'react-hook-form';

type LoginType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const onSubmit = (data: LoginType) => {
    console.log(data);
  };

  return (
    <div className='pt-6 md:p-8 text-center md:text-left space-y-4 flex flex-col justify-center items-center pc:h-screen'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='pc:max-w-3xl pc:w-full pc:justify-center'
      >
        <div className='flex flex-col'>
          <label className='p-2'>Email</label>
          <input
            {...register('email', {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              required: true,
            })}
            className='border p-2 max-w-5xl'
          />
          {errors.email && (
            <span className='p-2 text-red-500 text-sm'>
              이메일을 입력해 주세요
            </span>
          )}
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Password</label>
          <input
            type='password'
            {...register('password', { required: true, minLength: 8 })}
            className='border p-2'
          />
          {errors.password && (
            <span className='p-2 text-red-500 text-sm'>
              비밀번호를 입력해 주세요
            </span>
          )}
        </div>

        <button type='submit' className='border p-2 mt-10  pc:w-full'>
          확인
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
