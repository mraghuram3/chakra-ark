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
    <div className="grid">
      <div className="small">Default</div>
      <Progress value={80} />
    </div>
  );
};

export const ProgressComp2 = () => {
  return (
    <div className="grid">
      <div className="small">Custom</div>
      <Progress
        value={30}
        trackClassName="bg-primary-300"
        indicatorClassName="bg-secondary-three-500"
      />
    </div>
  );
};
