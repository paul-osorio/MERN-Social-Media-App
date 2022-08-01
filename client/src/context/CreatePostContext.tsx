import { createContext, useContext, useState } from "react";

interface ICreatePostProvider {
  children: React.ReactNode;
}
interface ICreatePostContext {
  post: any;
  setPost: (post: any) => void;
  images: any[];
  setImages: (images: any) => void;
}

export const CreatePostContext = createContext<ICreatePostContext>({
  post: null,
  setPost: () => {},
  images: [],
  setImages: () => {},
});

const CreatePostProvider = ({ children }: ICreatePostProvider) => {
  const [post, setPost] = useState(null);
  const [images, setImages] = useState([]);

  const value: ICreatePostContext = {
    post,
    setPost,
    images,
    setImages,
  };

  return (
    <CreatePostContext.Provider value={value}>
      {children}
    </CreatePostContext.Provider>
  );
};

export const useCreatePost = () => useContext(CreatePostContext);

export default CreatePostProvider;
