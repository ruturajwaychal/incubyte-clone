import React from "react";
import laptop from "../../images/laptop.jpg";
import "./Home.css";
import { VscCircleFilled } from "react-icons/vsc";

const Home = () => {
  return (
    <div className="container">
      <div className="col-md-10 mx-auto">
        <img src={laptop} alt="" height={530} width={750} className="mt-5" />
      </div>
      <div className="col-md-10">
        <h1 className="mt-5 fw-bolder">Incubyte TDD Assessment</h1>
      </div>
      <div className="col-md-6 mx-auto TextSection">
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-primary rounded-pill py-0 px-3 mx-1 tdd"
          >
            Careers
          </button>
          <button
            type="button"
            className="btn btn-primary rounded-pill py-0 px-3 mx-1 tdd"
          >
            Software Craftmanship
          </button>
          <button
            type="button"
            className="btn btn-primary rounded-pill py-0 px-3 mx-1 tdd"
          >
            TDD
          </button>
        </div>
        <div className="mt-3 fw-light">
          <p>Hello there and welcome to the Incubyte TDD Kata!</p>
          <p>
            This assessment is the first step in our recruiting process and will
            be followed by two pair
            <br /> programming/discussion sessions.
          </p>
        </div>
      </div>
      <div className="col-md-6 mx-auto TextSection">
        <h2 className="fw-bolder">What we’re looking for</h2>
        <p className=" fw-light">
          A Software Craftsperson at Incubyte is a person who has a strong
          commitment to the craft of software development. Someone who is
          passionate about software, knows her/his tools well and is able to use
          them effectively to create carefully crafted software. Ultimately, a
          person who has a strong sense of what it is they are doing and is
          self-motivated to learn and grow.
        </p>
        <p className="fw-light">
          TDD is a core practice for all of us at Incubyte. We strongly believe
          that well written software, is a lot more valuable for the business
          and end users, as compared to software that is hacked together (but
          works!).
        </p>
        <p className="fw-light">
          Through this assessment, we want to evaluate how readable and testable
          your code is. We want see the Software Craftsperson in you.
        </p>
        <p className="fw-light">
          As software developers searching the internet is something of a
          necessity and vital for our job. We encourage you to Google away! You
          can also visit our inspiration page to find some useful talks and
          references that will help you through this assessment.
        </p>
        <p className="fw-light">
          With that, let’s jump right in! Follow the instructions below, take
          your time to do it well and send us your kata once you’re happy with
          what you’ve done.
        </p>
      </div>
      <div className="col-md-6 mx-auto TextSection">
        <h1 className="fw-bolder">String Calculator TDD Kata</h1>

        <p className="fw-light">
          1. Create a simple String calculator with a method signature:
        </p>
        <div className="fw-light">
          <div tabindex="1" className="mx-auto pt-1 pb-1 tabind">
            <span className="text-primary px-2">int </span>
            <span className="add">Add </span>
            <span className="text-danger">(</span>
            <span className="text-white">String numbers</span>
            <span className="text-danger">)</span>
          </div>
          <p className="mt-3 fw-light">
            The method can take up to two numbers, separated by commas, and will
            return their sum.
          </p>
          <p>
            For example <span className="example">""</span> or
            <span className="example">"1"</span> our
            <span className="example">"1,2"</span> as inputs. (for an empty
            string it will return 0)
          </p>
          <h6 className="fw-light">Hints:</h6>
          <ul>
            <p>
              <VscCircleFilled className="bullets" />
              Start with the simplest test case of an empty string and move to
              one and two numbers
            </p>
            <p>
              <VscCircleFilled className="bullets" />
              Remember to solve things as simply as possible so that you force
              yourself to write tests you did not think about
            </p>
            <p>
              <VscCircleFilled className="bullets" />
              Remember to refactor after each passing test
            </p>
          </ul>
          <p>2. Allow the Add method to handle an unknown amount of numbers</p>

          <p>
            3. Allow the Add method to handle new lines between numbers (instead
            of commas).
          </p>
          <ul>
            <p>
              <VscCircleFilled className="bullets" />
              The following input is ok:
              <span className="example"> "1\n2,3" </span> (will equal 6)
            </p>
            <p>
              <VscCircleFilled className="bullets" />
              The following input is NOT ok:
              <span className="example"> "1,\n" </span> (not need to prove it -
              just clarifying)
            </p>
          </ul>

          <p>4. Support different delimiters</p>
          <ul>
            <p>
              <VscCircleFilled className="bullets" />
              To change a dmiter, the beginning of the string will contain a
              separatene that looks like this:
              <br />
              <span className="example"> "//[delimiter]\n[numbers…]" </span>
              for example <span className="example"> "//;\n1;2" </span> should
              return three where the default <br /> delimiter is
              <span className="example"> ";"</span>
            </p>
            <p>
              <VscCircleFilled className="bullets" />
              The first line is optional. all existing scenarios should still be
              supported
            </p>
          </ul>

          <p>
            5. Calling Add with a negative number will throw an exception
            <span className="example"> "negatives not allowed" </span> - and the
            <br />
            negative that was passed.
          </p>
          <p>
            If there are multiple negatives, show all of them in the exception
            message.
          </p>
        </div>
      </div>
      <div className="mt-5 col-md-10">
        <h6 className="verticle col-md-6 mx-auto px-5 mt-5 TextSection">
          <br />
          <span className="fw-light">
            Want more? Check out TDD Kata 1 for the full version.
          </span>
        </h6>
      </div>
      <div className="col-md-6 mx-auto mt-5 TextSection">
        <h1>Submitting the assessment</h1>
        <ul className="col-md-7 mt-4 fw-light TextSection">
          <p>1. Create a git repository on GitHub/GitLab.</p>
          <p>2. Clone the repository to your local machine.</p>
          <p>3. Follow best practices for TDD, git and commit often.</p>
          <p>4. Push your changes to GitHub/GitLab.</p>
          <p>5. Send us a link to your repository.</p>
        </ul>
      </div>
      <div className="mt-5 col-md-12">
        <h6 className="verticle col-md-7 mx-auto px-5 mt-5 TextSection">
          <br />
          <span className="fw-light">
            We encourage you to use the programming language you feel most
            comfortable with.
          </span>
        </h6>
      </div>
      <div className="mt-5">
        <h1 className="col-md-6 mx-auto mt-5 TextSection">Have questions?</h1>
        <p className="col-md-6 mx-auto fw-light TextSection">
          Feel free to ask us anything! We are here to help.
        </p>
        <p className="col-md-12 mx-5 fw-light mb-5 ">
          - By
          <a className="text-primary text-decoration-none" href="!#">
            Abhishek Keshri
          </a>
          on Tuesday, September 21, 2021
        </p>
      </div>
    </div>
  );
};

export default Home;
