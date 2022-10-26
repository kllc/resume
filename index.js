export default () => {
  const index = [
    {
      src: "encode.html",
      anchor: true,
    },
    {
      src: "sample1.md",
    },
    {
      src: "sample1.md",
      date: "22.1.1",
    },
    {
      src: "sample1.md",
      date: "22.1.1",
      title: "サンプル",
      text: "サンプル",
      img: "data:image/png;base64,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",
      author: {
        name: "K",
        avatar: "https://kllc.github.io/repo/img/user.png",
        message: "叩き上げのコピペエンジニアです。",
      },
    },
  ];
  return index;
};
