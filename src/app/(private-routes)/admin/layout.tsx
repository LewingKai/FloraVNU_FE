import SideBar from "./_components/SideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row gap-6 px-[5vw] mt-28 min-h-[500px] relative">
      <SideBar />
      <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
