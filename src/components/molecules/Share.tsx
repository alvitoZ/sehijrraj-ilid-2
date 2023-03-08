import React from "react";
import Image from "next/image";
import Link from "next/link";

function Share() {
  return (
    <div className="full body">
      <div>
        <ul className="w-full flex gap-1 mt-5 px-[7%]  ">
          <li>
            <p>Bagikan</p>
          </li>
          <Link className="hyperlink" href="www.facebook.com">
            <Image
              src="/images/Facebook.png"
              alt={"Facebook.png"}
              width={36}
              height={36}
            ></Image>
          </Link>
          <Link className="hyperlink" href="/">
            <Image
              src="/images/Instagram.png"
              alt={"Intagram.png"}
              width={36}
              height={36}
            ></Image>
          </Link>
          <Link className="hyperlink" href="/">
            <Image
              src="/images/Twitter.png"
              alt={"Twitter.png"}
              width={36}
              height={36}
            ></Image>
          </Link>
          <Link className="hyperlink" href="/">
            <Image
              src="/images/Youtube.png"
              alt={"Youtube.png"}
              width={36}
              height={36}
            ></Image>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Share;
