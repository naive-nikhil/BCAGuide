import React from "react";
import profilePic from "../assets/profile.jpg";

const About = () => {
  return (
    <>
      {" "}
      <h1 className="text-xl text-gray-700">✨About ME 😊</h1>
      <div className="flex border">
        <div>
          <h2>Hi, I'm Nikhil 👋 - an Ex-BCA Student from IGNOU.</h2>
          <p>
            When I started my journey with IGNOU, I faced the same struggles
            that many of us do:
          </p>
          <ul>
            <li>
              No clear place to find previous year question papers, assignments,
              or solutions.
            </li>
            <li>
              Guidelines and notifications scattered across multiple sites.
            </li>
            <li>A lack of organized study materials and proper guidance.</li>
            <li>
              Feeling lost while trying to figure out the right path for exams,
              projects, and submissions.
            </li>
          </ul>
          <p>
            Like many students, I spent hours searching for reliable resources
            but often ended up confused and frustrated. That’s when I decided —
            why not build something that solves these problems once and for all?
          </p>
          <p>
            This platform is the result of that thought. My goal is to create a
            clean, minimal, and organized space where every IGNOU BCA student
            can find:
          </p>
          <ul>
            <li>📚 Previous year question papers (with solutions)</li>
            <li>📝 Assignments and study materials</li>
            <li>🔗 Important links and official guidelines</li>
            <li>📢 Updates and notifications in one place</li>
          </ul>
          <p>
            I want this website to be the place I wish I had when I started my
            BCA journey — a space that saves time, reduces confusion, and makes
            learning easier for every IGNOU BCA student.
          </p>
          <p>
            This is not just a project for marks, it’s something built from my
            own challenges and experiences, with the hope that it will guide and
            support others walking the same path.
          </p>
          <p>
            Together, we can make the BCA journey smoother and more meaningful.
            🚀
          </p>
        </div>
        <div
          className={`py-3 min-w-60 lg:p-0 lg:h-200 overflow-hidden flex items-center justify-center rounded-md w-full text-nowrap bg-violet-200 border border-violet-300 border-b-2 hover:border-violet-400`}
        >
          <img src={profilePic} />
        </div>
      </div>
    </>
  );
};

export default About;
