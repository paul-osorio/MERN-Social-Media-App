interface ImageHolderInterface {
  image: any;
}

const ImageHolder = ({ image }: ImageHolderInterface) => {
  return (
    <div className="relative h-full">
      <img className="w-full h-full object-cover" src={image} alt="image" />
    </div>
  );
};

export default ImageHolder;
