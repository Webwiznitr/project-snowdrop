'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Define the URL you want to redirect to
    const targetUrl = 'https://www.notion.so/Webwiz-Induction-task-1st-year-01828b6d43e042f7b96547d05fd1fc69?pvs=4';

    // Redirecting to the URL
    router.push(targetUrl);
  }, [router]);

  // Optionally, you can render something while waiting for the redirect
  return (
    <div className='text-white'>
      Redirecting...
    </div>
  );
};

export default RedirectPage;
