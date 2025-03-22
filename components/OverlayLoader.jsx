import Loader from "@/components/Loader";

export default function OverlayLoader() {
  return (
    <div className="fixed inset-0 z-50 min-h-screen bg-black/50 grid place-items-center overflow-hidden">
      <Loader />
    </div>
  )
}