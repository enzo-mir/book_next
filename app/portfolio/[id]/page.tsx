"use client";
import { useParams } from "next/navigation";
function PortfolioItem() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Portfolio Item</h1>
      {/* Your content here */}
    </div>
  );
}

export default PortfolioItem;
