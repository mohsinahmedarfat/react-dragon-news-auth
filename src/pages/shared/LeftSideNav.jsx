import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="pl-4 space-y-5">
      <h2 className="text-2xl">All Category: {categories.length}</h2>
      {categories.map((category) => (
        <Link
          to={`/category/${category.id}`}
          className="block pl-6"
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
