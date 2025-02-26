'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from './AuthContext';

export default function Guest() {
  const session = useAuth();

  return (
    <li>
      {session?.user?.image ? (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors flex items-center gap-4"
        >
          <Image
            className="h-8 rounded-full"
            src={session.user.image}
            alt={session.user.name}
            width={32}
            height={32}
            referrerPolicy="no-referrer"
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors"
        >
          Guest area
        </Link>
      )}
    </li>
  );
}
