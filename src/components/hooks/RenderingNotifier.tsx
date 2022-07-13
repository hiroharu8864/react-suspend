import { FC, memo } from "react";

type Props = {
  name: string;
};

export const RenderingNotifier: FC<Props> = memo((Props) => {
  const { name } = Props;
  console.log(`${name} is rendered`);
  return null;
});
