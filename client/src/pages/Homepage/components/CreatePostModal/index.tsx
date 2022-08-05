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
        <CreatePostContext.Consumer>
          {(context) => (
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-5 rounded-3xl w-[500px] flex flex-col space-y-3 shadow-dark"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-medium text-gray-600">
                  Create a Post
                </h1>

                <CloseButton onClick={handleClose} />
              </div>
              <hr />

              <div className="min-h-[50px] max-h-[22rem] flex flex-col overflow-auto createpost-scrollbar">
                <TextArea />
                {context.images.length > 0 && <Images />}
              </div>
              <div className="flex items-center justify-between">
                <Options />
                {context.imageWarning && (
                  <div>
                    <div className="border text-red-400 border-red-300 px-3 py-1  text-sm w-fit rounded-full">
                      Maximum of 4 images only
                    </div>
                  </div>
                )}
              </div>
              <PostButton handleClose={handleClose} />
            </div>
          )}
        </CreatePostContext.Consumer>
      </CreatePostProvider>
    </Backdrop>
  );
};

export default CreatePostModal;
