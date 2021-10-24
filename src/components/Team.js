import React from "react";
import Member from "./Member";
import { team } from "../config";

export default function Team() {
  return (
    <div className="px-8 pt-8 mx-auto max-w-4xl pb-16">
      <div className="mx-auto flex gap-4 flex-wrap">
        {team.map((member) => (
          <Member
            name={member.name}
            description={member.description}
            img={member.img}
          />
        ))}
      </div>
    </div>
  );
}
