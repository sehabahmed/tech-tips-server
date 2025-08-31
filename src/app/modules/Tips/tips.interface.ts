import { ObjectId } from "mongoose";

export type TTips = {
    title: string;
    content: string;
    tags: string;
    author?: string;
    upvotes?: number;
    upvotedBy?: ObjectId;
    comments?: ObjectId;
    isPremium: boolean;
    createdAt?: Date;
    updatedAt?: Date;
} 