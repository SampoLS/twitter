export function getImgSize(imgUrl: string) {
  let width: string, height: string;

  if (imgUrl && imgUrl.includes("/")) {
    const res = imgUrl.split("/");
    const imgSize = res[res.length - 1];
    const size = imgSize.split("x");
    width = size[0];
    height = size[1];

    return { width, height }
  }

  return;
}