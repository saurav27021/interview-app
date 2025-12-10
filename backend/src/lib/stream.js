import {StreamChat} from "stream-chat";
import {ENV} from "./env.js";

const apikey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if(!apikey || !apiSecret){
    console.error("Stream api or secret key is missing");
}

export const chatClient = StreamChat.getInstance(apikey,apiSecret);

export const upsertStreamUser = async(userData)=>{
    try{
        await chatClient.upsertUser(userData);
        console.log("String user upserted", userData)
    }catch(err){
        console.error("Error upserting stream user",err);
    }
}

export const deleteStreamUser = async(userData)=>{
    try{
        await chatClient.deleteUser(userId);
        console.log("Stram user deleted ",userId)
    }catch(err){
        console.error("Error deleting stream user",err);
    }
};

// add another method to generate tokens

