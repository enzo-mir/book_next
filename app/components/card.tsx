import React from "react";

const Card = ({
  id,
  children,
}: Readonly<{
  id: number;
  children: React.ReactNode;
}>) => {
  return (
    <article>
      {children}
      <a href={`/portfolio/${id}`}>Learn More +</a>
    </article>
  );
};

export default Card;
