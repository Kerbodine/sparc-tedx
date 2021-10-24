import React from "react";
import Member from "./Member";
import { teachers, students, guests } from "../config";

export default function Team() {
  return (
    <div className="px-8 pt-8 mx-auto max-w-4xl pb-16">
      <h2 className="text-2xl font-bold mb-8 text-ted-red">Meet The Team:</h2>
      <h2 className="text-xl font-semibold mb-2">Teachers:</h2>
      <div className="mx-auto flex gap-4 flex-wrap">
        {teachers.map((member) => (
          <Member
            name={member.name}
            description={member.description}
            img={member.img}
          />
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8">Students:</h2>
      <div className="mx-auto flex gap-4 flex-wrap">
        {students.map((member) => (
          <Member
            name={member.name}
            description={member.description}
            img={member.img}
          />
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8">Guests:</h2>
      <div className="mx-auto flex gap-4 flex-wrap">
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
