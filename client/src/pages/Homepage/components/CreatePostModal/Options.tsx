import { useRef } from "react";
import { useCreatePost } from "../../../../context/CreatePostContext";

const Options = () => {
  const imageRef = useRef<any>();
  const { setImages, images, setImageWarning } = useCreatePost();

  const onChange = (e: any) => {
    const files = e.target.files;
    if (files) {
      if (images.length + files.length > 4) {
        setImageWarning(true);
      } else {
        setImageWarning(false);
        //map through the files and create a new image object for each
        Array.from(files).map((file: any, index) => {
          setImages((prevImages: any) => [
            ...prevImages,
            { id: btoa(index + "" + Date.now()), file },
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
