import { useRef } from "react";
import { useCreatePost } from "../../../../context/CreatePostContext";
import Resizer from "react-image-file-resizer";

const Options = () => {
  const imageRef = useRef<any>();
  const { setImages, images, setImageWarning } = useCreatePost();

  const resizeFile = (file: any) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        2000,
        2000,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "blob"
      );
    });

  const onChange = async (e: any) => {
    const files = e.target.files;
    if (files) {
      if (images.length + files.length > 4) {
        setImageWarning(true);
      } else {
        setImageWarning(false);
        //map through the files and create a new image object for each
        Array.from(files).map(async (file: any, index) => {
          const resized: any = await resizeFile(file);
          setImages((prevImages: any) => [
            ...prevImages,
            { id: btoa(index + "" + Date.now()), file: resized },
          ]);
        });
      }
    }
  };

  return (
    <div className=" flex items-center space-x-2">
      <input
        ref={imageRef}
        onChange={onChange}
        type="file"
        accept="image/*"
        multiple
        hidden
      />
      <div
        role="button"
        onClick={() => {
          imageRef.current.click();
        }}
        className="hover:bg-gray-100 h-12 w-12 flex items-center justify-center rounded-full "
      >
        <span className="material-icons-outlined text-gray-600 text-2xl">
          collections
        </span>
      </div>
      <div
        role="button"
        className="hover:bg-red-50 h-12 w-12 flex items-center justify-center rounded-full "
      >
        <i className="fa-solid fa-user-tag text-xl text-red-500"></i>{" "}
      </div>
    </div>
  );
};

export default Options;
