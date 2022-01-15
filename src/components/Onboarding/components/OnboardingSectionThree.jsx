import React from "react";
import { Heading, Input, Text } from "../../../shared";
import { useForm } from "react-hook-form";

const OnboardingSectionThree = ({ goToNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    goToNext();
  };

  return (
    <div className="onboarding-section-body">
      <div className="text-center">
        <Heading level="1">How are you planning to use Eden?</Heading>
        <Text type="body">
          We'll streamline your setup experince acccordingly.
        </Text>
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Workplace Name"
          register={register}
          required
          error={errors["Workplace Name"]}
          inputProps={{
            placeholder: "Eden",
          }}
        />

        <Input
          label="Workplace URL"
          leftComponent={"www.eden.com/"}
          register={register}
          error={errors["Workplace URL"]}
          inputProps={{
            placeholder: "Example",
          }}
        />

        <input type="submit" value="Create Workplace" />
      </form>
    </div>
  );
};

export default OnboardingSectionThree;
