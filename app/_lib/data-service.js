import { notFound } from "next/navigation";
import Hotel from "../_models/hotelModel";
import User from "../_models/userModel";

export const getHotels = async () => {
  try {
    const hotels = await Hotel.find({}, { __v: 0, _id: 0, reviews: 0, amenities: 0, createdAt: 0, updatedAt: 0 });
    return hotels || [];
  } catch (error) {
    console.log("Error : ", error);

    throw error;
  }
};

export const getHotel = async (id, isApi = false) => {
  try {
    const hotel = await Hotel.find({ hotelId: id }, { __v: 0, _id: 0 });
    if (!hotel.length && !isApi) notFound();
    return hotel || {};
  } catch (error) {
    console.log("Error : ", error);

    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const userAlreadyExist = await User.findOne({ name: user.name });
    if (userAlreadyExist) throw new Error("User already Exist!");
    const newUser = await User.create(user);

    return newUser;
  } catch (error) {
    console.log("Error : ", error);

    throw error;
  }
};

export const findUser = async (cred) => {
  try {
    const user = await User.findOne({ email: cred.email });
    return user;
  } catch (error) {
    console.log("Error : ", error);

    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const user = await User.findOne({ _id: id }, { password: 0, _id: 0 });

    return (user || {}).toObject();
  } catch (error) {
    console.log("Error : ", error);

    throw error;
  }
};

export const updateUser = async (id, details) => {
  try {
    const user = await User.updateOne({ _id: id }, { $set: details });
    if (!user) throw new Error("User is not updated!");

    return user;
  } catch (error) {
    console.log("Error : ", error);

    throw error;
  }
};
