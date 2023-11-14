import type Emoji from "./Emoji";

export default interface Entry {
    id: number;
    body: string;
    emoji: Emoji | null;
    dataCreacio: Date;
    user: string;
}