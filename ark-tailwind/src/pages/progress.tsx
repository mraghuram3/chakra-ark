import { Progress } from "../components/progress";

export const ProgressPage = () => {
  return (
    <div className="flex w-full flex-1 flex-col p-20">
      <div className="gap-30 grid  gap-60 w-300 self-center ">
        <ProgressComp />
        <ProgressComp2 />
      </div>
    </div>
  );
};

export const ProgressComp = () => {
  return (
    <div className="flex  flex-1 justify-center">
      <Progress value={80} />
    </div>
  );
};

export const ProgressComp2 = () => {
  return (
    <div className="flex flex-1 justify-center">
      <Progress
        value={30}
        trackClassName="bg-primary-300"
        indicatorClassName="bg-secondary-three-500"
      />
    </div>
  );
};
