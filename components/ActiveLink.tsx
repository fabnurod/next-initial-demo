import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const style:CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
} 

export const ActiveLink : FC<Props>  = ({ href, text }) => {
  const route = useRouter();
  const { pathname } = route;

  return (
    <Link href={href} legacyBehavior>
      <a style={pathname.toLowerCase() === href.toLowerCase() ? style : undefined}>
        {text}
      </a>
    </Link>
  );
};
