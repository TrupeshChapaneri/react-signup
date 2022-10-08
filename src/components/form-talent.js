import React from "react";
import { Input } from "./form";

function FormTalent({ controlTalent, errorsTalent }) {
  return (
    <form>
      <Input
        {...{
          control: controlTalent,
          errors: errorsTalent.first_name,
          name: "first_name",
          label: "First Name",
        }}
      />
      <Input
        {...{
          control: controlTalent,
          errors: errorsTalent.last_name,
          name: "last_name",
          label: "Last Name",
        }}
      />
      <Input
        {...{
          control: controlTalent,
          errors: errorsTalent.email,
          name: "email",
          label: "Email",
        }}
      />
      <Input
        {...{
          control: controlTalent,
          errors: errorsTalent.username,
          name: "username",
          label: "User Name",
        }}
      />
      <Input
        {...{
          control: controlTalent,
          errors: errorsTalent.password,
          name: "password",
          label: "Password",
        }}
      />
    </form>
  );
}

export { FormTalent };
