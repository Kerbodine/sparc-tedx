import React from "react";
import Member from "./Member";
import { teachers, students, guests } from "../config";
import Divider from "./Divider";

export default function Team() {
  return (
    <div className="px-8 pt-8 mx-auto max-w-4xl pb-16">
      <h2 className="text-2xl font-bold mb-8 text-ted-red text-center">
        Meet The Team:
      </h2>
      <h2 className="text-xl font-semibold mb-2 text-center">Teachers:</h2>
      <div className="mx-auto flex gap-4 flex-wrap justify-center">
        {teachers.map((member) => (
          <Member
            name={member.name}
            description={member.description}
            img={member.img}
          />
        ))}
      </div>
      <Divider />
      <h2 className="text-xl font-semibold mb-2 text-center">Students:</h2>
      <div className="mx-auto flex gap-4 flex-wrap justify-center">
        {students.map((member) => (
          <Member
            name={member.name}
            description={member.description}
            img={member.img}
          />
        ))}
      </div>
      <Divider />
      <h2 className="text-xl font-semibold mb-2 text-center">Guests:</h2>
      <div className="mx-auto flex gap-4 flex-wrap justify-center">
        {guests.map((member) => (
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
