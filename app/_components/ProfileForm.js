"use client";
import { useFormStatus } from "react-dom";
import Input from "./Input";
import Button from "./Button";
import { updateUserAction } from "../_lib/actions";

const fields = [
  { name: "name", label: "Name" },
  { name: "email", label: "Email", disabled: true },
  { name: "phone", label: "Phone Number" },
  { name: "city", label: "City" },
  { name: "state", label: "State" },
  { name: "country", label: "Country" },
  { name: "postalCode", label: "Postal Code" },
  { name: "street", label: "Address" },
];

function ProfileForm({ userDetail = {} }) {
  return (
    <form action={updateUserAction} className="flex flex-col h-full justify-between">
      <div className="grid grid-cols-12 gap-4">
        {fields.map((fieldProps) => (
          <Input key={fieldProps.name} mainClass="col-span-4" defaultValue={userDetail[fieldProps.name] || ""} required {...fieldProps} />
        ))}
      </div>
      <div className="text-end">
        <FormStatusButton />
      </div>
    </form>
  );
}

function FormStatusButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Updating..." : "Update"}
    </Button>
  );
}

export default ProfileForm;
