'use client'; // 클라이언트 컴포넌트임을 명시

import { redirect } from 'next/navigation';

export default function Home() {
  const handleClick = () => {
    redirect('/login');
  };

  return (
    <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
      <div className='text-gray-'>랜딩페이지입니다</div>
      <div
        onClick={handleClick}
        className='pt-6 md:p-8 text-center md:text-left space-y-4 text-lg font-semibold text-slate-500 cursor-pointer'
      >
        로그인 페이지로 이동
      </div>
    </div>
  );
}
