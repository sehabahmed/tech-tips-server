import { ObjectId } from "mongoose";

export type TTips = {
    title: string;
    content: string;
    category: ObjectId;
    image: string;
    tags?: string;
    author?: string;
    upvotes?: number;
    upvotedBy?: ObjectId;
    comments?: ObjectId;
    isPremium: boolean;
    createdAt?: Date;
    updatedAt?: Date;
} 