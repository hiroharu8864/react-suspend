import { FC, memo, useEffect } from "react";

export const SamplePage: FC = memo(() => {
  useEffect(() => {
    const timer = setInterval(() => {
      // コールバック関数
      console.log("Hello, World!");
    }, 1000);

    return () => {
      /**
       * クリーンアップ関数
       * コールバック関数が返した関数はコンポーネントが
       * アンマウントされる時に実行される
       */

      clearInterval(timer);
    };
  }, []);

  return <p>Hello, World!</p>;
});
