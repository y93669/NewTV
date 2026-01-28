'use client';

import Link from 'next/link';

import AIChatEntry from './AIChatEntry';
import { BackButton } from './BackButton';
import { useSite } from './SiteProvider';
import { UserMenu } from './UserMenu';

interface MobileHeaderProps {
  showBackButton?: boolean;
}

const MobileHeader = ({ showBackButton = false }: MobileHeaderProps) => {
  const { siteName } = useSite();
  return (
    <header className='md:hidden fixed top-0 left-0 right-0 z-[999] w-full glass-nav border-b border-white/20 shadow-glass dark:border-white/10'>
      <div className='h-12 flex items-center justify-between px-4'>
        {/* 左侧：标题 */}
        <div className='flex items-center'>
          <Link
            href='/'
            className='text-xl font-bold text-black dark:text-white tracking-tight hover:opacity-80 transition-opacity'
          >
            {siteName}
          </Link>
        </div>

        {/* 右侧：返回按钮、AI聊天入口、App下载按钮、搜索按钮、用户菜单 */}
        <div className='flex items-center gap-2'>
          {showBackButton && <BackButton />}
          <AIChatEntry />
          <a
            href='https://share.feijipan.com/s/g9WyDxqM'
            target='_blank'
            rel='noopener noreferrer'
            className='w-10 h-10 p-2 rounded-full flex items-center justify-center text-gray-600 hover:bg-white/20 dark:text-gray300 dark:hover:bg-white/10 transition-all duration-200'
            title='下载App'
          >
            <svg
              className='w-full h-full'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
              />
            </svg>
          </a>
          <Link
            href='/search'
            className='w-10 h-10 p-2 rounded-full flex items-center justify-center text-gray-600 hover:bg-white/20 dark:text-gray300 dark:hover:bg-white/10 transition-all duration-200'
          >
            <svg
              className='w-full h-full'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </Link>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
