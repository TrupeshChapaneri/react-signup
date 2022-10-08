import React, { useContext, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import {
  defaultValuesFan,
  defaultValuesTalent,
  signUpFan,
  signUpTalent,
} from "./validations/sign-up.schema";
import { callApi } from "./api-helpers/api-helper";
import { FormFan } from "./components/form-fan";
import { FormTalent } from "./components/form-talent";
import { GlobalContext } from "./context/global-context";
import { UnAuthenticatedLayout } from "./layouts/unauthenticated-layout";
import { signUpFanURL, signUpTalentURL } from "./api-helpers/url";
import { ToggleButton } from "./components/toggle-button";

function App() {
  const [isSignUpfan, setIsSignUpfan] = useState(true);
  const { setGlobalState } = useContext(GlobalContext);

  const {
    handleSubmit: handleSubmitFan,
    errors: errorsFan,
    control: controlFan,
    clearErrors: clearErrorsFan,
    reset: resetFan,
  } = useForm({
    mode: "onTouched",
    shouldFocusError: true,
    reValidateMode: "onChange",
    submitFocusError: true,
    shouldUnregister: false,
    resolver: joiResolver(signUpFan),
    defaultValues: defaultValuesFan,
  });

  const {
    handleSubmit: handleSubmitTalent,
    errors: errorsTalent,
    control: controlTalent,
    clearErrors: clearErrorsTalent,
    reset: resetTalent,
  } = useForm({
    mode: "onTouched",
    shouldFocusError: true,
    reValidateMode: "onChange",
    submitFocusError: true,
    shouldUnregister: false,
    resolver: joiResolver(signUpTalent),
    defaultValues: defaultValuesTalent,
  });

  const submitForm = (submitdata) => {
    callApi({
      url: isSignUpfan ? signUpFanURL() : signUpTalentURL(),
      postData: submitdata,
      onSuccess: (payload) => {
        setGlobalState((prv) => ({
          ...prv,
          userAuth: true,
          userDetails: {
            ...payload,
            ...submitdata,
          },
        }));
        resetFan(defaultValuesFan);
        resetTalent(defaultValuesTalent);
        alert(`${isSignUpfan ? "Fan" : "Talent"} Account Created Successfully`);
      },
      onFailure: (e) => {
        console.log(e);
        alert("Some thing want wrong please try again later");
      },
    });
  };

  return (
    <UnAuthenticatedLayout>
      <ToggleButton
        {...{ setIsSignUpfan, clearErrorsFan, clearErrorsTalent }}
      />

      <Typography
        className="form-head"
        component="h1"
        variant="h5"
        align="center"
      >
        Create your {isSignUpfan ? "Fan" : "Talent"} Account
      </Typography>
      {isSignUpfan ? (
        <FormFan {...{ controlFan, errorsFan }} />
      ) : (
        <FormTalent {...{ controlTalent, errorsTalent }} />
      )}

      <Button
        variant="contained"
        className="mt-3"
        onClick={
          isSignUpfan
            ? handleSubmitFan(submitForm)
            : handleSubmitTalent(submitForm)
        }
      >
        Sign UP
      </Button>
    </UnAuthenticatedLayout>
  );
}

export default App;
