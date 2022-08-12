import ImageHolder from "./ImageHolder";

const Images = ({ images }: { images: any }) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  return (
    <div className="mt-3  rounded-3xl">
      <div className="w-full grid grid-cols-2 overflow-auto gap-2 rounded-3xl">
        {images?.map((image: string, index: number) => {
          return (
            <div
              key={index}
              className={
                images.length === 3
                  ? index === 0
                    ? "col-span-2 h-52 "
                    : "col-span-1 h-52 "
                  : images.length === 1
                  ? "col-span-2 max-h-[800px]"
                  : images.length === 2
                  ? "col-span-auto h-72"
                  : "col-span-auto h-52"
              }
            >
              <ImageHolder image={`${baseUrl}/posts/${image}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
