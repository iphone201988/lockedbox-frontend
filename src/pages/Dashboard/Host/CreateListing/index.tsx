import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { useForm } from "../../../../hooks/useForm";
import { StepOneSchema, StepTwoSchema } from "../../../../schema";
import * as yup from "yup";
import {
  useCreateListingMutation,
  useGetListingByIdQuery,
  useGetUserQuery,
  useUpdateListingMutation,
} from "../../../../redux/api";
import { handleError } from "../../../../utils/helper";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../../constants/api-responses";
import Loader from "../../../../components/Loader";
import { spaceFeatures } from "../../../../constants";

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
  handleBack?: () => void;
};

const StepOneInitialState: StepOneFormType = {
  address: "",
  city: "",
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
  description: "",
  policies: "",
  accessPolicy: "",
  frequency: "",
  storageImages: [],
};

const CreateListing = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: userData } = useGetUserQuery();

  console.log("userData::::", userData);

  const { data: listingData, isLoading: listingDataLoading } =
    useGetListingByIdQuery(id || "", { skip: !id });

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
  const [createListing, { data, isLoading }] = useCreateListingMutation();
  const [updateListing, { data: updatedData, isLoading: isUpating }] =
    useUpdateListingMutation();
  const [isDataLoaded, setIsDataLoaded] = useState(id ? false : true);

  const handleNextStep = async (step: number) => {
    console.log("stepOne::::", stepTwo);
    if (step === 1) {
      const hasErrors: boolean = await stepOneValidate();
      if (!isChecked || hasErrors) {
        if (!isChecked) {
          setCheckboxError("You must certify your location.");
        } else {
          setCheckboxError("");
        }
        return;
      }

      setCheckboxError("");
    }
    if (step === 2) {
      const hasErrors: boolean = await stepTwoValidate();
      if (hasErrors) return;

      if (userData?.userExists.isStripeAccountConnected) {
        handleSubmit();
        return;
      }
    }
    setCurrentStep(step);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    Object.entries(stepOne).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (key == "features") {
          const features = stepOne.features?.map((item: any) => item.id);
          if (!features?.length) {
            if (!features?.includes("10")) features?.push("10");
            if (!features?.includes("11")) features?.push("11");
            if (!features?.includes("12")) features?.push("12");
          }
          formData.append("features", JSON.stringify(features));
        } else {
          formData.append(key, JSON.stringify(value));
        }
      } else {
        formData.append(key, value as string);
      }
    });

    Object.entries(stepTwo).forEach(([key, value]) => {
      if (key === "storageImages" && Array.isArray(value)) {
        let images: any = [];
        value.forEach((file: any) => {
          if (file instanceof File) {
            formData.append("storageImages", file);
          } else {
            images.push(file);
          }
        });
        if (images.length) formData.append("images", JSON.stringify(images));
      } else if (typeof value === "object") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value as string);
      }
    });

    console.log("data::::", stepOne, stepTwo, formData);
    if (id) {
      await updateListing({ id, body: formData })
        .unwrap()
        .catch((error: any) => handleError(error, navigate));
    } else {
      await createListing(formData)
        .unwrap()
        .catch((error: any) => handleError(error, navigate));
    }
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.LISTING_CREATED);
      navigate("/dashboard/listing", { replace: true });
    }
  }, [data]);

  useEffect(() => {
    if (updatedData?.success) {
      toast.success(ResponseMessages.LISTING_UPDATED);
      navigate("/dashboard/listing", { replace: true });
    }
  }, [updatedData]);

  useEffect(() => {
    if (listingData?.success) {
      const { listing } = listingData;

      const features = listing.features.map((item: any) => {
        return spaceFeatures.find((feature) => feature.id === item);
      });

      const stepOne = {
        address: listing.address,
        city: listing.city,
        latitude: listing.latitude,
        longitude: listing.longitude,
        spaceType: listing.spaceType,
        features: features,
        allowedStorage: listing.allowedStorage,
        length: listing.length,
        width: listing.width,
        price: listing.price,
      };

      const stepTwo = {
        description: listing.description,
        policies: listing.policies,
        accessPolicy: listing.accessPolicy,
        frequency: listing.frequency,
        storageImages: listing.storageImages,
      };

      setStepOne(stepOne);
      setStepTwo(stepTwo);
      setIsChecked(true);
      setIsDataLoaded(true);
    }
  }, [listingData]);

  if (listingDataLoading || !isDataLoaded) {
    return <Loader />;
  }

  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      {(isLoading || isUpating) && <Loader />}
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
          {!userData?.userExists.isStripeAccountConnected && (
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
          )}
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
            handleBack={() => setCurrentStep((prev) => prev - 1)}
          />
        </TabPanel>
        {!userData?.userExists.isStripeAccountConnected && (
          <TabPanel>
            <StepThree handleSubmit={handleSubmit} />
          </TabPanel>
        )}
      </Tabs>
    </div>
  );
};

export default CreateListing;
