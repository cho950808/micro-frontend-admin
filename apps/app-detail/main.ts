const main = async () => {
  const { mountAppDetail } = await import("./src/mount");
  mountAppDetail();
};

export default main;

export const app = main();
