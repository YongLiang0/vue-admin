
import { utils } from "@/common/utils.js";

const state = {
    tagViewList : utils.getSessionStorage('STR_TAG_VIEW') || []
};

export default state;
