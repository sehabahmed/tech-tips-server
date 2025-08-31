import { TTips } from "./tips.interface";
import { Tips } from "./tips.model";

const createTipsIntoDB = async (payload: TTips) => {
    const result = await Tips.create(payload);

    return result;
}

 