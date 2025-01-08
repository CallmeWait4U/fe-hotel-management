"use client";

import Link from "next/link";
import { BreadcrumbObject } from "../type";

const Breadcrumb = (props: { breadcrumbs: BreadcrumbObject[] }) => {
  return (
    <div className="breadcrumbs text-base text-black ml-80">
      <ul>
        {
          props.breadcrumbs.map((item, index) => (
            <li key={index}>
              {
                item.route ? 
                  (
                    <Link href={item.route} className="hover:!no-underline hover:text-primary">
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Breadcrumb;