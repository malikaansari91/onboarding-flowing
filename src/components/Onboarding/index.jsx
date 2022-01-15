import { useState } from "react";

import logo from "../../assets/logo.svg";
import { useStepper } from "../../context";
import { Heading, Stepper } from "../../shared";
import OnboardingSectionFour from "./components/OnboardingSectionFour";
import OnboardingSectionOne from "./components/OnboardingSectionOne";
import OnboardingSectionThree from "./components/OnboardingSectionThree";
import OnboardingSectionTwo from "./components/OnboardingSectionTwo";

function Onboarding() {
  const { incrementCurrentStep } = useStepper();
  return (
    <div className="onboarding-container">
      <div className="container">
        <div className="d-flex flex-justify-center onboarding-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading level="2">Eden</Heading>
        </div>
        <div className="container">
          <Stepper className="flex-items-center">
            <Stepper.Steps>
              <Stepper.Step id="first">
                <OnboardingSectionOne goToNext={incrementCurrentStep} />
              </Stepper.Step>
              <Stepper.Step id="second">
                <OnboardingSectionTwo goToNext={incrementCurrentStep} />
              </Stepper.Step>
              <Stepper.Step id="third">
                <OnboardingSectionThree goToNext={incrementCurrentStep} />
              </Stepper.Step>
              <Stepper.Step id="forth">
                <OnboardingSectionFour goToNext={incrementCurrentStep} />
              </Stepper.Step>
            </Stepper.Steps>
          </Stepper>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
