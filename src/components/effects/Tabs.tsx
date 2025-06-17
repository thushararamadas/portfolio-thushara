'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const Tabs = () => {
  const pathname = usePathname();
  const selected = tabs.find((tab) => tab.path === pathname)?.label;

  return (
    <div className="mt-8 flex items-center flex-wrap gap-2 justify-end">
      {tabs.map((tab) => (
        <Chip
          key={tab.path}
          text={tab.label}
          selected={selected === tab.label}
          path={tab.path}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  path,
}: {
  text: string;
  selected: boolean;
  path: string;
}) => {
  return (
   <Link
        href={path}
        className={`relative px-2.5 py-0.5 rounded-md text-sm transition-colors ${
        selected
        ? 'text-white'
        : 'text-slate-300 hover:text-slate-200 hover:bg-[#313131]'
    }`}
>   
        <span className="relative z-10">{text}</span>
        {selected && (
            <motion.span
            layoutId="pill-tab"
            transition={{ type: 'spring', duration: 0.5 }}
            className="absolute inset-0 z-0 bg-[#313131] rounded-md"
            ></motion.span>
        )}
    </Link>

  );
};

export default Tabs;
