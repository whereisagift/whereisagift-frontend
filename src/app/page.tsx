import { Checkbox } from "@/ui";

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="oleg" />
        <label
          htmlFor="oleg"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Олеги
        </label>
      </div>
    </div>
  );
};

export default Home;
