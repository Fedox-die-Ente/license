'use server';

import {CreateUserParams} from "@/lib/actions/shared.types";
import {connectToDatabase} from "@/lib/mongoose";
import User from "@/database/user.model";

export async function createUser(userData: CreateUserParams) {

    try {
        await connectToDatabase();

        const newUser = await User.create(userData);

        return newUser;
    } catch (error) {
        console.log("=> an error occurred: ", error);
        return null;
    }

}
