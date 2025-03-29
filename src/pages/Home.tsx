import { AddRow } from "../components/addRow/AddRow";
import { CategoryRow } from "../components/categoryRow";
import { Zoom } from "../components/zoom";
const Home = () => {
  return (
    <div className="py-10">
      <Zoom />
      <CategoryRow />
      <AddRow />
    </div>
  );
};

export { Home };
