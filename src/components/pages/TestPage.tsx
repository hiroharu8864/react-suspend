import { FC, memo, Suspense, useState } from "react";

import { RenderingNotifier } from "../hooks/RenderingNotifier";
import { getData } from "../hooks/getData";

export const TestPage: FC = memo(() => {
  /**
   * Promiseは非同期処理を表すオブジェクトのこと。
   * 非同期処理終了後に解決(settle)する。
   * コンポーネントがPromiseをthrowした場合、
   * そのコンポーネントはサスペンドとなる。
   */
  const throwPromise = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  /**
   * 1秒後にPromiseを返してサスペンドを発生させる。
   */
  const AlwaysSuspend: FC = () => {
    // console.log("Always Suspend is rendered.")
    throw throwPromise(1000);
  };

  const SometimesSuspend: FC = () => {
    if (Math.random() < 0.5) {
      throw throwPromise(1000);
    }
    return <p>Hello, World!!</p>;
  };

  const [count, setCount] = useState(0);
  const { data } = getData;
  console.log(data);

  return (
    <>
      <h2>コンポーネント読み込みテスト</h2>
      <p> Data is {data} </p>
      <RenderingNotifier name="outside-Suspense" />
      <Suspense fallback={<p>悪質な広告ページ</p>}>
        {/* <AlwaysSuspend /> */}
        <SometimesSuspend />
        <RenderingNotifier name="inside-Suspense" />
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      </Suspense>
    </>
  );
});
