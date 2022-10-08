import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { removeDoubleQuotes } from "../../app-utils";

function Input({ control, errors, name, label, rest }) {
  return (
    <div className="form-field">
      <label>{label} *</label>
      <Controller
        control={control}
        name={name}
        render={({ onChange, value, onBlur }) => (
          <TextField
            fullWidth
            placeholder={label}
            onBlur={onBlur}
            error={errors}
            variant="outlined"
            helperText={errors && removeDoubleQuotes(errors.message)}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...rest}
          />
        )}
      />
    </div>
  );
}

export { Input };
