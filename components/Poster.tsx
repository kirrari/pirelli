type PosterProps = {
  title?: string;
  imageUrl: string;
};

const Poster: React.FC<PosterProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative lg:hover:scale-110 transition">
      {title ? (
        <span className="uppercase absolute text-center w-full top-20 text-5xl">
          {title}
        </span>
      ) : (
        ''
      )}
      <img
        className="object-cover mx-auto rounded-xl"
        src={imageUrl}
        alt={title ? `${title} poster` : 'Poster'}
      />
    </div>
  );
};

export default Poster;
