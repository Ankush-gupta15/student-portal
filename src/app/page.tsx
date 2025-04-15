import {Button} from '@/components/ui/button';
import {LogIn as StudentLoginIcon, Users as AdminLoginIcon} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">CampusConnect</h1>
      <div className="flex space-x-4">
        <Link href="/student/login">
          <Button>
            Student Login
            <StudentLoginIcon className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link href="/admin/login">
          <Button>
            Admin Login
            <AdminLoginIcon className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
