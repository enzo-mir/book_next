import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <section>
        <h1>Hi thers !</h1>
        <p>
          I&apos;m Enzo Miraglio
          <br />
          <strong>developer</strong> based in France
        </p>
      </section>
      <section>
        <h1>skills</h1>

        <article>
          <h2>Front-end</h2>
          <ul>
            <li>#React</li>
            <li>#NextJs</li>
            <li>#TypeScript</li>
            <li>#Tailwind</li>
            <li>#Zustand</li>
            <li>#Styled-components</li>
          </ul>
          <div>
            <Image src="/react_frontend.webp" alt="react logo in galaxy" width={600} height={300} priority />
          </div>
        </article>
        <article>
          <div>
            <Image src="/adonis_backend.webp" alt="adonis logo curved" width={600} height={300} priority />
          </div>
          <h2>Back-end</h2>
          <ul>
            <li>#AdonisJs</li>
            <li>#Inertia</li>
            <li>#Zod</li>
            <li>#NodeJs</li>
            <li>#Fastify</li>
          </ul>
        </article>
        <article>
          <h2>Others</h2>
          <ul>
            <li>#Figma</li>
            <li>#Github</li>
            <li>#VsCode</li>
          </ul>
          <div>
            <Image src="/figma_others.jpg" alt="figma logo" width={600} height={300} priority />
          </div>
        </article>
      </section>
      <section>
        <h1>FAQ&apos;s</h1>
        <div>
          <article>
            <h2>What’s my experience ?</h2>
            <button>+</button>
            <div>
              <p>
                I have actually 3 years of personnal experience in web development, 1 year with react and I recently adopted the Back-end development
              </p>
            </div>
          </article>
          <article>
            <h2>What to expect of me ?</h2>
            <button>+</button>
            <div>
              <p>I am a Front-end developer which try to have knowledge in back development and design</p>
            </div>
          </article>
          <article>
            <h2>How many times do I spend by projects ? </h2>
            <button>+</button>
            <div>
              <p>
                This is relative to the difficulty of the project, for an integration of design as landing page, SPA, this will be between 3 and 6
                hours (hosted inclued) else for a full stack application this will be longer.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section>
        <h1>Want a dev ?</h1>
        <button>Contact me !</button>
      </section>
    </>
  );
};

export default Portfolio;
