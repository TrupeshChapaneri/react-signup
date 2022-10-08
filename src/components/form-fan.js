import React from "react";
import { Input } from "./form";

function FormFan({ controlFan, errorsFan }) {
  return (
    <form>
      <Input
        {...{
          control: controlFan,
          errors: errorsFan.firstName,
          name: "firstName",
          label: "First Name",
        }}
      />
      <Input
        {...{
          control: controlFan,
          errors: errorsFan.lastName,
          name: "lastName",
          label: "Last Name",
        }}
      />
      <Input
        {...{
          control: controlFan,
          errors: errorsFan.email,
          name: "email",
          label: "Email",
        }}
      />
      <Input
        {...{
          control: controlFan,
          errors: errorsFan.username,
          name: "username",
          label: "User Name",
        }}
      />
      <Input
        {...{
          control: controlFan,
          errors: errorsFan.password,
          name: "password",
          label: "Password",
        }}
      />
    </form>
  );
}

export { FormFan };
