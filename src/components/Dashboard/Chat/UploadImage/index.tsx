import { useNavigate, useParams } from "react-router-dom";
import { useUploadImageMutation } from "../../../../redux/api";
import { handleError } from "../../../../utils/helper";
import { toast } from "react-toastify";
import { useEffect } from "react";

const uploadImage = ({
  userId,
  receiverId,
  sendMessage,
  appendSingleMessage,
}: {
  userId: string;
  receiverId: any;
  sendMessage: any;
  appendSingleMessage: any;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [uploadImage, { data, isLoading }] = useUploadImageMutation();

  const getImageUrl = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      await uploadImage(formData)
        .unwrap()
        .catch((error: any) => handleError(error, navigate));
    }
  };

  useEffect(() => {
    if (data?.success) {
      const url: string = data?.url;
      const payload = {
        conversationId: id,
        content: url,
        receiver: receiverId,
        contentType: "image",
      };
      sendMessage(JSON.stringify(payload));
      appendSingleMessage("today", id, {
        content: url,
        senderDetails: { _id: userId },
        contentType: "image",
      });
    }
  }, [data]);

  return { isUploading: isLoading, getImageUrl };
};

export default uploadImage;
