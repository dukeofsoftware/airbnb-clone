interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="d:px-10 mx-auto max-w-[2520px] px-4 sm:px-2 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
