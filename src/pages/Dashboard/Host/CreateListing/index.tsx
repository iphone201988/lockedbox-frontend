import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { useForm } from "../../../../hooks/useForm";
import { StepOneSchema, StepTwoSchema } from "../../../../schema";
import * as yup from "yup";

export type StepOneFormType = yup.InferType<typeof StepOneSchema>;
export type StepTwoFormType = yup.InferType<typeof StepTwoSchema>;

export type ListingStepProp<T> = {
  handleComplete: () => void;
  formData: T;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  errors: Partial<T>;
  isChecked?: boolean;
  checkboxError?: string;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
};

const StepOneInitialState: StepOneFormType = {
  address: "",
  latitude: "37.7749",
  longitude: "-122.4194",
  spaceType: "",
  features: [],
  allowedStorage: [],
  length: "",
  width: "",
  price: "",
};

const StepTwoInitialState: StepTwoFormType = {
  tagline: "",
  description: "",
  policies: "",
  accessPolicy: "",
  frequency: "",
};

const CreateListing = () => {
  const {
    formData: stepOne,
    setFormData: setStepOne,
    errors: stepOneErrors,
    validate: stepOneValidate,
  } = useForm(StepOneSchema, StepOneInitialState);
  const {
    formData: stepTwo,
    setFormData: setStepTwo,
    errors: stepTwoErrors,
    validate: stepTwoValidate,
  } = useForm(StepTwoSchema, StepTwoInitialState);

  const [currentStep, setCurrentStep] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const handleNextStep = async (step: number) => {
    // console.log("stepOne::::", stepOne);
    // if (step === 1) {
    //   const hasErrors: boolean = await stepOneValidate();
    //   if (!isChecked || hasErrors) {
    //     if (!isChecked) {
    //       setCheckboxError("You must certify your location.");
    //     } else {
    //       setCheckboxError("");
    //     }
    //     return;
    //   }

    //   setCheckboxError("");
    // }
    // if (step === 2) {
    //   const hasErrors: boolean = await stepTwoValidate();
    //   if (hasErrors) return;
    // }
    setCurrentStep(step);
  };

  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs
        selectedIndex={currentStep}
        onSelect={handleNextStep as any}
        className={"step-form"}
      >
        <TabList>
          <Tab onClick={() => handleNextStep(0)}>
            <div className="step-button flex items-center gap-[12px]">
              <div className="step-number w-[56px] h-[56px] rounded-full text-white flex items-center justify-center text-[20px] !font-semibold">
                1
              </div>
              <div>
                <p className="step-count !font-normal">Step 1/3</p>
                <p className="font-semibold">Basic Information</p>
              </div>
            </div>
          </Tab>
          <Tab onClick={() => handleNextStep(1)}>
            <div className="step-button flex items-center gap-[12px] border-l border-r border-[#EEEEEE] max-md:border-0">
              <div className="step-number w-[56px] h-[56px] rounded-full text-white flex items-center justify-center text-[20px] !font-semibold">
                2
              </div>
              <div className="">
                <p className="step-count !font-normal">Step 2/3</p>
                <p className="font-semibold">Description</p>
              </div>
            </div>
          </Tab>
          <Tab onClick={() => handleNextStep(2)}>
            <div className="step-button flex items-center gap-[12px]">
              <div className="step-number w-[56px] h-[56px] rounded-full text-white flex items-center justify-center text-[20px] !font-semibold">
                3
              </div>
              <div>
                <p className="step-count !font-normal">Step 3/3</p>
                <p className="font-semibold">Verification</p>
              </div>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <StepOne
            handleComplete={() => handleNextStep(1)}
            formData={stepOne}
            setFormData={setStepOne}
            errors={stepOneErrors}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            checkboxError={checkboxError}
          />
        </TabPanel>
        <TabPanel>
          <StepTwo
            handleComplete={() => handleNextStep(2)}
            formData={stepTwo}
            setFormData={setStepTwo}
            errors={stepTwoErrors}
          />
        </TabPanel>
        <TabPanel>
          <StepThree />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CreateListing;
