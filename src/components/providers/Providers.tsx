"use client";
interface ProvidersProps {
  children: React.ReactNode;
}
import ToasterProvider from "./toaster-provider/ToasterProvider";
const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ToasterProvider />
      {children}
    </>
  );
};

export default Providers;
