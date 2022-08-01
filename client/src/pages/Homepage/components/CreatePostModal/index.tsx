import { Backdrop } from "../../../../components/modal";
import CreatePostProvider, {
  CreatePostContext,
} from "../../../../context/CreatePostContext";
import CloseButton from "./CloseButton";
import Images from "./Images";
import Options from "./Options";
import PostButton from "./PostButton";
import TextArea from "./TextArea";
interface ICreatePostModal {
  handleClose: () => void;
}

const CreatePostModal = ({ handleClose }: ICreatePostModal) => {
  return (
    <Backdrop handleClose={handleClose}>
      <CreatePostProvider>
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-5 rounded-3xl w-[500px] flex flex-col space-y-3 shadow-dark"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-gray-600">Create a Post</h1>

            <CloseButton onClick={handleClose} />
          </div>
          <hr />
          <CreatePostContext.Consumer>
            {(context) => (
              <div className="min-h-[50px] max-h-80 overflow-auto">
                <TextArea />
                {context.images.length > 0 && <Images />}
              </div>
            )}
          </CreatePostContext.Consumer>

          <Options />
          <PostButton />
        </div>
      </CreatePostProvider>
    </Backdrop>
  );
};

export default CreatePostModal;
