import { FC, memo } from "react";

export const TestPage: FC = memo(() => {
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const AlwaysSuspend: FC = () => {
    throw sleep(1000);
  };

  return (
    <>
      <p>Test Page</p>
      <AlwaysSuspend />
    </>
  );
});
