import { createContext, useContext, useEffect, useState } from "react";

interface ICreatePostProvider {
  children: React.ReactNode;
}
interface ICreatePostContext {
  post: any;
  setPost: (post: any) => void;
  images: any[];
  setImages: (images: any) => void;
  imageWarning: boolean;
  setImageWarning: (imageWarning: boolean) => void;
}

export const CreatePostContext = createContext<ICreatePostContext>({
  post: null,
  setPost: () => {},
  images: [],
  setImages: () => {},
  imageWarning: false,
  setImageWarning: () => {},
});

const CreatePostProvider = ({ children }: ICreatePostProvider) => {
  const [post, setPost] = useState(null);
  const [images, setImages] = useState([]);
  const [imageWarning, setImageWarning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageWarning(false);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [imageWarning]);

  const value: ICreatePostContext = {
    post,
    setPost,
    images,
    setImages,
    imageWarning,
    setImageWarning,
  };

  return (
    <CreatePostContext.Provider value={value}>
      {children}
    </CreatePostContext.Provider>
  );
};

export const useCreatePost = () => useContext(CreatePostContext);

export default CreatePostProvider;
