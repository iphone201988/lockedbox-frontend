import { useRef, useState, useEffect } from "react";

const MultiImageSelect = ({ setFormData }: { setFormData: any }) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const maxImages = 10;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (selectedImages.length + files.length > maxImages) {
      alert(`Maximum ${maxImages} images allowed`);
      return;
    }
    const validImages = files.filter((file) => file.type.startsWith("image/"));
    setSelectedImages((prev) => [...prev, ...validImages]);
  };

  useEffect(() => {
    const urls = selectedImages.map((image) => URL.createObjectURL(image));
    setPreviewUrls(urls);
    setFormData((prev: any) => ({ ...prev, storageImages: selectedImages }));
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [selectedImages]);

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`w-full max-md:max-w-full  ${
        previewUrls.length != 0 ? "" : "max-w-[400px]"
      }`}
    >
      <input
        type="file"
        ref={imageRef}
        name="storageImages"
        className="hidden"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />

      <div className="space-y-4">
        {/* Image Grid */}
        {previewUrls.length > 0 && (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {previewUrls.map((url, index) => (
              <div key={url} className="relative group">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-32 object-contain rounded-lg border border-gray-200"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(index);
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors shadow-sm"
                >
                  ×
                </button>
              </div>
            ))}

            {/* Add More Button */}
            {selectedImages.length > 0 && selectedImages.length < maxImages && (
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer h-32 bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => imageRef.current?.click()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-sm text-gray-600 mt-1">Add More</span>
              </div>
            )}
          </div>
        )}

        {/* Initial Upload Area */}
        {previewUrls.length === 0 && (
          <div
            className="py-8 px-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => imageRef.current?.click()}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="text-center">
                <p className="text-gray-700 font-medium">
                  Click here to add pics for your listing
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Minimum 2 photos required (max {maxImages})
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Validation Messages */}
        {/* {selectedImages.length < 2 && (
          <p className="text-sm text-red-500">
            Please upload at least 2 images
          </p>
        )} */}
        <p className="text-sm text-gray-500">
          {selectedImages.length}/{maxImages} images uploaded
        </p>
      </div>
    </div>
  );
};

export default MultiImageSelect;
