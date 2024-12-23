type ConnectorProps = {
  id: string;
};

export const Connector = ({ id }: ConnectorProps) => {
  return (
    <div
      id={id}
      className="flex w-3 h-3 items-center justify-center border border-2 border-[#dbdbdb] rounded-[50%]"
    >
      <div className="w-[7px] h-[7px] bg-[#66a3ff] rounded-[50%]"></div>
    </div>
  );
};
