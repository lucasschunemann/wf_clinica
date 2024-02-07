import Link from "next/link";
import clsx from "clsx";
import {

  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/meta_cumprida/",
    icon: BsInstagram,
  },
  {
    title: "linkedin",
    href: "#",
    icon: BsLinkedin,
  }
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
