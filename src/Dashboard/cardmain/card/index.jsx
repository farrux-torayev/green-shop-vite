const Card = ({ data }) => {
  return (
    <div>
      {data?.map(({ title, count }, index) => {
        return (
          <div
            key={index}
            className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors  "
          >
            <h2>{title}</h2>
            <span>({count})</span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
