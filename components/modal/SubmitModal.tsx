interface SubmitModalProps {
  onClose: () => void;
}

export default function SubmitModal({ onClose }: SubmitModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0E1E25] z-50 ">
      <div className="bg-white p-6 rounded-md w-[414px] h-[149px]">
        <p className="font-bold text-xl">Thank you!</p>
        <p className="mt-4">Your form submission has been received.</p>
        <a
          href="/"
          onClick={onClose}
          className="mt-2 inline-block text-green-900 hover:underline"
        >
          ← Back to our site
        </a>
      </div>
    </div>
  );
}
