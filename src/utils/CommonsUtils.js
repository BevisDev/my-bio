import {
  SYMBOL_ID,
  UL_SOCIAL_CV,
  UL_SOCIAL_DASHBOARD,
} from "../constant/Const";

export const getLinkRefID = (id) => {
  return SYMBOL_ID + id;
};

export const handleStyle = (eleDOM) => {
  let style = "";
  switch (eleDOM) {
    case UL_SOCIAL_DASHBOARD:
      style = "flex-center mt-1 mb-3 gap-14";
      break;
    case UL_SOCIAL_CV:
      style = "flex-center mt-1 mb-3 gap-3";
      break;
    default:
      break;
  }
  return style;
};
