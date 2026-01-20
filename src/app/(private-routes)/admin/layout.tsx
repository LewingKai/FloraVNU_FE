import SideBar from "./_components/SideBar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="lg:hidden flex justify-center items-center min-h-[60vh] text-center text-lg font-semibold text-secondary">
        Vui lòng sử dụng máy tính để truy cập trang quản trị.
      </div>
      <div className="hidden lg:flex flex-row gap-6 px-[5vw] my-24 min-h-[500px] relative">
        <SideBar />
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
