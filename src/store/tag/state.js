
import { utils } from "@/common/utils.js";

const state = {
    tagViewList : utils.getLocalStorage('STR_TAG_VIEW') || []
};

export default state;
