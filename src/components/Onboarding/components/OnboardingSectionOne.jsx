import React from "react";
import { Heading, Input, Text } from "../../../shared";
import { useForm } from "react-hook-form";

const OnboardingSectionOne = ({ goToNext }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    goToNext();
  };

  console.log("error", errors); // watch input value by passing the name of it

  return (
    <div className="onboarding-section-body">
      <div className="text-center">
        <Heading level="1">Welcome! First things first...</Heading>
        <Text type="body">You can always change them later.</Text>
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="First Name"
          register={register}
          required
          error={errors["First Name"]}
          inputProps={{
            placeholder: "Steve Jobs",
          }}
        />

        <Input
          label="Display Name"
          register={register}
          required
          error={errors["Display Name"]}
          inputProps={{
            placeholder: "Steve",
          }}
        />

        <input type="submit" value="Create Workplace" />
      </form>
    </div>
  );
};

export default OnboardingSectionOne;