import placeholderImg from "../../../assets/images/placeholderImg.jpg";
import Image from "../../../components/ui/Image";

interface ImageHolderInterface {
  image: any;
}

const ImageHolder = ({ image }: ImageHolderInterface) => {
  return (
    <div className="relative h-full">
      <Image
        src={image}
        placeholderImg={placeholderImg}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageHolder;
