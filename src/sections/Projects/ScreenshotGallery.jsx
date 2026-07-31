import { useState } from "react";

const ScreenshotGallery = ({ screenshots, title }) => {
  const [selectedImage, setSelectedImage] = useState(screenshots[0]);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-gray-200 shadow-lg bg-gray-100 p-3">
        <img
          src={selectedImage}
          alt={title}
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {screenshots.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 transition-all duration-300 ${selectedImage === image
                ? "border-blue-600 scale-105"
                : "border-transparent hover:border-gray-300"
              }`}
          >
            <img
              src={image}
              alt={`${title}-${index}`}
              className="w-full h-20 object-contain bg-gray-100"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotGallery;