'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import config from "@/config";
import "@/css/footer.scss";

export default function Footer() {
  const pathname = usePathname();
  const hideFooterPaths = ['/add', '/profile', '/privacy-policy', '/terms-of-service', '/contact', '/thank-you'];
  const shouldHide = hideFooterPaths.some((path) => pathname.startsWith(path));
  if (shouldHide) return null;

  return (
    <footer id="footer">
      <p>© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
      <p>Not affiliated with Minecraft or Mojang</p>
      <div>
        <Link className="link" href="/contact">Contact Us</Link>
        <Link className="link" href="/server-list">Server List</Link>
        <Link className="link" href="/privacy-policy">Privacy Policy</Link>
        <Link className="link" href="/terms-of-service">Terms of Service</Link>
      </div>
    </footer>
  )
}