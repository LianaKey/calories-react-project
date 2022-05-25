export function useAddStyles(func: Function) {
  return function (styles: string) {
    const properties = styles.split(";"),
      objStyles: any = {};
    properties.forEach((item) => {
      if (item.trim() === "") return;
      const [name, value] = item.split(":").map((i) => i.trim());
      objStyles[name] = value;
    });
    return (e: any) => {
      func(e, objStyles);
    };
  };
}

export const onHoverProcessor = (e: any, styles: any) => {
  switch (e.type) {
    case "mouseover":
      Object.keys(styles).forEach((key) => {
        e.currentTarget.style[key] = styles[key];
      });
      break;
    case "mouseleave":
      Object.keys(styles).forEach((key) => {
        e.currentTarget.style[key] = "";
      });
      break;
    default:
      break;
  }
};
