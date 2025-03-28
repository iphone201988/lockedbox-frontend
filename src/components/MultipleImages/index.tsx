import { useRef, useState, useEffect } from "react";

interface ImageItem {
  id: string; // Unique identifier (URL for existing, temp URL for new)
  url: string; // Display URL
  isNew: boolean; // True for new images, false for existing
  file?: File; // File object for new images, undefined for existing
}

const MultiImageSelect = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: (data: any) => void;
}) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [imageItems, setImageItems] = useState<ImageItem[]>([]);
  // const [removedImages, setRemovedImages] = useState<string[]>([]);
  const maxImages = 5;

  // Initialize with existing images from the `images` prop
  useEffect(() => {
    console.log("formData::::", formData);
    const initialItems = formData.map((url: string | File) => {
      if (url instanceof File) {
        const generatedUrl = URL.createObjectURL(url);
        return {
          id: generatedUrl,
          url: generatedUrl,
          isNew: true,
          file: url,
        };
      } else {
        return {
          id: url,
          url: import.meta.env.VITE_BACKEND_URL + url,
          isNew: false,
        };
      }
    });
    setImageItems(initialItems);
  }, []);

  // Handle new image uploads
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const totalImages = imageItems.length + files.length;

    if (totalImages > maxImages) {
      alert(`Maximum ${maxImages} images allowed`);
      return;
    }

    const validImages = files.filter((file) => file.type.startsWith("image/"));
    const newItems = validImages.map((file) => {
      const url = URL.createObjectURL(file);
      return {
        id: url, // Using temp URL as ID; could use a UUID if preferred
        url,
        isNew: true,
        file,
      };
    });
    setImageItems((prev) => [...prev, ...newItems]);
  };

  // Remove an image (existing or new)
  const removeImage = (index: number) => {
    const item = imageItems[index];
    if (!item.isNew) {
      // Existing image: track it as removed
      // setRemovedImages((prev) => [...prev, item.id]);
    } else {
      // New image: revoke temporary URL
      URL.revokeObjectURL(item.url);
    }
    setImageItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Update formData with kept existing URLs and new Files
  useEffect(() => {
    const keptExisting = imageItems
      .filter((item) => !item.isNew)
      .map((item) => item.id);
    const newFiles = imageItems
      .filter((item) => item.isNew)
      .map((item) => item.file!);
    setFormData((prev: any) => ({
      ...prev,
      storageImages: [...keptExisting, ...newFiles],
    }));
  }, [imageItems, setFormData]);

  // Cleanup temporary URLs on unmount
  useEffect(() => {
    return () => {
      imageItems.forEach((item) => {
        if (item.isNew) {
          URL.revokeObjectURL(item.url);
        }
      });
    };
  }, []); // Runs only on unmount

  return (
    <div
      className={`w-full max-md:max-w-full ${
        imageItems.length !== 0 ? "" : "max-w-[400px]"
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
        {imageItems.length > 0 && (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {imageItems.map((item, index) => (
              <div key={item.id} className="relative group">
                <img
                  src={item.url}
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
            {imageItems.length < maxImages && (
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
        {imageItems.length === 0 && (
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
        {/* {imageItems.length < 2 && (
          <p className="text-sm text-red-500">
            Please upload at least 2 images
          </p>
        )} */}
        <p className="text-sm text-gray-500">
          {imageItems.length}/{maxImages} images uploaded
        </p>
      </div>
    </div>
  );
};

export default MultiImageSelect;
