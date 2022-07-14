import { FC, memo } from "react";

/**
 * 呼び出されるとconsole.log吐き出すだけのフック
 */
type Props = {
  name: string;
};

export const RenderingNotifier: FC<Props> = memo((Props) => {
  const { name } = Props;
  // console.log(`${name} is rendered`);
  return null;
});
