import AdminPostForm from "../components/AdminPostForm"
import AdminSidbar from "../components/AdminSidbar"


const AdminPost = () => {
  return (
    <div style={{backgroundColor: "rgb(244, 247, 254)"}}>

    <div className="flex h-full w-full">
        <AdminSidbar />
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
          <div className="h-full">
          <AdminPostForm />
          </div>
        </main>
      </div>
    </div>
    </div>
  )
}

export default AdminPost
