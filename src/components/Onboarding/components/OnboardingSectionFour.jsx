import React from "react";
import { Heading, Input, Text } from "../../../shared";
import { useForm } from "react-hook-form";

const OnboardingSectionFour = ({ goToNext }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    goToNext();
  };

  return (
    <div className="onboarding-section-body">
      <div className="text-center">
        <Heading level="1">Congratulations, Eren!</Heading>
        <Text type="body">
          You have completed onboarding, you can start using the Eden!
        </Text>
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" value="Launch Eden" />
      </form>
    </div>
  );
};

export default OnboardingSectionFour;
