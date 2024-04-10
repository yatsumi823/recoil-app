import { TaskType } from "@/type/TaskType";
import { atom, selector } from "recoil";

export const addTitleState = atom<Array<TaskType>>({
    key: "addTitleState",
    default: []
});

export const addTitleStateLerngth = selector<number>({
    key: "addTitleStateLerngth",
    get: ({get}) => {
        const addTitleNumber: Array<TaskType> = get(addTitleState);
        return addTitleNumber?.length || 0;
    }
})