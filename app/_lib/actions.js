"use server";

import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { createUser, updateUser } from "./data-service";
import encryptPassword from "../_helpers/encryptPassword";
import { revalidatePath } from "next/cache";

export const signUpAction = async (formData) => {
  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  user.password = await encryptPassword(user.password);
  const newUser = await createUser(user);

  if (newUser) redirect("/login");
};

export const loginAction = async (formData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response) redirect("/profile");
    return response;
  } catch (error) {
    console.log("ERROR ACTIOn: ", error);

    throw error;
  }
};

export const logoutAction = async () => {
  await signOut({ redirectTo: "/login" });
};

export const updateUserAction = async (formData) => {
  const session = await auth();
  const details = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    address: {
      street: formData.get("street"),
      city: formData.get("city"),
      state: formData.get("state"),
      country: formData.get("country"),
      postalCode: formData.get("postalCode"),
    },
  };
  await updateUser(session._id, details);

  revalidatePath("/profile");
};
