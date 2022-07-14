let data: string | undefined;

export const getData = () => {
  /**
   * 1秒後に「Hello, 123」のようなランダムな数字を含む
   * 文字列を返す。
   */
  const fetcher = async (): Promise<string> => {
    await sleep(1000);
    return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
  };

  const data = fetcher;

  if (data === undefined) {
    throw fetcher().then((d) => (data = d));
  }
  return { data };
};
