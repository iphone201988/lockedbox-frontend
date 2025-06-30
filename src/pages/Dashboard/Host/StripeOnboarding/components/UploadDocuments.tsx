import { useEffect, useRef, useState } from "react";
import { useUploadStripeDocumentsMutation } from "../../../../../redux/api";
import Loader from "../../../../../components/Loader";
import { PoweredByStripe, UploadIcon } from "../../../../../icons";

type FileType = File | null;

const StripeUploadDocuments = ({ setStep }: { setStep: any }) => {
  const [files, setFiles] = useState<{
    frontSideDocument: FileType;
    backSideDocument: FileType;
  }>({
    frontSideDocument: null,
    backSideDocument: null,
  });

  const [isUploading, setIsUploading] = useState(false);

  const frontInputRef = useRef<HTMLInputElement | null>(null);
  const backInputRef = useRef<HTMLInputElement | null>(null);

  const [uploadStripeDocuments, { data, isLoading }] =
    useUploadStripeDocumentsMutation();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "front" | "back"
  ) => {
    const file = e.target.files?.[0] || null;
    if (side === "front") {
      setFiles((prev) => ({ ...prev, frontSideDocument: file }));
    } else {
      setFiles((prev) => ({ ...prev, backSideDocument: file }));
    }
  };

  const handleFileUploadClick = (side: "front" | "back") => {
    if (side === "front") {
      frontInputRef.current?.click();
    } else {
      backInputRef.current?.click();
    }
  };

  const handleDocumentUpload = async () => {
    if (!files.frontSideDocument || !files.backSideDocument) {
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("front", files.frontSideDocument);
    formData.append("back", files.backSideDocument);

    try {
      await uploadStripeDocuments(formData).unwrap();
    } catch (error) {
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    if (data?.success) {
      setStep(3);
    }
  }, [data]);

  const isUploadButtonEnabled =
    files.frontSideDocument && files.backSideDocument;

  return (
    <>
      <div className="border border-[#eeeeee] p-[20px] rounded-[16px] max-w-[520px] w-full flex flex-col gap-[16px]">
        <div className="text-xl font-bold">
          Upload your drivers license or passport
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          {isLoading && <Loader />}
          <div className="flex w-full justify-center items-center space-x-2">
            <div className="w-[50%] border border-[#eeeeee] py-[12px] px-[16px] rounded-[12px] flex flex-col justify-center items-center h-[120px]">
              <UploadIcon />
              <button
                type="button"
                className="cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => handleFileUploadClick("front")}
              >
                Front Side document
              </button>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={frontInputRef}
                onChange={(e) => handleFileChange(e, "front")}
              />
              {files.frontSideDocument && (
                <p className="text-sm mt-2 text-green-600 text-center break-words whitespace-normal w-full max-w-full px-2">
                  {" "}
                  {files.frontSideDocument.name}
                </p>
              )}
            </div>

            <div className="w-[50%] border border-[#eeeeee] py-[12px] px-[16px] rounded-[12px] flex flex-col justify-center items-center h-[120px]">
              <UploadIcon />
              <button
                type="button"
                className="cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => handleFileUploadClick("back")}
              >
                Back Side document
              </button>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={backInputRef}
                onChange={(e) => handleFileChange(e, "back")}
              />
              {files.backSideDocument && (
                <p className="text-sm mt-2 text-green-600 text-center break-words whitespace-normal w-full max-w-full px-2">
                  {files.backSideDocument.name}
                </p>
              )}
            </div>
          </div>

          <button
            className={`py-[12px] px-[16px] rounded-[12px] text-white w-full mt-5 transition-colors ${
              isUploadButtonEnabled && !isUploading
                ? "bg-[#235370] cursor-pointer hover:bg-[#1a3f57]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            type="button"
            disabled={!isUploadButtonEnabled || isUploading}
            onClick={handleDocumentUpload}
          >
            {isUploading ? "Uploading..." : "Upload Documents"}
          </button>
        </div>
      </div>
      <PoweredByStripe />
    </>
  );
};

export default StripeUploadDocuments;
