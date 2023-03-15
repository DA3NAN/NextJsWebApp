import React from "react";
import miniNavStyles from "../styles/miniNavbar.module.css";
import Link from "next/link";
import { Tooltip, Button } from "@nextui-org/react";
import {
  PaperAirplaneIcon,
  InformationCircleIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export default function mini_navbar() {
  return (
    <div className={miniNavStyles.navbar}>
      <div className={miniNavStyles.links}>
        <ul>
          <Tooltip content={"Home"} className={miniNavStyles.item}>
            <Button auto flat>
              <Link href="/" className={miniNavStyles.icon}>
                <HomeIcon height={20} width={20} color="black" />
              </Link>
            </Button>
          </Tooltip>

          <Tooltip content={"Discover"} className={miniNavStyles.item}>
            <Button auto flat>
              <Link href="#" className={miniNavStyles.icon}>
                <PaperAirplaneIcon height={20} width={20} color="black" />
              </Link>
            </Button>
          </Tooltip>

          <Tooltip content={"About"} className={miniNavStyles.item}>
            <Button auto flat>
              <Link href="/about" className={miniNavStyles.icon}>
                <InformationCircleIcon height={20} width={20} color="black" />
              </Link>
            </Button>
          </Tooltip>

          <Tooltip content={"Contact"} className={miniNavStyles.item}>
            <Button auto flat>
              <Link href="#" className={miniNavStyles.icon}>
                <PhoneIcon height={20} width={20} color="black" />
              </Link>
            </Button>
          </Tooltip>
        </ul>
      </div>
    </div>
  );
}
